import React, { lazy, Suspense } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ContextProvider } from "./context/globalState";
import { Loading } from "./components/loading";
// const Loading = lazy(()=> import('./components/loading'))
const LoginPage = lazy(() => import("./components/loginPage"));
const HomePage = lazy(() => import("./components/homePage"));
const RegisterPage = lazy(() => import("./components/registerPage"));
const CartPage = lazy(() => import("./components/cartPage"));
const AlamatPengiriman = lazy(() => import("./components/alamatPengiriman"));
const Pembayaran = lazy(() => import("./components/Pembayaran"));
const KonfirmasiPembayaran = lazy(() =>
  import("./components/konfirmasiPembayaran")
);
const Transaksi = lazy(() => import("./components/transaksi"));

function App() {
  return (
    <ContextProvider>
      <Router>
        <Suspense fallback={<Loading />}>
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
            <Route path="/" component={HomePage} />
          </Switch>
        </Suspense>
      </Router>
    </ContextProvider>
  );
}

export default App;
