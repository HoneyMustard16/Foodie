import React from "react";

const CategoryList = (props) => {
  return (
    <>
      {props.categories ? (
        <div className="list-group">
          {props.categories.map((category) => (
            <button
              key={category.id}
              className={
                "list-group-item list-group-item-action " +
                (props.selectedCategory &&
                category.id === props.selectedCategory.id
                  ? "active"
                  : "")
              }
              onClick={() => props.onClickCategoryHandler(category)}
            >
              {category.name}
            </button>
          ))}
        </div>
      ) : (
        <p>Loading . . .</p>
      )}
    </>
  );
};

export default CategoryList;
