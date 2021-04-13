import React,{useState} from "react";
import { useStyles } from "./styles";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

export const CardProduct = ({name,brandPic,price}) => {
  const classes = useStyles();
  const [count,setCount] = useState(0)
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://media.foxbusiness.com/BrightCove/854081161001/202005/3384/854081161001_6154929188001_6154933434001-vs.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography className={classes.produkTitle} component="h6">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Rp {new Number(price).toLocaleString("id-ID")}
        </Typography>
      </CardContent>
      <CardActions style={{display:"flex",justifyContent:"center"}}>
        <Button className={classes.beli}>
            Beli
        </Button>
      </CardActions>
      <CardActions>
        <Button onClick={()=>setCount(count-1)}>
            <RemoveCircleIcon />
        </Button>
        <Typography>{count}</Typography>
        <Button onClick={()=>setCount(count+1)}>
          <AddCircleSharpIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
