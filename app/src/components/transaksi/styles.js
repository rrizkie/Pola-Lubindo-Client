import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  transaksiPage: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem 1rem 1rem 1rem",
  },

  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },

  optColor: { color: "red" },

  optAlign: { textAlign: "center" },
}));