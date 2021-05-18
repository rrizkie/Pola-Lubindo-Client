import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  transaksiPage: {
    margin: "1rem 1rem 1rem 1rem",
  },

  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    margin: "0.5rem 0"
  },

  optColor: { color: "red" },

  optAlign: { textAlign: "center" },
}));
