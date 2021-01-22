export const Styles = () => ({
  card: {
    backgroundColor: "#f9fcfd",
  },
  value: {
    color: "#707a82",
  },
  title: {
    color: "#929aa1",
  },
  textFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profit: {
    color: "lightgreen",
  },
  loss: {
    color: "red",
  },
  cardFooter: {
    backgroundColor: "#f1f1f1",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& i": {
      padding: 10,
      color: "#fff",
    },
    "& .MuiInput-underline": {
      fontSize: 12,
      marginLeft: 10,
      marginTop: 3,
      width: "50%",
      "& svg": {
        marginTop: -2,
      },
      "&:before": {
        display: "none",
      },
    },
  },
});
