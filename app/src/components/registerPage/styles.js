import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    border: "none",
    boxShadow: "none",
    display: "flex",
    justifyContent: "space-between",
    margin: "-0.5rem -1rem",
    padding: "0.7rem 1.7rem",
    backgroundColor: "#f4e8e9",
  },
  left: {
    display: "flex",
    justifyContent: "space-around",
    color: "red",
  },
  leftContent: {
    margin: "0 0.3rem",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  formRoot: {
    margin: "2rem 1rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  formBox: {
    margin: "0.5rem 0.3rem",
  },
  formText: {
    fontSize: "0.7rem",
    color: "grey",
    margin: "0.3rem 0 0.3rem 0.5rem",
  },
  form: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "85vw",
    border: "1px solid black",
    justifyContent: "space-between",
    boxShadow: "none",
    borderRadius: "10px",
  },
  button: {
    backgroundColor: "red",
    borderRadius: "10px",
    width: "85vw",
    color: "#fff",
    fontWeight: "bold",
    margin:"1rem 0"
  },
});
