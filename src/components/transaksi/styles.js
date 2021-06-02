import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  transaksiPage: {
    margin: "1rem 1rem 10rem 1rem",
  },

  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    marginTop: "0.5rem",
  },

  optColor: { color: "red" },

  optAlign: { textAlign: "center" },
}));
