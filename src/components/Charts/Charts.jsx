import React, { useState } from "react";
import {
  withStyles,
  Card,
  Typography,
  CardContent,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import { Styles } from "./styles";
import { YEAR_LIST } from "../../constants";

const Charts = ({ classes, data }) => {
  const [Year, setYear] = useState(0);
  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.header}>
          <Typography variant="h5" className={classes.title}>
            PRODUCTION
          </Typography>
          <div className={classes.icons}>
            <i class="fas fa-sync-alt"></i>
            <i class="fas fa-expand-arrows-alt"></i>
            <i class="fas fa-chevron-down"></i>
          </div>
        </div>
        <Bar data={data} width={500} height={170} />
        <div className={classes.footerActions}>
          <div className={classes.flexSelect}>
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
          <Button
            variant="contained"
            className={`${classes.button} ${classes.buttonRight}`}
          >
            <span className={classes.buttonSpan}>EXPORT</span>{" "}
            <i class="fas fa-arrow-down"></i>
          </Button>
          <Button variant="contained" className={classes.button}>
            <span className={classes.buttonSpan}>PRINT</span>{" "}
            <i class="fas fa-print"></i>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(Styles)(Charts);
