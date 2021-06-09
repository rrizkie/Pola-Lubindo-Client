import React, { lazy, Suspense } from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ContextProvider } from "./context/globalState";
import { Loading } from "./components/loading";
import useStyles from "./styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const Loading = lazy(()=> import('./components/loading'))
const LoginPage = lazy(() => import("./components/loginPage"));
const HomePage = lazy(() => import("./components/homePage"));
const RegisterPage = lazy(() => import("./components/registerPage"));
const CartPage = lazy(() => import("./components/cartPage"));
const AlamatPengiriman = lazy(() => import("./components/alamatPengiriman"));
const RiwayatTransaksi = lazy(() => import("./components/riwayatTransaksi"));
const Profile = lazy(() => import("./components/profile"));

const Pembayaran = lazy(() => import("./components/Pembayaran"));
const KonfirmasiPembayaran = lazy(() =>
  import("./components/konfirmasiPembayaran")
);
const Transaksi = lazy(() => import("./components/transaksi"));

function App() {
  const classes = useStyles();
  return (
    <ContextProvider>
      <Router>
        <Suspense fallback={<Loading />}>
          <div className={classes.page}>
            <Switch>
              <Route path="/transaksi" component={Transaksi} />
              <Route
                path="/konfirmasi-pembayaran"
                component={KonfirmasiPembayaran}
              />
              <Route path="/pembayaran" component={Pembayaran} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/cart" component={CartPage} />
              <Route path="/shipping" component={AlamatPengiriman} />
              <Route path="/profile" component={Profile} />
              <Route path="/riwayat-transaksi" component={RiwayatTransaksi} />
              <Route path="/" component={HomePage} />
            </Switch>
          </div>
        </Suspense>
      </Router>
    </ContextProvider>
  );
}

export default App;
