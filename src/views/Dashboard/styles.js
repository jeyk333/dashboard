export const Styles = () => ({
  root: {
    backgroundColor: "#f8f8f8",
    padding: "30px 0",
  },
  container: {
    width: "90%",
    margin: "0 auto",
  },
  title: {
    color: "#707a82",
  },
  cardsWrapper: {
    marginTop: 40,
  },
  charts: {
    marginTop: 10,
  },
  mapSize: {
    width: "100%",
  },
  select: {
    fontSize: 12,
    marginLeft: 10,
    marginTop: 3,
    width: "30%",
    padding: 4,
    color: "#707a82",
    boxShadow:
      "0px 0px 0px -1px rgba(0,0,0,0.2), 0px 2px 4px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
    "& svg": {
      marginTop: -2,
    },
    "&:before": {
      display: "none",
    },
  },
  rangeFlex: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20,
  },
  range: {
    fontSize: 12,
    color: "#707a82",
  },
  mapFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#e0e2e5",
    color: "#707a82",
    padding: 0,
    "& i": {
      padding: 8,
      fontSize: 16,
      backgroundColor: "#bdc2c5",
      color: "#fff",
      cursor: "pointer",
    },
  },
  buttonSpan: {
    fontSize: 10,
    padding: "5px 20px 5px 10px",
  },
});
