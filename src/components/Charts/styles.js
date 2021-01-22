export const Styles = (theme) => ({
  title: {
    color: "#707a82",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icons: {
    "& i": {
      color: "#f1f1f1",
      fontSize: 22,
      marginLeft: 20,
    },
  },
  flexSelect: {
    flex: 1,
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
    [theme.breakpoints.down("sm")]: {
      width: "55%",
    },
  },
  footerActions: {
    display: "flex",
    alignItems: "center",
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
  buttonRight: {
    marginRight: 20,
  },
  root: {
    marginBottom: 20,
  },
});
