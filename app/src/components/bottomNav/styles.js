import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    // position: "fixed",
    // bottom: 5,
  },
  carts: {
    width: "95%",
    // position:"fixed",
    // bottom: 60,
    backgroundColor:"#fff",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
  },
  btn:{
      backgroundColor:"red",
      color:"#fff",
      padding:"0 1rem"
  },
  // ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
  //   carts: {
  //     margin: "0 -0.5rem",
  //     width: "40%",
  //     // position:"fixed",
  //     // bottom: 55,
  //     backgroundColor:"#fff",
  //     display:"flex",
  //     justifyContent:"space-between",
  //     alignItems:"center"
  //   },
  //   topRoot:{
  //     display:"flex",
  //     justifyContent:"center"
  //   },
  //   root: {
  //     width: "40%",
  //     // position: "fixed",
  //     // bottom: 0,
  //   }
  // }
});
