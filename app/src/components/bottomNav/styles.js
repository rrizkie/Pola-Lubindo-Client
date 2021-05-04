import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    // position: "fixed",
    marginBottom: "3rem",
  },
  carts: {
    width: "95%",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "red",
    color: "#fff",
    padding: "0 1rem",
  },
});
