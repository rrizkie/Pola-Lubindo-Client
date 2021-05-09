import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 500,
  },

  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },

  optColor: { color: "red" },

  optAlign: { textAlign: "right" },
}));
