import React, { Component } from "react";

class Categories extends Component {
  render() {
    return (
      <>
        <div className="widget widget--categories">
          <h4 className="h6 widget-title">Categories</h4>
          <ul className="list">
            {this.props.categories.map((category, index) => (
              <li
                onClick={() => this.props.getProducts(category.id)}
                className="list__item"
                key={index}
              >
                <i style={{ cursor: "pointer" }} className="list__item__link">
                  {category.categoryName}
                </i>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Categories;
