import React from "react";
import {
  withStyles,
  Typography,
  Card,
  CardContent,
  Grid,
  Select,
  MenuItem,
} from "@material-ui/core";
import { Styles } from "./styles";

const DetailCard = ({ classes, data, handleChangeSelect, SelectStats }) => {
  return (
    <Grid item xs={3}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" className={classes.value}>
            {data.price ? <span>$</span> : null} {data.value}
          </Typography>
          <div className={classes.textFlex}>
            <Typography variant="body1" className={classes.title}>
              {data.title}
            </Typography>
            <Typography
              variant="body1"
              className={`${classes.title} ${
                data.profit ? classes.profit : classes.loss
              }`}
            >
              <span>{data.profit ? "+" : "-"}</span>
              {data.percentage}%
            </Typography>
          </div>
        </CardContent>
        <div className={classes.cardFooter}>
          <Select
            name={data.label}
            value={SelectStats[data.label]}
            onChange={handleChangeSelect}
          >
            {data.stats.map((value) => (
              <MenuItem value={value.id} key={value.id}>
                {value.value}
              </MenuItem>
            ))}
          </Select>
          <i
            className={`fas ${data.icon}`}
            style={{ backgroundColor: data.iconColor }}
          ></i>
        </div>
      </Card>
    </Grid>
  );
};

export default withStyles(Styles)(DetailCard);
