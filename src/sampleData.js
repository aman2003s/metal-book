// Sample data for wallet, expenses, transactions, and charts
const sampleData = {
  walletBalance: 4500,
  expenses: 500,
  transactions: [
    {
      id: 1,
      title: "Samosa",
      date: "March 20, 2024",
      category: "Food",
      value: 150,
      icon: "food",
    },
    {
      id: 2,
      title: "Movie",
      date: "March 21, 2024",
      category: "Entertainment",
      value: 300,
      icon: "movie",
    },
    {
      id: 3,
      title: "Auto",
      date: "March 22, 2024",
      category: "Travel",
      value: 50,
      icon: "auto",
    },
  ],
  topExpenses: [
    { category: "Entertainment", value: 300 },
    { category: "Food", value: 150 },
    { category: "Travel", value: 50 },
  ],
  pieChartData: [
    { category: "Food", value: 30, color: "#a259fa" },
    { category: "Entertainment", value: 70, color: "#ff9800" },
    { category: "Travel", value: 10, color: "#ffe156" },
  ],
};

export default sampleData; 