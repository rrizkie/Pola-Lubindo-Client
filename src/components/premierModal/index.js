import React, { useContext, useState } from "react";
import { Modal, Grid, InputBase, Checkbox, Button } from "@material-ui/core";
import { useStyles } from "./styles";
import { Context } from "../../context/globalState";

const PremierModal = ({ visible, handleClose }) => {
  const classes = useStyles();
  const { addKtpAndNPWP } = useContext(Context);
  const [input, setInput] = useState({
    noKtp: "",
    noNPWP: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const response = await addKtpAndNPWP(input);
    if (response.message) {
      handleClose();
      setInput({ ...input, noKtp: "", noNPWP: "" });
    }
  };

  return (
    <Modal className={classes.root} open={visible} onClose={handleClose}>
      <Grid container className={classes.box}>
        <Grid xs={12}>
          <b>Upgrade Premier</b>
        </Grid>
        <Grid xs={12} style={{ margin: "0.5rem 0" }}>
          Dapatkan Komisi dengan bagi link
        </Grid>
        <Grid xs={12}>
          <InputBase
            name="noKtp"
            value={input.noKtp}
            className={classes.input}
            placeholder="KTP"
            onChange={handleChange}
          />
        </Grid>
        <Grid xs={12} style={{ margin: "0.5rem 0" }}>
          <InputBase
            name="noNPWP"
            value={input.noNPWP}
            className={classes.input}
            placeholder="NPWP"
            onChange={handleChange}
          />
        </Grid>
        <Grid xs={12}>
          <Checkbox />
          saya menyetujui <b>S&K</b>
        </Grid>
        <Grid xs={12}>
          <Button className={classes.button} onClick={handleSubmit}>
            Upgrade Premier
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default PremierModal;
