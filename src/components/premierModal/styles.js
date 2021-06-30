import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    width: "90%",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    marginLeft: "5%",
  },
  boxText: {
    background: "#f6f7fb",
    padding: "0 1rem",
  },
  box: {
    background: "#fff",
    padding: "1rem",
  },
  input: {
    border: "1px solid black",
    borderRadius: "2px",
    padding: "0.2rem 0.5rem",
  },
  button: {
    background: "green",
    color: "#fff",
    borderRadius: "3px",
  },
});
