import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  const [categories, setCategories] = useState([]);
  const [blog, setBlog] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Kategorileri ve blog verilerini almak için useEffect kullanımı
  useEffect(() => {
    getCategories();
    getBlogData();
  }, []);

  // Kategorileri almak için API isteği
  const getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
      });
  };

  // Blog verilerini almak için API isteği
  const getBlogData = () => {
    fetch("http://localhost:3000/blog")
      .then((res) => res.json())
      .then((json) => {
        setBlog(json);
      });
  };

  const getBlogBySlugs = (slug) => {
    return blog.find((item) => item.slug === slug);
  };

  const getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find((item) => item.id === categoryId);
    return category ? category.categoryName : "";
  };

  const getProductBySlug = (slug) => {
    return products.find((product) => product.slug === slug);
  };

  const addCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Header categories={categories} getProducts={getProducts} cart={cart}/>
      <Routes>
        <Route
          path="/"
          element={
            <Shop
              categories={categories}
              products={products}
              getCategoryName={getCategoryName}
              getProducts={getProducts}
              addCart={addCart}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/blog/:slug"
          element={<BlogDetail getBlogBySlugs={getBlogBySlugs} />}
        />
        <Route path="/blog" element={<BlogList blog={blog} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route
          path="/product/:slug"
          element={
            <ProductDetail
              getProductBySlug={getProductBySlug}
              getCategoryName={getCategoryName}
              addCart={addCart}
            />
          }
        />

        <Route path="*" element={<Shop />} />
      </Routes>
      <Footer />
    </>
  );
}
