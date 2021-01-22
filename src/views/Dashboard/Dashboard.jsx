import React, { useState } from "react";
import {
  withStyles,
  Typography,
  Grid,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import ReactTooltip from "react-tooltip";
import { Styles } from "./styles";
import DetailCard from "../../components/DetailCard";
import { CARD_DATA, CHART_DATA, YEAR_LIST } from "../../constants";
import Charts from "../../components/Charts";
import Map from "../../components/Map";
import SummaryChart from "../../components/SummaryChart";

const Dashboard = ({ classes }) => {
  const [SelectStats, setSelectStats] = useState({
    TotalProfit: 1,
    ActiveUsers: 1,
    NewOrders: 1,
    OpenComplaints: 1,
  });
  const [Content, setContent] = useState("");
  const [Year, setYear] = useState(0);
  const [Time, setTime] = useState(0);

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
        <div className={classes.charts}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Charts data={CHART_DATA} />
              <SummaryChart />
              <div className={classes.rangeFlex}>
                <Typography className={classes.range}>RANGE:</Typography>
                <Select
                  value={Year}
                  onChange={(e) => setYear(e.target.value)}
                  className={classes.select}
                >
                  {YEAR_LIST.map((year) => (
                    <MenuItem value={year.id}>{year.value}</MenuItem>
                  ))}
                </Select>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.mapSize}>
                <Map setContent={setContent} />
                <ReactTooltip>{Content}</ReactTooltip>
              </div>
              <div className={classes.mapFlex}>
                <Select
                  value={Time}
                  onChange={(e) => setTime(e.target.value)}
                  className={classes.select}
                >
                  {YEAR_LIST.map((year) => (
                    <MenuItem value={year.id}>{year.value}</MenuItem>
                  ))}
                </Select>
                <Button
                  variant="contained"
                  className={`${classes.button} ${classes.buttonRight}`}
                >
                  <span className={classes.buttonSpan}>EXPORT</span>{" "}
                  <i class="fas fa-arrow-down"></i>
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default withStyles(Styles)(Dashboard);
