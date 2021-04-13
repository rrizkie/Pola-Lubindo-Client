import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "start",
    marginLeft: "1rem",
  },
  brandBox:{
      margin:"0 0.3rem",
      textAlign:"center"
  },
  brand:{
      borderRadius:"50%",
      padding:"2rem",
      margin:"1rem 0.5rem 0 0.5rem",
      border:"none",
      backgroundColor:"grey"
  },
  brandText:{
      fontSize:"0.8rem",
      color:"grey",
      alignItems:"center"

  },
  produkCard:{
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"center",
      marginTop:"1rem"
  }
});
