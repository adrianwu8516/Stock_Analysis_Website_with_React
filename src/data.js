const siderItem = {
  selected: {
    group_name: "指標分類",
    item: [
      { key: "擊敗分析師預期", param: "beat_analysis" },
      { key: "落後分析師預期", param: "lose_analysis" },
      { key: "優質財報", param: "nice_finance" },
      { key: "高增長低估值(PEG)", param: "nice_peg" }
    ]
  },
  stock_type: {
    group_name: "股票分類",
    item: [
      { key: "能源股", param: "energy" },
      { key: "工業股", param: "industries" },
      { key: "國防軍工", param: "military" },
      { key: "IC設計", param: "ic_design" }
    ]
  },
  compare_type: {
    group_name: "類股組別",
    item: [
      { key: "遊戲股族群", param: "gmaing" },
      { key: "石化股族群", param: "petroleum" },
      { key: "IC設計族群", param: "ic_design" },
      { key: "國防工業", param: "military" }
    ]
  },
  macro: {
    group_name: "時間維度",
    item: [
      { key: "月度/季度資訊", param: "monthly" },
      { key: "每日追蹤", param: "daily" }
    ]
  }
};

export { siderItem };
