(function () {
  const COURSE_SYSTEM_URL = "https://d90019ij.github.io/nycu-experimental-surgery-11508/";
  const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const state = {
    emailRows: [],
    drafts: [],
    blocking: false,
    selected: new Set()
  };

  const els = {
    csvFile: document.querySelector("#csvFile"),
    uploadStatus: document.querySelector("#uploadStatus"),
    rangeMode: document.querySelector("#rangeMode"),
    startDate: document.querySelector("#startDate"),
    endDate: document.querySelector("#endDate"),
    filterSummary: document.querySelector("#filterSummary"),
    comparisonStatus: document.querySelector("#comparisonStatus"),
    warningList: document.querySelector("#warningList"),
    previewList: document.querySelector("#previewList"),
    previewTemplate: document.querySelector("#previewTemplate"),
    selectAll: document.querySelector("#selectAll"),
    clearAll: document.querySelector("#clearAll"),
    reviewConfirmed: document.querySelector("#reviewConfirmed"),
    downloadCsv: document.querySelector("#downloadCsv"),
    downloadJson: document.querySelector("#downloadJson"),
    exportStatus: document.querySelector("#exportStatus")
  };

  function normalizeName(value) {
    return String(value || "")
      .trim()
      .replace(/老師/g, "")
      .replace(/\s+/g, "");
  }

  function parseCourseDate(value) {
    const text = String(value || "").trim().replace(/\//g, "-");
    const match = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    if (!match) return null;
    return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  }

  function dateKey(value) {
    const date = parseCourseDate(value);
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function timeStartMinutes(value) {
    const match = String(value || "").match(/(\d{1,2}):(\d{2})/);
    if (!match) return 0;
    return Number(match[1]) * 60 + Number(match[2]);
  }

  function getToday() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }

  function addDays(date, days) {
    const next = new Date(date);
    next.setDate(next.getDate() + days);
    return next;
  }

  function inSelectedRange(course) {
    const date = parseCourseDate(course.date);
    if (!date) return false;

    const mode = els.rangeMode.value;
    if (mode === "all") return true;

    if (mode === "7" || mode === "14") {
      const today = getToday();
      return date >= today && date <= addDays(today, Number(mode));
    }

    const start = els.startDate.value ? parseCourseDate(els.startDate.value) : null;
    const end = els.endDate.value ? parseCourseDate(els.endDate.value) : null;
    if (start && date < start) return false;
    if (end && date > end) return false;
    return true;
  }

  function parseCsv(text) {
    const rows = [];
    let row = [];
    let field = "";
    let inQuotes = false;
    const input = String(text || "").replace(/^\uFEFF/, "");

    for (let i = 0; i < input.length; i += 1) {
      const char = input[i];
      const next = input[i + 1];

      if (char === '"' && inQuotes && next === '"') {
        field += '"';
        i += 1;
      } else if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        row.push(field);
        field = "";
      } else if ((char === "\n" || char === "\r") && !inQuotes) {
        if (char === "\r" && next === "\n") i += 1;
        row.push(field);
        if (row.some((cell) => String(cell).trim() !== "")) rows.push(row);
        row = [];
        field = "";
      } else {
        field += char;
      }
    }

    row.push(field);
    if (row.some((cell) => String(cell).trim() !== "")) rows.push(row);
    return rows;
  }

  function rowsToObjects(rows) {
    if (rows.length === 0) return [];
    const headers = rows[0].map((header) => String(header || "").trim());
    const headerMap = new Map(headers.map((header, index) => [header.toLowerCase(), index]));

    return rows.slice(1).map((row, index) => {
      const item = { rowNumber: index + 2 };
      headers.forEach((header, headerIndex) => {
        item[header] = String(row[headerIndex] || "").trim();
      });
      item.teacherName = item.teacherName || row[headerMap.get("teachername")] || "";
      item.email = item.email || row[headerMap.get("email")] || "";
      item.hospital = item.hospital || row[headerMap.get("hospital")] || "";
      item.department = item.department || row[headerMap.get("department")] || "";
      item.cc = item.cc || row[headerMap.get("cc")] || "";
      item.note = item.note || row[headerMap.get("note")] || "";
      item.normalizedName = normalizeName(item.teacherName);
      return item;
    }).filter((item) => item.teacherName || item.email);
  }

  function courseFingerprint(course) {
    return [
      normalizeName(course.teacherName),
      dateKey(course.date),
      course.weekday,
      course.time,
      course.group,
      course.topic,
      course.location,
      course.materialUrl,
      course.note
    ].map((value) => String(value || "").trim()).join("|");
  }

  function getFilteredCourses() {
    const seen = new Set();
    return (courseData || [])
      .filter(inSelectedRange)
      .filter((course) => {
        const key = courseFingerprint(course);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .sort((a, b) => {
        const dateDiff = parseCourseDate(a.date) - parseCourseDate(b.date);
        if (dateDiff !== 0) return dateDiff;
        return timeStartMinutes(a.time) - timeStartMinutes(b.time);
      });
  }

  function groupCoursesByTeacher(courses) {
    return courses.reduce((map, course) => {
      const key = normalizeName(course.teacherName);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(course);
      return map;
    }, new Map());
  }

  function setStatus(element, type, text) {
    element.className = `status-box ${type}`;
    element.textContent = text;
  }

  function validateEmailList(value) {
    return String(value || "")
      .split(/[;,]/)
      .map((email) => email.trim())
      .filter(Boolean);
  }

  function buildEmailIndex(rows) {
    const map = new Map();
    rows.forEach((row) => {
      if (!row.normalizedName) return;
      if (!map.has(row.normalizedName)) map.set(row.normalizedName, []);
      map.get(row.normalizedName).push(row);
    });
    return map;
  }

  function uniqueValues(values) {
    return [...new Set(values.map((value) => String(value || "").trim()).filter(Boolean))];
  }

  function formatCourseBlock(course, index) {
    const lines = [
      `【第${index + 1}堂】`,
      `授課日期：${dateKey(course.date) || course.date}（星期${course.weekday || ""}）`,
      `授課時間：${course.time || ""}`,
      `班別：${course.group || ""}`,
      `課程內容：${course.topic || ""}`,
      `上課地點：${course.location || ""}`,
      course.materialUrl ? `教材：查看教材：${course.materialUrl}` : "教材：教材尚未提供"
    ];

    if (course.note) lines.push(`備註：${course.note}`);
    return lines.join("\n");
  }

  function buildMailBody(teacherName, courses) {
    const courseBlocks = courses.map(formatCourseBlock).join("\n\n");
    const teacherQueryUrl = `${COURSE_SYSTEM_URL}?teacher=${encodeURIComponent(teacherName)}`;

    return `${teacherName}老師您好：

感謝老師撥冗協助115學年度第一學期醫學系五年級「實驗外科」課程教學。

提醒老師近期授課安排如下：

${courseBlocks}

敬請老師於授課前再次確認上述資訊。

教師授課查詢系統：
${teacherQueryUrl}

若授課資訊有誤或有任何疑問，請由系統中的「授課資訊回報」功能回覆，或直接與我聯繫。

再次感謝老師對外科教學的支持與協助！

敬祝
平安順心

國立陽明交通大學醫學系外科學科
林憶柔
電話：（02）2826-7000 分機65313`;
  }

  function buildGmailComposeUrl(draft) {
    const params = [
      "view=cm",
      "fs=1",
      `to=${encodeURIComponent(draft.to)}`,
      `su=${encodeURIComponent(draft.subject)}`,
      `body=${encodeURIComponent(draft.body)}`
    ];
    if (draft.cc) params.push(`cc=${encodeURIComponent(draft.cc)}`);
    return `https://mail.google.com/mail/?${params.join("&")}`;
  }

  function analyze() {
    const filteredCourses = getFilteredCourses();
    const courseMap = groupCoursesByTeacher(filteredCourses);
    const emailMap = buildEmailIndex(state.emailRows);
    const warnings = [];
    const drafts = [];
    let blocking = false;

    const missingEmail = state.emailRows.filter((row) => row.normalizedName && !row.email);
    const invalidEmail = state.emailRows.filter((row) => row.email && !EMAIL_PATTERN.test(row.email));
    const noCourse = state.emailRows.filter((row) => row.normalizedName && !courseMap.has(row.normalizedName));
    const courseNoEmail = [...courseMap.keys()].filter((name) => !emailMap.has(name));
    const duplicateDifferentEmail = [];

    emailMap.forEach((rows, name) => {
      const emails = uniqueValues(rows.map((row) => row.email));
      if (emails.length > 1) duplicateDifferentEmail.push({ name, emails });
    });

    if (missingEmail.length) {
      warnings.push({
        title: `警告：缺少 Email 的老師 ${missingEmail.length} 位`,
        detail: missingEmail.map((row) => `${row.teacherName || "(未填姓名)"}（第${row.rowNumber}列）`).join("、")
      });
    }

    if (invalidEmail.length) {
      warnings.push({
        title: `警告：Email 格式錯誤 ${invalidEmail.length} 筆`,
        detail: invalidEmail.map((row) => `${row.teacherName || "(未填姓名)"}：${row.email}（第${row.rowNumber}列）`).join("、")
      });
    }

    if (noCourse.length) {
      warnings.push({
        title: `提醒：Email 名單中有老師，但 courseData 找不到對應課程 ${noCourse.length} 筆`,
        detail: noCourse.map((row) => `${row.teacherName || "(未填姓名)"}（第${row.rowNumber}列）`).join("、")
      });
    }

    if (courseNoEmail.length) {
      warnings.push({
        title: `警告：courseData 有課程但 Email 名單中找不到 ${courseNoEmail.length} 位老師`,
        detail: courseNoEmail.join("、")
      });
    }

    if (duplicateDifferentEmail.length) {
      blocking = true;
      warnings.push({
        title: "錯誤：同名但不同 Email，已禁止產生寄信資料",
        detail: duplicateDifferentEmail.map((item) => `${item.name}：${item.emails.join("、")}`).join("；")
      });
    }

    courseMap.forEach((courses, normalizedName) => {
      const rows = emailMap.get(normalizedName) || [];
      const validRows = rows.filter((row) => row.email && EMAIL_PATTERN.test(row.email));
      if (!validRows.length) return;

      const firstRow = validRows[0];
      const teacherName = firstRow.teacherName.trim().replace(/老師/g, "").trim() || courses[0].teacherName;
      const to = firstRow.email.trim();
      const cc = uniqueValues(validRows.flatMap((row) => validateEmailList(row.cc))).join(", ");
      const subject = `【實驗外科授課提醒】115學年度第一學期授課資訊確認－${teacherName}老師`;
      const body = buildMailBody(teacherName, courses);
      const firstCourseDate = dateKey(courses[0].date);

      drafts.push({
        id: normalizedName,
        teacherName,
        to,
        cc,
        subject,
        body,
        courseCount: courses.length,
        firstCourseDate,
        status: "ready",
        gmailUrl: ""
      });
    });

    drafts.forEach((draft) => {
      draft.gmailUrl = buildGmailComposeUrl(draft);
    });

    state.drafts = blocking ? [] : drafts;
    state.blocking = blocking;
    state.selected = new Set(state.drafts.map((draft) => draft.id));

    updateFilterSummary(filteredCourses, courseMap);
    renderWarnings(warnings);
    renderPreviews();
    updateExportState();

    if (!state.emailRows.length) {
      setStatus(els.comparisonStatus, "neutral", "匯入 CSV 後會顯示比對結果。");
    } else if (blocking) {
      setStatus(els.comparisonStatus, "error", "比對結果有阻擋項目：同名但不同 Email。請修正 CSV 後重新匯入。");
    } else {
      const statusType = warnings.length ? "warning" : "success";
      setStatus(els.comparisonStatus, statusType, `已完成比對，可產生 ${state.drafts.length} 位老師的郵件預覽。`);
    }
  }

  function updateFilterSummary(courses, courseMap) {
    const dates = courses.map((course) => dateKey(course.date)).filter(Boolean);
    const rangeText = dates.length ? `${dates[0]} 至 ${dates[dates.length - 1]}` : "-";
    els.filterSummary.innerHTML = `
      <div><strong>${courseMap.size}</strong><span>老師人數</span></div>
      <div><strong>${courses.length}</strong><span>課程筆數</span></div>
      <div><strong>${rangeText}</strong><span>授課日期範圍</span></div>
    `;
  }

  function renderWarnings(warnings) {
    els.warningList.innerHTML = "";
    if (!warnings.length) {
      els.warningList.innerHTML = '<div class="status-box success">成功：目前沒有比對警告。</div>';
      return;
    }

    warnings.forEach((warning) => {
      const item = document.createElement("div");
      item.className = "warning-item";
      const title = document.createElement("strong");
      title.textContent = warning.title;
      const detail = document.createElement("span");
      detail.textContent = warning.detail || "請檢查原始資料。";
      item.append(title, detail);
      els.warningList.append(item);
    });
  }

  function renderPreviews() {
    els.previewList.innerHTML = "";

    if (state.blocking) {
      els.previewList.innerHTML = '<div class="empty-state">因同名不同 Email，已暫停產生郵件預覽。</div>';
      return;
    }

    if (!state.drafts.length) {
      els.previewList.innerHTML = '<div class="empty-state">目前沒有可產生的郵件預覽。</div>';
      return;
    }

    state.drafts.forEach((draft) => {
      const node = els.previewTemplate.content.firstElementChild.cloneNode(true);
      const includeInput = node.querySelector(".include-input");
      includeInput.checked = state.selected.has(draft.id);
      node.querySelector(".course-count").textContent = `授課堂數：${draft.courseCount}`;
      node.querySelector(".teacher").textContent = draft.teacherName;
      node.querySelector(".email").textContent = draft.to;
      node.querySelector(".cc").textContent = draft.cc || "無";
      node.querySelector(".subject").textContent = draft.subject;
      node.querySelector(".body-preview").textContent = draft.body;
      node.querySelector(".open-mail").href = draft.gmailUrl;
      node.querySelector(".open-mail").target = "_blank";
      node.querySelector(".open-mail").rel = "noopener";

      includeInput.addEventListener("change", () => {
        if (includeInput.checked) state.selected.add(draft.id);
        else state.selected.delete(draft.id);
        updateExportState();
      });

      node.querySelector(".copy-to").addEventListener("click", () => copyText(draft.to, "已複製收件人。"));
      node.querySelector(".copy-subject").addEventListener("click", () => copyText(draft.subject, "已複製主旨。"));
      node.querySelector(".copy-body").addEventListener("click", () => copyText(draft.body, "已複製內文。"));

      els.previewList.append(node);
    });
  }

  function getSelectedDrafts() {
    return state.drafts.filter((draft) => state.selected.has(draft.id));
  }

  function updateExportState() {
    const selectedCount = getSelectedDrafts().length;
    const canExport = !state.blocking && selectedCount > 0 && els.reviewConfirmed.checked;
    els.downloadCsv.disabled = !canExport;
    els.downloadJson.disabled = !canExport;

    if (state.blocking) {
      setStatus(els.exportStatus, "error", "錯誤：同名但不同 Email，請修正後再輸出。");
    } else if (!selectedCount) {
      setStatus(els.exportStatus, "warning", "警告：目前沒有勾選任何郵件。");
    } else if (!els.reviewConfirmed.checked) {
      setStatus(els.exportStatus, "warning", `警告：已有 ${selectedCount} 封郵件可輸出，但必須先勾選人工檢查確認。`);
    } else {
      setStatus(els.exportStatus, "success", `成功：已人工確認，可輸出 ${selectedCount} 封郵件。`);
    }
  }

  function csvEscape(value) {
    const text = String(value || "");
    return `"${text.replace(/"/g, '""')}"`;
  }

  function downloadFile(filename, mimeType, content) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function downloadCsv() {
    const headers = ["teacherName", "to", "cc", "subject", "body", "courseCount", "firstCourseDate", "status"];
    const rows = getSelectedDrafts().map((draft) => [
      draft.teacherName,
      draft.to,
      draft.cc,
      draft.subject,
      draft.body,
      draft.courseCount,
      draft.firstCourseDate,
      draft.status
    ]);
    const csv = "\uFEFF" + [headers, ...rows].map((row) => row.map(csvEscape).join(",")).join("\r\n");
    downloadFile("experimental-surgery-email-drafts.csv", "text/csv;charset=utf-8", csv);
  }

  function downloadJson() {
    const data = getSelectedDrafts().map((draft) => ({
      to: draft.to,
      cc: draft.cc,
      subject: draft.subject,
      body: draft.body
    }));
    downloadFile("gmail-draft-data.json", "application/json;charset=utf-8", JSON.stringify(data, null, 2));
  }

  async function copyText(text, message) {
    try {
      await navigator.clipboard.writeText(text);
      setStatus(els.exportStatus, "success", message);
    } catch (error) {
      setStatus(els.exportStatus, "warning", "警告：瀏覽器未允許自動複製，請手動選取文字複製。");
    }
  }

  function handleFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const rows = parseCsv(reader.result);
      const headers = rows[0] || [];
      const normalizedHeaders = headers.map((header) => String(header || "").trim().toLowerCase());

      if (!normalizedHeaders.includes("teachername") || !normalizedHeaders.includes("email")) {
        state.emailRows = [];
        setStatus(els.uploadStatus, "error", "錯誤：CSV 必須包含 teacherName 與 email 欄位。");
        analyze();
        return;
      }

      state.emailRows = rowsToObjects(rows);
      const teacherCount = new Set(state.emailRows.map((row) => row.normalizedName).filter(Boolean)).size;
      setStatus(els.uploadStatus, "success", `成功：已讀取 ${teacherCount} 位老師、${state.emailRows.length} 筆 Email 名單資料。`);
      els.reviewConfirmed.checked = false;
      analyze();
    };
    reader.readAsText(file, "utf-8");
  }

  els.csvFile.addEventListener("change", (event) => handleFile(event.target.files[0]));
  els.rangeMode.addEventListener("change", () => {
    const custom = els.rangeMode.value === "custom";
    els.startDate.disabled = !custom;
    els.endDate.disabled = !custom;
    analyze();
  });
  els.startDate.addEventListener("change", analyze);
  els.endDate.addEventListener("change", analyze);
  els.reviewConfirmed.addEventListener("change", updateExportState);
  els.selectAll.addEventListener("click", () => {
    state.selected = new Set(state.drafts.map((draft) => draft.id));
    renderPreviews();
    updateExportState();
  });
  els.clearAll.addEventListener("click", () => {
    state.selected.clear();
    renderPreviews();
    updateExportState();
  });
  els.downloadCsv.addEventListener("click", downloadCsv);
  els.downloadJson.addEventListener("click", downloadJson);

  analyze();
})();
