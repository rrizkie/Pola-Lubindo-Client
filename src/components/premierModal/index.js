import React, { useContext, useState } from "react";
import {
  Modal,
  Grid,
  InputBase,
  Checkbox,
  Button,
  Paper,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { Context } from "../../context/globalState";
import { useHistory } from "react-router-dom";

import logo from "./logo.png";
import Swal from "sweetalert2";

const PremierModal = ({ visible, handleClose }) => {
  const classes = useStyles();
  const history = useHistory();
  const { addKtpAndNPWP } = useContext(Context);
  const [checked, setChecked] = useState(false);
  const [notChecedText, setNotCheckedText] = useState("");
  const [input, setInput] = useState({
    noKtp: "",
    noNPWP: "",
  });

  const handleChecked = () => {
    setChecked(!checked);
    setNotCheckedText("");
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!checked) {
      setNotCheckedText("checklist menyetujui s&k untuk lanjut");
    } else {
      const response = await addKtpAndNPWP(input);
      if (response.message) {
        handleClose();
        setInput({ ...input, noKtp: "", noNPWP: "" });
      }
    }
  };

  return (
    <Modal
      className={classes.root}
      open={visible}
      onClose={handleClose}
      style={{ overflow: "scroll", border: "none" }}
    >
      <Grid container className={classes.box}>
        <Grid xs={12} style={{ margin: "-3rem 0" }}>
          <img src={logo} width="280px" />
        </Grid>
        <Grid xs={12}>
          <ol>
            <li>
              Akun pelanggan dapat diupgrade menjadi premier dengan melakukan
              minimum total transaksi sejumlah Rp.100.000,-
            </li>
            <li style={{ padding: "0.5rem 0" }}>
              Pendaftaran untuk menjadi pelanggan premier akan otomatis muncul
              di halaman utama setelah menyelesaikan minimum total transaksi.
            </li>
            <li>
              Pelanggan diwajibkan untuk mengisi data diri dan nomor npwp pada
              bagian pendaftaran.
            </li>
            <li style={{ padding: "0.5rem 0" }}>
              Customer service kami akan menghubungi via Whatsapp untuk
              melakukan verifikasi data diri.
            </li>
            <li>
              Jika data sudah sesuai maka akun akan langsung menjadi pelanggan
              premier dan dapat menggunakan kode referall.
            </li>
            <li style={{ padding: "0.5rem 0" }}>
              Jika ditemukan adanya ketidaksesuaian data maka pihak customer
              service akan melakukan konfirmasi ulang.
            </li>
            <li>
              Pihak perusahaan berhak untuk menolak pengajuan premier apabila
              data yang diberikan tidak sesuai dan atau tidak benar.
            </li>
          </ol>
        </Grid>
        <Grid xs={12}>
          <b>Upgrade Premier</b>
        </Grid>
        <Grid xs={12} style={{ margin: "0.5rem 0" }}>
          Dapatkan Komisi dengan bagi link
        </Grid>
        <Grid xs={12}>
          <InputBase
            name="noKtp"
            type="number"
            value={input.noKtp}
            className={classes.input}
            placeholder="KTP"
            onChange={handleChange}
          />
        </Grid>
        <Grid xs={12} style={{ margin: "0.5rem 0" }}>
          <InputBase
            name="noNPWP"
            type="number"
            value={input.noNPWP}
            className={classes.input}
            placeholder="NPWP"
            onChange={handleChange}
          />
        </Grid>
        <Grid xs={12}>
          <span style={{ color: checked ? "black" : "red" }}>
            <Checkbox checked={checked} onChange={handleChecked} /> Menyetujui
            S&K
          </span>
          <br />
          <span>{notChecedText.length > 0 ? notChecedText : ""}</span>
        </Grid>

        <Grid xs={12}>
          <Button className={classes.button} onClick={handleSubmit}>
            Simpan
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default PremierModal;
