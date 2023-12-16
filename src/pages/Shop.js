import React, { Component } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";

class Shop extends Component {
  render() {
    return (
      <>
        <Hero
          title="Shop"
          subtitle="The point of using is that it has a more-or-less normal distribution of letters, as
                                    opposed to using Content here content here making it look"
        />
        <main role="main">
          <section className="section">
            <div className="container">
              <div className="goods-catalog">
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <aside className="sidebar goods-filter">
                      <span className="goods-filter-btn-close js-toggle-filter">
                        <i className="fontello-cancel" />
                      </span>
                      <div className="goods-filter__inner">
                        <h4 className="goods-filter__title">Filter</h4>
                        <Categories
                          getProducts={this.props.getProducts}
                          categories={this.props.categories}
                        />
                      </div>
                    </aside>
                  </div>
                  <div className="col-12 col-md-8 col-lg-9">
                    <div className="spacer py-6 d-md-none" />
                    <div className="row align-items-center justify-content-between">
                      <div className="col-auto">
                        <span className="goods-filter-btn-open js-toggle-filter">
                          <i className="fontello-filter" />
                          Filter
                        </span>
                      </div>
                      <div className="col-auto">
                        <form className="ordering" action="/">
                          <div className="input-wrp">
                            <select className="textfield wide js-select">
                              <option value={1}>Default Sorting</option>
                              <option value={2}>Price. low to high</option>
                              <option value={3}>Price. high to low</option>
                              <option value={3}>Sort by latest</option>
                            </select>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="spacer py-3" />
                    <div className="goods goods--style-1">
                      <div className="__inner">
                        <div className="row">
                          {this.props.products.map((product) => (
                            <ProductCard
                              key={product.id}
                              product={product}
                              getCategoryName={this.props.getCategoryName}
                              addCart={this.props.addCart}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="spacer py-5" />
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item">
                          <a className="page-link" href="/">
                            1
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="/">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/">
                            4
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="/">
                            <i className="fontello-angle-right" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Shop;
