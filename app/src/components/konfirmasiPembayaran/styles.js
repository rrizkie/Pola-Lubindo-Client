import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  nav: {
    border: "none",
    boxShadow: "none",
    display: "flex",
    justifyContent: "space-between",
    margin: "-0.5rem -1rem",
    padding: "0.3rem 1.7rem",
    backgroundColor: "#f4e8e9",
  },
  left: {
    display: "flex",
    justifyContent: "space-around",
    color: "red",
    margin: "0.5rem 0 0 0",
  },
  leftContent: {
    margin: "0 0.3rem",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "2.5rem 1rem 1rem 1rem",
    padding: "0.5rem",
    borderRadius: "10px",
  },
  innerBox: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "0.5rem 0",
  },
  inputBase: {
    borderBottom: "1px black solid",
  },
  btn: {
    backgroundColor: "green",
    textAlign: "center",
    margin: "0.5rem 1rem 0 1rem",
    borderRadius: "8px",
    fontWeight: "bold",
    color: "#fff",
  },
}));
