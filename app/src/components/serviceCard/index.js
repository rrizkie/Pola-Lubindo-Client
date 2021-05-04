import React, { useContext, useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { Context } from "../../context/globalState";

export const ServiceCard = ({ service, etd, price }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <FormControlLabel
          value={price}
          name={service}
          control={<Radio />}
          label={
            <div className={classes.label}>
              <div className={classes.content}>
                <Typography style={{ fontWeight: "bold", fontSize: "0.7rem" }}>
                  {service}
                </Typography>
                <Typography style={{ fontSize: "0.6rem" }}>
                  {etd} Day
                </Typography>
              </div>
              <div className={classes.content}>
                <Typography style={{ fontWeight: "bold", fontSize: "0.7rem" }}>
                  Rp {price}
                </Typography>
              </div>
            </div>
          }
        />
        ;
    </div>
  );
};
