import React, { useState } from "react";
import { Checkbox, Paper, Button } from "@material-ui/core";
import { useStyles } from "./style";
import { useHistory } from "react-router-dom";
import logo from "./logo.png";

const Syaratketentuan = () => {
  const classes = useStyles();
  const history = useHistory();
  const [checked, setCheked] = useState(false);
  console.log(checked);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#f4e8e9",
        }}
      >
        <img src={logo} />
      </div>
      <Paper className={classes.box}>
        <div style={{ padding: "0.5rem", marginTop: "-2rem" }}>
          <h3 style={{ textAlign: "center" }}>S&K Member Premier</h3>
          <ol>
            <li style={{ padding: "1rem 0" }}>
              Akun pelanggan dapat diupgrade menjadi premier dengan melakukan
              minimum total transaksi sejumlah Rp.100.000,-
            </li>
            <li style={{ padding: "1rem 0" }}>
              Pendaftaran untuk menjadi pelanggan premier akan otomatis muncul
              di halaman utama setelah menyelesaikan minimum total transaksi.
            </li>
            <li style={{ padding: "1rem 0" }}>
              Pelanggan diwajibkan untuk mengisi data diri dan nomor npwp pada
              bagian pendaftaran.
            </li>
            <li style={{ padding: "1rem 0" }}>
              Customer service kami akan menghubungi via Whatsapp untuk
              melakukan verifikasi data diri.
            </li>
            <li style={{ padding: "1rem 0" }}>
              Jika data sudah sesuai maka akun akan langsung menjadi pelanggan
              premier dan dapat menggunakan kode referall.
            </li>
            <li style={{ padding: "1rem 0" }}>
              Jika ditemukan adanya ketidaksesuaian data maka pihak customer
              service akan melakukan konfirmasi ulang.
            </li>
            <li style={{ padding: "1rem 0" }}>
              Pihak perusahaan berhak untuk menolak pengajuan premier apabila
              data yang diberikan tidak sesuai dan atau tidak benar.
            </li>
          </ol>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span>
              <Checkbox
                checked={checked}
                onChange={() => setCheked(!checked)}
              />{" "}
              Menyetujui <b>S&K</b>
            </span>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {checked && (
              <Button
                style={{ background: "#f4e8e9", width: "100%" }}
                onClick={() => history.push("/")}
              >
                Selesai
              </Button>
            )}
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Syaratketentuan;
