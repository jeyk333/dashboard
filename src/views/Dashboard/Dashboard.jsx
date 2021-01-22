import React, { useState } from "react";
import { withStyles, Typography, Grid } from "@material-ui/core";
import { Styles } from "./styles";
import DetailCard from "../../components/DetailCard";
import { CARD_DATA } from "../../constants";

const Dashboard = ({ classes }) => {
  const [SelectStats, setSelectStats] = useState({
    TotalProfit: 1,
    ActiveUsers: 1,
    NewOrders: 1,
    OpenComplaints: 1,
  });

  const handleChangeSelect = (e) => {
    console.log(e.target);
    setSelectStats({ ...SelectStats, [e.target.name]: e.target.value });
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.title} variant="h4">
          Enterprise Shiny Dashboards
        </Typography>
        <div className={classes.cardsWrapper}>
          <Grid container spacing={3}>
            {CARD_DATA.map((data) => (
              <DetailCard
                key={data.id}
                data={data}
                SelectStats={SelectStats}
                handleChangeSelect={handleChangeSelect}
              />
            ))}
          </Grid>
        </div>
        cool
      </div>
    </div>
  );
};

export default withStyles(Styles)(Dashboard);
