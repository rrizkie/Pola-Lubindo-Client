import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    // marginBottom: "3rem",
  },
  carts: {
    width: "95%",
    position: "fixed",
    bottom: 55,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.3rem 0",
  },
  btn: {
    backgroundColor: "red",
    color: "#fff",
    padding: "0 1rem",
  },
});
