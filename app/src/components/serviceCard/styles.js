import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    margin: "0.5rem",
    display: "flex",
    justifyContent: "start",
    alignItems:"center",
    backgroud: "#e8e7df",
  },
  content: {
    width:"100%",
    alignItems: "left",
  },
  label: {
    display: "flex",
    justifyContent: "space-around",
    width: "100vw",
  }
});
