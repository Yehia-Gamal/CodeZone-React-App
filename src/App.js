import "./App.css";
import Button from "./components/Button";
import Form from "./components/Form";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";
import ProductsCard from "./components/ProductsCard";
import ProductList from "./components/ProductsList";
import ProductListApi from "./components/ProductsListApi";
import Welcome from "./components/Welcome";
import WelcomeFC from "./components/WelcomeFC";
import Product from "./Product";

import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";
import FixedComponents from "./components/FixedComponents";
import Api from "./components/Api";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

function App() {

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center text-center overflow-hidden">

      <Routes>

        <Route path="/" element={
          <>
            <FixedComponents />
            <Input label="Name" type="text" />
            <Input label="Password" type="password" />
            <Input label="Phone" type="number" />
            <br />
            <Form />
          </>
        } />
        <Route path="about" element={<>

          <About />
          <FixedComponents />
          <Button title="Print in Console" />
          <br />
          <List />
          <br />
          <Product title="Coffee Product 1" description="injoy With some Coffee Cups" price="10$" />
          <br />
          <Product title="Coffee Product 2" description="injoy With some Coffee Cups" price="7$" />
          <br />
          <Product title="Coffee Product 3" description="injoy With some Coffee Cups" price="12$" />

        </>
        } />

        <Route path="welcomeFC" element={
          <>
            <FixedComponents />
            <WelcomeFC name="Yehia" age="26" title="React JS Dev" />
            <br />
            <Greeting />
            <br />
            <WelcomeFC name="Gamal" age="56" title="Back end Dev" />
          </>
        }
        />
        <Route path="welcome" element={<>
          <FixedComponents />
          <Welcome name="Hamada" age="28" title="front end Dev" />
          <Welcome name="Hany" age="38" title="C# Dev" />
        </>} />

        <Route path="home" element={<Home />} />
        <Route path="products" element={<Products />} />

        <Route path="Api" element={<>
          <Header />
          <Api />

        </>} />

        <Route path="Products-3" element={<>
          <FixedComponents />
          <ProductsCard />
        </>} />

        <Route path="Products-2" element={<>
          <FixedComponents />
          <ProductListApi />
        </>} />

        <Route path="Products-1" element={<>
          <FixedComponents />
          <ProductList />
        </>} />
        <Route path="product/:productId" element={<>
          <Header />
          <ProductDetails />
        </>
        } />
      </Routes>

    </div>
  );
}
export default App;
