const siderItem = {
  selected: {
    key: "selected",
    item: [
      {
        group_name: "指標分類",
        group_id: "selected_index",
        group_item: [
          { key: "突破52週新高", param: "NewHight" },
          { key: "良好財報", param: "NiceFinancialReport" },
          { key: "擊敗分析師預期", param: "BeatEst" },
          { key: "落後分析師預期", param: "FailEst" },
          { key: "高成長低估值", param: "NicePEG" },
          { key: "達到股價支撐", param: "Supporting" },
          { key: "成交量衝高", param: "HighVolume" },
          { key: "低於未來現金流估值", param: "DCF" },
          { key: "低於葛拉漢估值", param: "Graham" },
          { key: "低於彼得林奇估值", param: "Lynch" },
          { key: "資本資金運用效率高", param: "ROIC-WACC" }
        ]
      }
    ]
  },
  stocks: {
    key: "stocks",
    item: [
      {
        group_name: "軟體行業",
        group_id: "software",
        group_item: [
          { key: "電商股", param: "EC" },
          { key: "網路股", param: "Internet" },
          { key: "線上服務", param: "SaaS" },
          { key: "金融科技", param: "FinTech" },
          { key: "串流服務", param: "Streaming" },
          { key: "社交服務", param: "SNS" },
          { key: "廣告技術", param: "AdTech" },
          { key: "IT集團", param: "ITSolution" },
          { key: "遊戲股", param: "Gaming" },
          { key: "中概股", param: "ChinaConcept" }
        ]
      },
      {
        group_name: "工業",
        group_id: "industry",
        group_item: [
          { key: "IC設計", param: "IC" },
          { key: "硬體設備", param: "Hardware" },
          { key: "電信股", param: "Telecom" },
          { key: "工業股", param: "industries" },
          { key: "國防軍工", param: "Military" },
          { key: "航天航空", param: "Aerospace" },
          { key: "能源類股", param: "Energy" },
          { key: "新能源", param: "NewEnergy" },
          { key: "交通運輸", param: "Transport" },
          { key: "電池股", param: "Battery" },
          { key: "重化工業", param: "Industry" },
          { key: "礦業", param: "Mining" },
          { key: "石墨烯", param: "Graphene" }
        ]
      },
      {
        group_name: "傳統產業",
        group_id: "tradition",
        group_item: [
          { key: "教育股", param: "Edu" },
          { key: "旅遊股", param: "Traveling" },
          { key: "寵物股", param: "Pets" },
          { key: "大麻股", param: "Cannabis" },
          { key: "農業技術", param: "ArgiTech" },
          { key: "健康產業", param: "Health" },
          { key: "醫藥股", param: "Medicine" },
          { key: "時尚產業", param: "Fashion" },
          { key: "餐飲股", param: "Catering" },
          { key: "瘦身健身", param: "Diet" },
          { key: "線下零售", param: "Retailing" },
          { key: "金融業", param: "Finance" },
          { key: "房地產", param: "RealEstate" },
          { key: "物流股", param: "Logistics" },
          { key: "日常用品", param: "DailyLife" }
        ]
      }
    ]
  },
  compare: {
    key: "compare",
    item: [
      {
        group_name: "類股組別",
        group_id: "compare_group",
        group_item: [
          {
            key: "電玩遊戲類股",
            param: "gaming"
          },
          {
            key: "線上博奕",
            param: "online_gamble"
          },
          {
            key: "IC設計",
            param: "ic_design"
          },
          {
            key: "國防工業",
            param: "military"
          },
          { key: "航空業", param: "airline" },
          { key: "地產股", param: "realestate" },
          { key: "CDN", param: "cdn" }
        ]
      }
    ]
  },
  macro: {
    key: "macro",
    item: [
      {
        group_name: "時間維度",
        group_id: "time_span",
        group_item: [
          { key: "每日追蹤", param: "daily" },
          { key: "月度追蹤", param: "monthly" },
          { key: "季度追蹤", param: "quarterly" }
        ]
      }
    ]
  }
};

const comparePairIndex = {
  gaming: "u,atvi,ea,znga,ttwo,otgly,ubsfy,ntes,sklz",
  online_gamble: "dkng,penn,evvty,pdypy",
  ic_design: "nvda,amd,avgo,qcom,mu,xlnx",
  military: "lmt,ba,rtx,gd,noc",
  airline: "dal,ual,alk,aal,luv",
  realestate: "o,iipr,spg,amt,cci,reg,low,dhi",
  cdn: "vnet,gds,net,fsly"
};

const colorSet = [
  "#08979C",
  "#FA8C16",
  "#9E1068",
  "#00474F",
  "#FF353D",
  "#FF4D4F",
  "#7CB305",
  "#95D464",
  "#8C8C8C"
];
export { siderItem, comparePairIndex, colorSet };
