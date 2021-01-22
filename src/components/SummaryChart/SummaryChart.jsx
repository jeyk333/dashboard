import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { withStyles, Card, CardContent, Typography } from "@material-ui/core";
import { Styles } from "./styles";
import { SUMMARY_DATA } from "../../constants";

const SummaryChart = ({ classes }) => {
  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.header}>
          <Typography variant="h5" className={classes.title}>
            SUMMARY
          </Typography>
          <div className={classes.icons}>
            <i class="fas fa-sync-alt"></i>
            <i class="fas fa-expand-arrows-alt"></i>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
        <HorizontalBar data={SUMMARY_DATA} height={55} />
      </CardContent>
    </Card>
  );
};

export default withStyles(Styles)(SummaryChart);
