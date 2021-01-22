//Card Data
export const CARD_DATA = [
  {
    id: 0,
    value: "2 674 862",
    price: true,
    title: "TOTAL PROFIT",
    percentage: "4.5",
    profit: true,
    label: "TotalProfit",
    stats: [
      { id: 0, value: "DAILY STATS" },
      { id: 1, value: "MONTHLY STATS" },
      { id: 2, value: "YEARLY STATS" },
    ],
    icon: "fa-database",
    iconColor: "#3cbfd7",
  },
  {
    id: 1,
    value: "657",
    price: false,
    title: "ACTIVE USERS",
    percentage: "8.5",
    profit: true,
    label: "ActiveUsers",
    stats: [
      { id: 0, value: "DAILY STATS" },
      { id: 1, value: "MONTHLY STATS" },
      { id: 2, value: "YEARLY STATS" },
    ],

    icon: "fa-user",
    iconColor: "#c0d954",
  },
  {
    id: 2,
    value: "245",
    price: false,
    title: "NEW ORDERS",
    percentage: "3.9",
    profit: true,
    label: "NewOrders",
    stats: [
      { id: 0, value: "DAILY STATS" },
      { id: 1, value: "MONTHLY STATS" },
      { id: 2, value: "YEARLY STATS" },
    ],
    icon: "fa-boxes",
    iconColor: "#f89832",
  },
  {
    id: 3,
    value: "12",
    price: false,
    title: "OPEN COMPLAINTS",
    percentage: "5.3",
    profit: false,
    label: "OpenComplaints",
    stats: [
      { id: 0, value: "DAILY STATS" },
      { id: 1, value: "MONTHLY STATS" },
      { id: 2, value: "YEARLY STATS" },
    ],
    icon: "fa-ellipsis-h",
    iconColor: "#f55151",
  },
];

//Chart Data
export const CHART_DATA = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

//Year Dropdown
export const YEAR_LIST = [
  { id: 0, value: "JUNE 2018" },
  { id: 1, value: "JULY 2018" },
  { id: 2, value: "AUGUST 2018" },
  { id: 3, value: "MARCH 2018" },
  { id: 4, value: "MAY 2018" },
];

//Summary Chart
export const SUMMARY_DATA = {
  labels: ["January", "February", "March"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80],
    },
  ],
};
