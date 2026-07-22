const feedbackFormBaseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdt3qSfjIq3L7ricBRx1qgToX-33Qhz_YLux2WqdJ06ctdIPQ/viewform?usp=pp_url";

const courseData = [
  {
    "teacherName": "洪煥程",
    "department": "北榮GYN",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "08:30-09:30",
    "group": "B班",
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
    "group": "B班",
    "topic": "無菌與換藥原則及技巧（含手術衣穿脫教學）",
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
    "group": "B班",
    "topic": "無菌與換藥原則及技巧（含手術衣穿脫教學）",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1H-8edtLgEz8tIrMwrpsZu-_P27Ucx5YD?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "張德撝",
    "department": "市聯GU",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "09:40-12:00",
    "group": "B班",
    "topic": "無菌與換藥原則及技巧（含手術衣穿脫教學）",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1H-8edtLgEz8tIrMwrpsZu-_P27Ucx5YD?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "朱柏宇",
    "department": "亞東PS",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "09:40-12:00",
    "group": "B班",
    "topic": "無菌與換藥原則及技巧（含手術衣穿脫教學）",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1H-8edtLgEz8tIrMwrpsZu-_P27Ucx5YD?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林憶柔",
    "department": "外科學科助教",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "12:00-12:15",
    "group": "B班",
    "topic": "總測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "林鈺芳",
    "department": "外科學科助教",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "12:00-12:15",
    "group": "B班",
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
    "time": "08:30-12:30",
    "group": "BI班",
    "topic": "各式Surgical Tie練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "張文杰",
    "department": "北榮ORTH",
    "date": "2026/08/05",
    "weekday": "三",
    "time": "08:30-12:30",
    "group": "BI班",
    "topic": "各式Surgical Tie練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "陳正豐",
    "department": "北榮ORTH",
    "date": "2026/08/05",
    "weekday": "三",
    "time": "08:30-12:30",
    "group": "BI班",
    "topic": "各式Surgical Tie練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "陳沂名",
    "department": "北榮CVS",
    "date": "2026/08/05",
    "weekday": "三",
    "time": "08:30-12:30",
    "group": "BI班",
    "topic": "各式Surgical Tie練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "張智閑",
    "department": "亞東CRS",
    "date": "2026/08/05",
    "weekday": "三",
    "time": "08:30-12:30",
    "group": "BI班",
    "topic": "各式Surgical Tie練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林鼎詔",
    "department": "振興CVS",
    "date": "2026/08/05",
    "weekday": "三",
    "time": "08:30-12:30",
    "group": "BI班",
    "topic": "各式Surgical Tie練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "黃竣暘",
    "department": "北榮CVS",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "BII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "程威銘",
    "department": "市聯GU",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "BII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "張軒侃",
    "department": "北榮NS",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "BII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "劉家豪",
    "department": "北榮GYN",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "BII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "余秉軒",
    "department": "高榮GU",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "BII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "張惇皓",
    "department": "亞東PS",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "BII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "楊欣瑜",
    "department": "北榮蘇澳OPH",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "13:30-14:30",
    "group": "A班",
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
    "group": "A班",
    "topic": "無菌與換藥原則及技巧（含手術衣穿脫教學）",
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
    "group": "A班",
    "topic": "無菌與換藥原則及技巧（含手術衣穿脫教學）",
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
    "group": "A班",
    "topic": "無菌與換藥原則及技巧（含手術衣穿脫教學）",
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
    "group": "A班",
    "topic": "無菌與換藥原則及技巧（含手術衣穿脫教學）",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1H-8edtLgEz8tIrMwrpsZu-_P27Ucx5YD?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林憶柔",
    "department": "外科學科助教",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "17:00-17:15",
    "group": "A班",
    "topic": "總測驗",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "林鈺芳",
    "department": "外科學科助教",
    "date": "2026/08/04",
    "weekday": "二",
    "time": "17:00-17:15",
    "group": "A班",
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
    "group": "AI班",
    "topic": "各式Surgical Tie練習",
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
    "group": "AI班",
    "topic": "各式Surgical Tie練習",
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
    "group": "AI班",
    "topic": "各式Surgical Tie練習",
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
    "group": "AI班",
    "topic": "各式Surgical Tie練習",
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
    "group": "AI班",
    "topic": "各式Surgical Tie練習",
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
    "group": "AI班",
    "topic": "各式Surgical Tie練習",
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
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "顏廷廷",
    "department": "中榮ENT",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "13:30-17:30",
    "group": "AII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "陳泰位",
    "department": "北榮CVS",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "13:30-17:30",
    "group": "AII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "黃奕燊",
    "department": "北榮GU",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "13:30-17:30",
    "group": "AII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "邱逸淳",
    "department": "市聯GU",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "13:30-17:30",
    "group": "AII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "梁凱莉",
    "department": "中榮ENT",
    "date": "2026/08/06",
    "weekday": "四",
    "time": "13:30-17:30",
    "group": "AII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "黃子豪",
    "department": "北榮GU",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "08:30-12:30",
    "group": "AI班",
    "topic": "各式Surgical Tie練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "楊明杰",
    "department": "義大ECCM",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "08:30-12:30",
    "group": "AI班",
    "topic": "各式Surgical Tie練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "鍾孝仁",
    "department": "北榮GU",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "08:30-12:30",
    "group": "AI班",
    "topic": "各式Surgical Tie練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "余秉軒",
    "department": "高榮GU",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "08:30-12:30",
    "group": "AI班",
    "topic": "各式Surgical Tie練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "馮晉榮",
    "department": "北榮PS",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "08:30-12:30",
    "group": "AI班",
    "topic": "各式Surgical Tie練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "宮慶雲",
    "department": "北榮GS",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "08:30-12:30",
    "group": "AI班",
    "topic": "各式Surgical Tie練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "張智閑",
    "department": "亞東CRS",
    "date": "2026/08/11",
    "weekday": "二",
    "time": "08:30-12:30",
    "group": "AII班",
    "topic": "腸吻合",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1ZS71zFh0tQrv71wlfa5zkTlXkrEcaAI1?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "黃竣暘",
    "department": "北榮CVS",
    "date": "2026/08/11",
    "weekday": "二",
    "time": "08:30-12:30",
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
    "time": "08:30-12:30",
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
    "time": "08:30-12:30",
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
    "time": "08:30-12:30",
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
    "topic": "各式Surgical Tie練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "楊景偉",
    "department": "振興GU",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "13:30-17:30",
    "group": "BI班",
    "topic": "各式Surgical Tie練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "許宏隆",
    "department": "亞東CVS",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "13:30-17:30",
    "group": "BI班",
    "topic": "各式Surgical Tie練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "陳瑩盈",
    "department": "北醫GS",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "13:30-17:30",
    "group": "BI班",
    "topic": "各式Surgical Tie練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "雷浩然",
    "department": "北榮GS",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "13:30-17:30",
    "group": "BI班",
    "topic": "各式Surgical Tie練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "石柏威",
    "department": "北榮GS",
    "date": "2026/08/10",
    "weekday": "一",
    "time": "13:30-17:30",
    "group": "BI班",
    "topic": "各式Surgical Tie練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1TkVmv_xLR3jAZyzr9vVQlUKbLfX6XW4W?usp=drive_link",
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
    "time": "08:30-10:00",
    "group": "A班（AI+AII）",
    "topic": "豬隻解剖位置介紹",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "吳思賢",
    "department": "北榮PS",
    "date": "2026/08/17",
    "weekday": "一",
    "time": "10:00-12:00",
    "group": "A班（AI+AII）",
    "topic": "Video手術教學",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "王審之",
    "department": "北榮ANES",
    "date": "2026/08/18",
    "weekday": "二",
    "time": "08:30-12:20",
    "group": "A班（AI+AII）",
    "topic": "AI 氣管插管、AII 人工靜脈注射練習；AII 氣管插管、AI 人工靜脈注射練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "王子堯",
    "department": "市聯急診",
    "date": "2026/08/18",
    "weekday": "二",
    "time": "08:30-12:20",
    "group": "A班（AI+AII）",
    "topic": "AI 氣管插管、AII 人工靜脈注射練習；AII 氣管插管、AI 人工靜脈注射練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "楊惠如",
    "department": "護理師",
    "date": "2026/08/18",
    "weekday": "二",
    "time": "08:30-12:20",
    "group": "A班（AI+AII）",
    "topic": "AI 氣管插管、AII 人工靜脈注射練習；AII 氣管插管、AI 人工靜脈注射練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "曾美萍",
    "department": "護理師",
    "date": "2026/08/18",
    "weekday": "二",
    "time": "08:30-12:20",
    "group": "A班（AI+AII）",
    "topic": "AI 氣管插管、AII 人工靜脈注射練習；AII 氣管插管、AI 人工靜脈注射練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "王洧梃",
    "department": "護理師",
    "date": "2026/08/18",
    "weekday": "二",
    "time": "08:30-12:20",
    "group": "A班（AI+AII）",
    "topic": "AI 氣管插管、AII 人工靜脈注射練習；AII 氣管插管、AI 人工靜脈注射練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "黃生旺",
    "department": "",
    "date": "2026/08/19",
    "weekday": "三",
    "time": "09:00-12:00",
    "group": "A班",
    "topic": "手術流程解說、環境認識",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "林憶柔",
    "department": "外科學科助教",
    "date": "2026/08/19",
    "weekday": "三",
    "time": "09:00-12:00",
    "group": "A班",
    "topic": "手術流程解說、環境認識",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "林鈺芳",
    "department": "外科學科助教",
    "date": "2026/08/19",
    "weekday": "三",
    "time": "09:00-12:00",
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
    "group": "B組（8點上課）",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "張惇皓",
    "department": "亞東PS",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "B組（8點上課）",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "王心儀",
    "department": "北榮GS",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "B組（8點上課）",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "宮慶雲",
    "department": "北榮GS",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "B組（8點上課）",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "陳明正",
    "department": "中榮CRS",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "B組（8點上課）",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林育寬",
    "department": "北榮ORTH",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "B組（8點上課）",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "馮尚文",
    "department": "附醫ORTH",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "B組（8點上課）",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "黃生旺",
    "department": "麻醉",
    "date": "2026/08/20",
    "weekday": "四",
    "time": "08:30-12:30",
    "group": "B組（8點上課）",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "王仲祺",
    "department": "中榮ENT",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "08:30-12:30",
    "group": "A組（8點上課）",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林宏鑫",
    "department": "北榮CRS",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "08:30-12:30",
    "group": "A組（8點上課）",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "馮晉榮",
    "department": "北榮PS",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "08:30-12:30",
    "group": "A組（8點上課）",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "楊明杰",
    "department": "義大ECCM",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "08:30-12:30",
    "group": "A組（8點上課）",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "宮慶雲",
    "department": "北榮GS",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "08:30-12:30",
    "group": "A組（8點上課）",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "郭威廷",
    "department": "嘉基GS",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "08:30-12:30",
    "group": "A組（8點上課）",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "林昌霖",
    "department": "中榮CRS",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "08:30-12:30",
    "group": "A組（8點上課）",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "黃生旺",
    "department": "麻醉",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "08:30-12:30",
    "group": "A組（8點上課）",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "吳思賢",
    "department": "北榮PS",
    "date": "2026/08/17",
    "weekday": "一",
    "time": "13:30-15:30",
    "group": "B班（BI+BII）",
    "topic": "Video手術教學",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "黃生旺",
    "department": "",
    "date": "2026/08/17",
    "weekday": "一",
    "time": "15:30-17:00",
    "group": "B班（BI+BII）",
    "topic": "豬隻解剖位置介紹",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "林天韻",
    "department": "中榮ENT",
    "date": "2026/08/18",
    "weekday": "二",
    "time": "13:30-17:20",
    "group": "B班（BI+BII）",
    "topic": "BI 氣管插管、BII 人工靜脈注射練習；BII 氣管插管、BI 人工靜脈注射練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "楊惠如",
    "department": "護理師",
    "date": "2026/08/18",
    "weekday": "二",
    "time": "13:30-17:20",
    "group": "B班（BI+BII）",
    "topic": "BI 氣管插管、BII 人工靜脈注射練習；BII 氣管插管、BI 人工靜脈注射練習",
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
    "group": "B班（BI+BII）",
    "topic": "BI 氣管插管、BII 人工靜脈注射練習；BII 氣管插管、BI 人工靜脈注射練習",
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
    "group": "B班（BI+BII）",
    "topic": "BI 氣管插管、BII 人工靜脈注射練習；BII 氣管插管、BI 人工靜脈注射練習",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "黃生旺",
    "department": "",
    "date": "2026/08/19",
    "weekday": "三",
    "time": "13:30-16:30",
    "group": "B班",
    "topic": "手術流程解說、環境認識",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "林憶柔",
    "department": "外科學科助教",
    "date": "2026/08/19",
    "weekday": "三",
    "time": "13:30-16:30",
    "group": "B班",
    "topic": "手術流程解說、環境認識",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "",
    "note": ""
  },
  {
    "teacherName": "林鈺芳",
    "department": "外科學科助教",
    "date": "2026/08/19",
    "weekday": "三",
    "time": "13:30-16:30",
    "group": "B班",
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
    "time": "13:30-17:20",
    "group": "B組",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
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
    "location": "醫學二館四樓 書田外科訓練中心 419室",
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
    "location": "醫學二館四樓 書田外科訓練中心 419室",
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
    "location": "醫學二館四樓 書田外科訓練中心 419室",
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
    "location": "醫學二館四樓 書田外科訓練中心 419室",
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
    "location": "醫學二館四樓 書田外科訓練中心 419室",
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
    "location": "醫學二館四樓 書田外科訓練中心 419室",
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
    "location": "醫學二館四樓 書田外科訓練中心 419室",
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
    "location": "醫學二館四樓 書田外科訓練中心 419室",
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
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  },
  {
    "teacherName": "黃竣暘",
    "department": "北榮CVS",
    "date": "2026/08/21",
    "weekday": "五",
    "time": "13:30-17:20",
    "group": "A組",
    "topic": "豬隻實際模擬手術",
    "location": "醫學二館四樓 書田外科訓練中心 419室",
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
    "location": "醫學二館四樓 書田外科訓練中心 419室",
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
    "location": "醫學二館四樓 書田外科訓練中心 419室",
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
    "location": "醫學二館四樓 書田外科訓練中心 419室",
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
    "location": "醫學二館四樓 書田外科訓練中心 419室",
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
    "location": "醫學二館四樓 書田外科訓練中心 419室",
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
    "location": "醫學二館四樓 書田外科訓練中心 419室",
    "materialUrl": "https://drive.google.com/drive/folders/1tDvgUZVL1gxZBByp5pdSR_WHfRBbnL09?usp=drive_link",
    "note": ""
  }
];
const searchForm = document.getElementById("searchForm");
const teacherKeyword = document.getElementById("teacherKeyword");
const resultsSection = document.getElementById("resultsSection");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");

function normalizeText(text) {
  return String(text || "").trim().toLowerCase();
}

function buildFeedbackFormUrl(course) {
  if (!feedbackFormBaseUrl) {
    return "#";
  }

  const params = new URLSearchParams({
    teacher: course.teacherName,
    date: course.date,
    time: course.time,
    group: course.group,
    topic: course.topic,
  });

  const separator = feedbackFormBaseUrl.includes("?") ? "&" : "?";
  return `${feedbackFormBaseUrl}${separator}${params.toString()}`;
}

function createCourseCard(course) {
  const card = document.createElement("article");
  card.className = "course-card";

  const materialButton = course.materialUrl
    ? `<a class="material-button" href="${course.materialUrl}" target="_blank" rel="noopener noreferrer">查看教材</a>`
    : `<span class="material-button disabled" aria-disabled="true">尚未提供</span>`;

  const feedbackButton = feedbackFormBaseUrl
    ? `<a class="feedback-mini" href="${buildFeedbackFormUrl(course)}" target="_blank" rel="noopener noreferrer">授課資訊回報</a>`
    : "";

  card.innerHTML = `
    <div class="card-header">
      <div>
        <p class="label">老師姓名</p>
        <h2>${course.teacherName}</h2>
      </div>
      <span class="group-pill">${course.group}</span>
    </div>
    <dl class="course-details">
      <div>
        <dt>科別</dt>
        <dd>${course.department || "-"}</dd>
      </div>
      <div>
        <dt>授課日期</dt>
        <dd>${course.date}</dd>
      </div>
      <div>
        <dt>星期</dt>
        <dd>${course.weekday}</dd>
      </div>
      <div>
        <dt>時段</dt>
        <dd>${course.time}</dd>
      </div>
      <div class="wide">
        <dt>課程內容</dt>
        <dd>${course.topic}</dd>
      </div>
      <div class="wide">
        <dt>上課地點</dt>
        <dd>${course.location}</dd>
      </div>
      <div class="wide">
        <dt>教材連結</dt>
        <dd>${materialButton}</dd>
      </div>
      <div class="wide">
        <dt>備註</dt>
        <dd>${course.note || "-"}</dd>
      </div>
    </dl>
    ${feedbackButton}
  `;

  return card;
}

function renderResults(matches, keyword) {
  resultsSection.innerHTML = "";
  resultCount.textContent = matches.length
    ? `找到 ${matches.length} 筆「${keyword}」相關授課安排`
    : "";

  if (!keyword) {
    emptyState.textContent = "請輸入老師姓名關鍵字開始查詢。";
    emptyState.hidden = false;
    return;
  }

  if (!matches.length) {
    emptyState.textContent = "查無符合的授課安排，請確認姓名關鍵字是否正確。";
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;
  matches.forEach((course) => resultsSection.appendChild(createCourseCard(course)));
}

function searchCourses(keyword) {
  const normalizedKeyword = normalizeText(keyword);
  return courseData.filter((course) =>
    normalizeText(course.teacherName).includes(normalizedKeyword)
  );
}

function handleSearch(event) {
  event.preventDefault();
  const keyword = teacherKeyword.value.trim();
  const matches = keyword ? searchCourses(keyword) : [];
  renderResults(matches, keyword);
}

searchForm.addEventListener("submit", handleSearch);

const initialTeacher = new URLSearchParams(window.location.search).get("teacher");
if (initialTeacher) {
  teacherKeyword.value = initialTeacher;
  renderResults(searchCourses(initialTeacher), initialTeacher);
} else {
  renderResults([], "");
}
