const feedbackFormBaseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdt3qSfjIq3L7ricBRx1qgToX-33Qhz_YLux2WqdJ06ctdIPQ/viewform?usp=pp_url";

const courseData = [
  {
    "teacherName": "洪煥程",
    "department": "北榮GYN",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "08:30-09:30",
    "group": "B",
    "topic": "外科常見器械與縫線材質之介紹",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1lhB3TKz_DPeXd7VlqebIfbE52Q43EjtW?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "鄭惠禎",
    "department": "北榮OPH",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "09:40-12:00",
    "group": "B",
    "topic": "無菌與換藥原則及技巧、(含手術衣穿脫教學)",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1H-8edtLgEz8tIrMwrpsZu-_P27Ucx5YD?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "翁章旂",
    "department": "北榮OPH",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "09:40-12:00",
    "group": "B",
    "topic": "無菌與換藥原則及技巧、(含手術衣穿脫教學)",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1H-8edtLgEz8tIrMwrpsZu-_P27Ucx5YD?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "張德撝",
    "department": "市聯泌尿",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "09:40-12:00",
    "group": "B",
    "topic": "無菌與換藥原則及技巧、(含手術衣穿脫教學)",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1H-8edtLgEz8tIrMwrpsZu-_P27Ucx5YD?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "朱柏宇",
    "department": "亞東整外",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "09:40-12:00",
    "group": "B",
    "topic": "無菌與換藥原則及技巧、(含手術衣穿脫教學)",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1H-8edtLgEz8tIrMwrpsZu-_P27Ucx5YD?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林憶柔",
    "department": "助教",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "12:00-12:15",
    "group": "B",
    "topic": "總測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "林鈺芳",
    "department": "助教",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "12:00-12:15",
    "group": "B",
    "topic": "總測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "陳明德",
    "department": "北榮NS",
    "date": "2026/08/05",
    "weekday": "三",
    "time": "8:30-12:30",
    "group": "BI",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "張文杰",
    "department": "北榮ORTH",
    "date": "2026/08/05",
    "weekday": "三",
    "time": "8:30-12:30",
    "group": "BI",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "陳正豐",
    "department": "北榮ORTH",
    "date": "2026/08/05",
    "weekday": "三",
    "time": "8:30-12:30",
    "group": "BI",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "陳沂名",
    "department": "北榮CVS",
    "date": "2026/08/05",
    "weekday": "三",
    "time": "8:30-12:30",
    "group": "BI",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "張智閑",
    "department": "亞東CRS",
    "date": "2026/08/05",
    "weekday": "三",
    "time": "8:30-12:30",
    "group": "BI",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林鼎詔",
    "department": "振興CVS",
    "date": "2026/08/05",
    "weekday": "三",
    "time": "8:30-12:30",
    "group": "BI",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "黄竣暘",
    "department": "北榮CVS",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "8:30-12:30",
    "group": "BII",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "程威銘",
    "department": "市聯GU",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "8:30-12:30",
    "group": "BII",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "張軒侃",
    "department": "北榮NS",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "8:30-12:30",
    "group": "BII",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "劉家豪",
    "department": "北榮GYN",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "8:30-12:30",
    "group": "BII",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "余秉軒",
    "department": "高榮GU",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "8:30-12:30",
    "group": "BII",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "張惇皓",
    "department": "亞東PS",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "8:30-12:30",
    "group": "BII",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "楊欣瑜",
    "department": "北榮蘇澳OPH",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "13:30-14:30",
    "group": "A",
    "topic": "外科常見器械與縫線材質之介紹",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1lhB3TKz_DPeXd7VlqebIfbE52Q43EjtW?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "郭懿萱",
    "department": "北榮NS",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "14:40-17:00",
    "group": "A",
    "topic": "無菌與換藥原則及技巧、(含手術衣穿脫教學)",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1H-8edtLgEz8tIrMwrpsZu-_P27Ucx5YD?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "范玉華",
    "department": "北榮GU",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "14:40-17:00",
    "group": "A",
    "topic": "無菌與換藥原則及技巧、(含手術衣穿脫教學)",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1H-8edtLgEz8tIrMwrpsZu-_P27Ucx5YD?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "葉美吟",
    "department": "北榮NS",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "14:40-17:00",
    "group": "A",
    "topic": "無菌與換藥原則及技巧、(含手術衣穿脫教學)",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1H-8edtLgEz8tIrMwrpsZu-_P27Ucx5YD?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "李居易",
    "department": "北榮NS",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "14:40-17:00",
    "group": "A",
    "topic": "無菌與換藥原則及技巧、(含手術衣穿脫教學)",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1H-8edtLgEz8tIrMwrpsZu-_P27Ucx5YD?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林憶柔",
    "department": "助教",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "17:00-17:15",
    "group": "A",
    "topic": "總測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "林鈺芳",
    "department": "助教",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "17:00-17:15",
    "group": "A",
    "topic": "總測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "李秋陽",
    "department": "北榮CVS",
    "date": "2026/08/05",
    "weekday": "三",
    "time": "13:30-17:30",
    "group": "AI",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "季聖筑",
    "department": "北榮OPH",
    "date": "2026/08/05",
    "weekday": "三",
    "time": "13:30-17:30",
    "group": "AI",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "莊梓昱",
    "department": "市聯GU",
    "date": "2026/08/05",
    "weekday": "三",
    "time": "13:30-17:30",
    "group": "AI",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "楊景偉",
    "department": "振興GU",
    "date": "2026/08/05",
    "weekday": "三",
    "time": "13:30-17:30",
    "group": "AI",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "馮晉榮",
    "department": "北榮PS",
    "date": "2026/08/05",
    "weekday": "三",
    "time": "13:30-17:30",
    "group": "AI",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "王榮磻",
    "department": "北榮ORTH",
    "date": "2026/08/05",
    "weekday": "三",
    "time": "13:30-17:30",
    "group": "AI",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林玟君",
    "department": "中榮ENT",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "13:30-17:30",
    "group": "AII班",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "顏廷廷",
    "department": "中榮ENT",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "13:30-17:30",
    "group": "AII班",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "陳泰位",
    "department": "北榮CVS",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "13:30-17:30",
    "group": "AII班",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "黃奕燊",
    "department": "北榮GU",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "13:30-17:30",
    "group": "AII班",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "邱逸淳",
    "department": "市聯GU",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "13:30-17:30",
    "group": "AII班",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "梁凱莉",
    "department": "中榮ENT",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "13:30-17:30",
    "group": "AII班",
    "topic": "各式Surgical Tie練習及測驗、各式Suture練習及測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "黃子豪",
    "department": "北榮GU",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "8:30-12:30",
    "group": "AI班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "楊明杰",
    "department": "義大ECCM",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "8:30-12:30",
    "group": "AI班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "鍾孝仁",
    "department": "北榮GU",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "8:30-12:30",
    "group": "AI班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "余秉軒",
    "department": "高榮GU",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "8:30-12:30",
    "group": "AI班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "馮晉榮",
    "department": "北榮PS",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "8:30-12:30",
    "group": "AI班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "宮慶雲",
    "department": "北榮GS",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "8:30-12:30",
    "group": "AI班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "張智閑",
    "department": "亞東CRS",
    "date": "2026/08/11",
    "weekday": "二",
    "time": "8:30-12:30",
    "group": "AII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "黄竣暘",
    "department": "北榮CVS",
    "date": "2026/08/11",
    "weekday": "二",
    "time": "8:30-12:30",
    "group": "AII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "郭芳成",
    "department": "北榮TS",
    "date": "2026/08/11",
    "weekday": "二",
    "time": "8:30-12:30",
    "group": "AII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林昌霖",
    "department": "中榮CRS",
    "date": "2026/08/11",
    "weekday": "二",
    "time": "8:30-12:30",
    "group": "AII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林育如",
    "department": "北榮CRS",
    "date": "2026/08/11",
    "weekday": "二",
    "time": "8:30-12:30",
    "group": "AII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林志杰",
    "department": "北榮GU",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "13:30-17:30",
    "group": "BI班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "楊景偉",
    "department": "振興GU",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "13:30-17:30",
    "group": "BI班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "許宏隆",
    "department": "亞東CVS",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "13:30-17:30",
    "group": "BI班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "陳瑩盈",
    "department": "北醫GS",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "13:30-17:30",
    "group": "BI班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "雷浩然",
    "department": "北榮GS",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "13:30-17:30",
    "group": "BI班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "石柏威",
    "department": "北榮GS",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "13:30-17:30",
    "group": "BI班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "郭姿廷",
    "department": "北榮CVS",
    "date": "2026/08/11",
    "weekday": "二",
    "time": "13:30-17:30",
    "group": "BII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林宏鑫",
    "department": "北榮CRS",
    "date": "2026/08/11",
    "weekday": "二",
    "time": "13:30-17:30",
    "group": "BII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "黃勝揚",
    "department": "中榮PEDS",
    "date": "2026/08/11",
    "weekday": "二",
    "time": "13:30-17:30",
    "group": "BII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林昌霖",
    "department": "中榮CRS",
    "date": "2026/08/11",
    "weekday": "二",
    "time": "13:30-17:30",
    "group": "BII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "許宏隆",
    "department": "亞東CVS",
    "date": "2026/08/11",
    "weekday": "二",
    "time": "13:30-17:30",
    "group": "BII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "賴昱維",
    "department": "市聯GU",
    "date": "2026/08/11",
    "weekday": "二",
    "time": "13:30-17:30",
    "group": "BII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "黃生旺",
    "department": "",
    "date": "2026/08/17",
    "weekday": "一",
    "time": "08:30-12:30",
    "group": "A班(AI+AII)",
    "topic": "豬隻解剖位置介紹、Video 手術教學",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "吳思賢",
    "department": "北榮PS",
    "date": "2026/08/17",
    "weekday": "一",
    "time": "08:30-12:30",
    "group": "A班(AI+AII)",
    "topic": "豬隻解剖位置介紹、Video 手術教學",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "楊惠如",
    "department": "護理師",
    "date": "2026/08/18",
    "weekday": "二",
    "time": "08:30-12:30",
    "group": "A班(AI+AII)",
    "topic": "AI 氣管插管、AII 人工靜脈注射練習、AII 氣管插管、AI 人工靜脈注射練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "曾美萍",
    "department": "護理師",
    "date": "2026/08/18",
    "weekday": "二",
    "time": "08:30-12:30",
    "group": "A班(AI+AII)",
    "topic": "AI 氣管插管、AII 人工靜脈注射練習、AII 氣管插管、AI 人工靜脈注射練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "王洧梃",
    "department": "護理師",
    "date": "2026/08/18",
    "weekday": "二",
    "time": "08:30-12:30",
    "group": "A班(AI+AII)",
    "topic": "AI 氣管插管、AII 人工靜脈注射練習、AII 氣管插管、AI 人工靜脈注射練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "黃生旺",
    "department": "",
    "date": "2026/08/19",
    "weekday": "三",
    "time": "08:30-12:30",
    "group": "A班",
    "topic": "手術流程解說、環境認識",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "林憶柔",
    "department": "助教",
    "date": "2026/08/19",
    "weekday": "三",
    "time": "08:30-12:30",
    "group": "A班",
    "topic": "手術流程解說、環境認識",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "林鈺芳",
    "department": "助教",
    "date": "2026/08/19",
    "weekday": "三",
    "time": "08:30-12:30",
    "group": "A班",
    "topic": "手術流程解說、環境認識",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "周佳滿",
    "department": "中榮PEDS",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "B組(8點上課)",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "張惇皓",
    "department": "亞東PS",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "B組(8點上課)",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "王心儀",
    "department": "北榮GS",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "B組(8點上課)",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "宮慶雲",
    "department": "北榮GS",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "B組(8點上課)",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "陳明正",
    "department": "中榮CRS",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "B組(8點上課)",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林育寬",
    "department": "北榮ORTH",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "B組(8點上課)",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "馮尚文",
    "department": "附醫ORTH",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "B組(8點上課)",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "黃生旺",
    "department": "麻醉",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "B組(8點上課)",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "王仲祺",
    "department": "中榮ENT",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "08:30-12:30",
    "group": "A組(8點上課)",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林宏鑫",
    "department": "北榮CRS",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "08:30-12:30",
    "group": "A組(8點上課)",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "馮晉榮",
    "department": "北榮PS",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "08:30-12:30",
    "group": "A組(8點上課)",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "楊明杰",
    "department": "義大ECCM",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "08:30-12:30",
    "group": "A組(8點上課)",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "宮慶雲",
    "department": "北榮GS",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "08:30-12:30",
    "group": "A組(8點上課)",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "郭威廷",
    "department": "嘉基GS",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "08:30-12:30",
    "group": "A組(8點上課)",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林昌霖",
    "department": "中榮CRS",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "08:30-12:30",
    "group": "A組(8點上課)",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "黃生旺",
    "department": "麻醉",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "08:30-12:30",
    "group": "A組(8點上課)",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "吳思賢",
    "department": "北榮PS",
    "date": "2026/08/17",
    "weekday": "一",
    "time": "13:30-17:20",
    "group": "B班(BI+BII)",
    "topic": "Video 手術教學、豬隻解剖位置介紹",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "黃生旺",
    "department": "",
    "date": "2026/08/17",
    "weekday": "一",
    "time": "13:30-17:20",
    "group": "B班(BI+BII)",
    "topic": "Video 手術教學、豬隻解剖位置介紹",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "楊惠如",
    "department": "護理師",
    "date": "2026/08/18",
    "weekday": "二",
    "time": "13:30-17:20",
    "group": "B班(BI+BII)",
    "topic": "BI 氣管插管、BII 人工靜脈注射練習、BII 氣管插管、BI 人工靜脈注射練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "曾美萍",
    "department": "護理師",
    "date": "2026/08/18",
    "weekday": "二",
    "time": "13:30-17:20",
    "group": "B班(BI+BII)",
    "topic": "BI 氣管插管、BII 人工靜脈注射練習、BII 氣管插管、BI 人工靜脈注射練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "王洧梃",
    "department": "護理師",
    "date": "2026/08/18",
    "weekday": "二",
    "time": "13:30-17:20",
    "group": "B班(BI+BII)",
    "topic": "BI 氣管插管、BII 人工靜脈注射練習、BII 氣管插管、BI 人工靜脈注射練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "黃生旺",
    "department": "",
    "date": "2026/08/19",
    "weekday": "三",
    "time": "13:30-17:20",
    "group": "B班",
    "topic": "手術流程解說、環境認識",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "林憶柔",
    "department": "助教",
    "date": "2026/08/19",
    "weekday": "三",
    "time": "13:30-17:20",
    "group": "B班",
    "topic": "手術流程解說、環境認識",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "林鈺芳",
    "department": "助教",
    "date": "2026/08/19",
    "weekday": "三",
    "time": "13:30-17:20",
    "group": "B班",
    "topic": "手術流程解說、環境認識",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "林春吉",
    "department": "北榮CRS",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "13:30-17:20",
    "group": "B組",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "黃子豪",
    "department": "北榮GU",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "13:30-17:20",
    "group": "B組",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "周佳滿",
    "department": "中榮PEDS",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "13:30-17:20",
    "group": "B組",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "王心儀",
    "department": "北榮GS",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "13:30-17:20",
    "group": "B組",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "陳明正",
    "department": "中榮CRS",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "13:30-17:20",
    "group": "B組",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "賴昱維",
    "department": "市聯GU",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "13:30-17:20",
    "group": "B組",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "杜宗熹",
    "department": "北榮NS",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "13:30-17:20",
    "group": "B組",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": "刷手"
  },
  {
    "teacherName": "黃生旺",
    "department": "麻醉",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "13:30-17:20",
    "group": "B組",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "王仲祺",
    "department": "中榮ENT",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "13:30-17:20",
    "group": "A組",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林宏鑫",
    "department": "北榮CRS",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "13:30-17:20",
    "group": "A組",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "黄竣暘",
    "department": "北榮CVS",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "13:30-17:20",
    "group": "A組",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "陳修聖",
    "department": "市聯GU",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "13:30-17:20",
    "group": "A組",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "張世慶",
    "department": "北榮CRS",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "13:30-17:20",
    "group": "A組",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林昌霖",
    "department": "中榮CRS",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "13:30-17:20",
    "group": "A組",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "郭威廷",
    "department": "嘉基GS",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "13:30-17:20",
    "group": "A組",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "許喬博",
    "department": "北榮CVS",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "13:30-17:20",
    "group": "A組",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": "刷手"
  },
  {
    "teacherName": "黃生旺",
    "department": "麻醉",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "13:30-17:20",
    "group": "A組",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心-手術室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  }
];

const searchForm = document.querySelector("#searchForm");
const teacherKeyword = document.querySelector("#teacherKeyword");
const results = document.querySelector("#results");
const resultSummary = document.querySelector("#resultSummary");
const feedbackButton = document.querySelector("#feedbackButton");

if (feedbackButton) {
  feedbackButton.href = feedbackFormBaseUrl;
  feedbackButton.target = "_blank";
  feedbackButton.rel = "noopener";
}

function formatFeedbackDate(date) {
  return String(date || "").trim().replace(/\//g, "-");
}

function buildFeedbackFormUrl(course) {
  const fields = {
    "entry.1914044426": course.teacherName,
    "entry.864847461": formatFeedbackDate(course.date),
    "entry.1356444795": course.time,
    "entry.1595020848": course.topic,
    "entry.744413284": course.group
  };

  const queryString = Object.entries(fields)
    .map(([entryId, value]) => `${entryId}=${encodeURIComponent(value || "")}`)
    .join("&");

  return `${feedbackFormBaseUrl}&${queryString}`;
}

function normalizeText(value) {
  return String(value || "").trim().toLowerCase();
}

function createField(label, value, isFull = false) {
  const field = document.createElement("div");
  field.className = isFull ? "field full" : "field";

  const fieldLabel = document.createElement("span");
  fieldLabel.className = "field-label";
  fieldLabel.textContent = label;

  const fieldValue = document.createElement("span");
  fieldValue.className = "field-value";
  fieldValue.textContent = value || "未提供";

  field.append(fieldLabel, fieldValue);
  return field;
}

function createCourseCard(course) {
  const card = document.createElement("article");
  card.className = "course-card";

  const title = document.createElement("h3");
  title.textContent = course.teacherName;

  const grid = document.createElement("div");
  grid.className = "course-grid";
  grid.append(
    createField("科別", course.department),
    createField("授課日期", course.date),
    createField("星期", course.weekday),
    createField("時段", course.time),
    createField("班別", course.group),
    createField("上課地點", course.location, true),
    createField("課程", course.topic, true),
    createField("備註", course.note || "無", true)
  );

  const materialArea = document.createElement("div");
  materialArea.className = "material-area";

  if (course.materialUrl) {
    const materialButton = document.createElement("a");
    materialButton.className = "material-button";
    materialButton.href = course.materialUrl;
    materialButton.target = "_blank";
    materialButton.rel = "noopener";
    materialButton.textContent = "查看教材";
    materialArea.append(materialButton);
  } else {
    materialArea.append(createField("教材連結", "尚未提供", true));
  }

  const reportButton = document.createElement("a");
  reportButton.className = "material-button";
  reportButton.href = buildFeedbackFormUrl(course);
  reportButton.target = "_blank";
  reportButton.rel = "noopener";
  reportButton.textContent = "授課資訊回報";
  materialArea.append(reportButton);

  card.append(title, grid, materialArea);
  return card;
}

function renderResults(matches, keyword) {
  results.innerHTML = "";

  if (!keyword) {
    resultSummary.textContent = "請輸入老師姓名關鍵字進行查詢。";
    results.innerHTML = '<div class="empty-state">輸入姓名後，這裡會顯示授課安排。</div>';
    return;
  }

  if (matches.length === 0) {
    resultSummary.textContent = `查無「${keyword}」相關授課資料。`;
    results.innerHTML = '<div class="empty-state">查無資料，請確認姓名或改用單字關鍵字查詢。</div>';
    return;
  }

  resultSummary.textContent = `找到 ${matches.length} 筆「${keyword}」相關授課資料。`;
  matches.forEach((course) => {
    results.append(createCourseCard(course));
  });
}

function handleSearch(event) {
  event.preventDefault();

  const keyword = normalizeText(teacherKeyword.value);
  const matches = courseData.filter((course) => {
    const searchableText = `${course.teacherName} ${course.department}`;
    return normalizeText(searchableText).includes(keyword);
  });

  renderResults(matches, teacherKeyword.value.trim());
}

searchForm.addEventListener("submit", handleSearch);
teacherKeyword.addEventListener("input", handleSearch);

renderResults([], "");
