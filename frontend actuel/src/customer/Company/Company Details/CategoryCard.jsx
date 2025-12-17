import React from 'react'

const CategoryCard = ({ handleCategoryClick, selectedCategory,item}) => {
  return (
    <div
      onClick={handleCategoryClick}
      className={`px-3 py-2 cursor-pointer flex gap-2 items-center ${
      selectedCategory===item?"bg-green-600 text-white rounded-md":""}`}
    >
      <img
        className="w-14 h-14 object-cover rounded-full"
        src= "https://www.senpages.com/content/uploads/agriculture-au-senegal-senpages.jpeg"
        alt=""
      />
      <h1>Agriculture</h1>
    </div>
  )
}

export default CategoryCard