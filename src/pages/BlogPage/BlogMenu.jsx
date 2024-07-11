import { useState } from "react";
import { Link } from "react-router-dom";

function BlogMenu({ categories, setSelectedCategory, selectedCategory }) {


const _onClick = (cateId) => {
     setSelectedCategory(cateId)
}
  return (
    <div className="blog__menu">
      <Link className = {`blog__menu-item ${selectedCategory === "" ? "active" : ""}`}  onClick={() => _onClick("")}>Tất cả</Link>

      {categories?.map((cate, index) => {
         return (
          <Link key={cate.id} className = {`blog__menu-item ${selectedCategory === cate.id ? "active" : ""}`}  onClick={() => _onClick(cate.id)}  >
          {cate.name}
        </Link>
         )
      })}
    </div>
  );
}

export default BlogMenu;
