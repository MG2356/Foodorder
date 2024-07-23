import React, { useState, useEffect } from 'react';
import "../PagesStyle.css";
import { Link } from 'react-router-dom';
import Spinner from "../../components/Spinner";
import Product from '../../components/Product';
import { API_URL } from '../../Utils/app.util';

function Subscribe() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log(`${API_URL}/products`)
        const response = await fetch(`${API_URL}/products`);
        console.log(response)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
                setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    console.log("Current category:", category); // Log the current category
    if (category === 'All') {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(post => post.category === category);
      console.log("Filtered posts:", filtered); // Log the filtered posts
      setFilteredPosts(filtered);
    }
  }, [category, posts]);

  const handleCategoryChange = (newCategory) => {
    console.log("Category changed to:", newCategory); // Log the category change
    setCategory(newCategory);
  };

  return (
    <>
      <div>
        <div className="journey_card">
          <div className="products-card-3">
            <h1 className="journey">Order healthy food from Food Zone</h1>
            <h2 className="journey">Purchase Subscription and Get Extra Benefits</h2>
            <Link to='/plans'><button className="create-btn-2">Buy Now<i className='fas fa-angle-right'></i></button></Link>
          </div>
        </div>
        <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          How often would you like to receive your meals:
        </h3>
        <div className="meal_subscription">
          <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black-900 focus:outline-none bg-white rounded-full border border-white-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white-800 dark:text-black-600 dark:border-gray-400 dark:hover:text-white dark:hover:bg-gray-700">Weekly</button>
          <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black-900 focus:outline-none bg-white rounded-full border border-white-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white-800 dark:text-black-600 dark:border-gray-400 dark:hover:text-white dark:hover:bg-gray-700">Every 2 weeks</button>
        </div>
        <div className="meal_categories">
        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black-900 focus:outline-none bg-white rounded-full border border-white-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white-800 dark:text-black-600 dark:border-gray-400 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => handleCategoryChange('All')}>All</button>
          <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black-900 focus:outline-none bg-white rounded-full border border-white-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white-800 dark:text-black-600 dark:border-gray-400 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => handleCategoryChange('Breakfast')}>Breakfast</button>
          <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black-900 focus:outline-none bg-white rounded-full border border-white-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white-800 dark:text-black-600 dark:border-gray-400 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => handleCategoryChange('Lunch')}>Lunch</button>
          <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black-900 focus:outline-none bg-white rounded-full border border-white-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white-800 dark:text-black-600 dark:border-gray-400 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => handleCategoryChange('Dinner')}>Dinner</button>
          <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black-900 focus:outline-none bg-white rounded-full border border-white-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white-800 dark:text-black-600 dark:border-gray-400 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => handleCategoryChange('Deserts')}>Deserts</button>
          <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black-900 focus:outline-none bg-white rounded-full border border-white-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white-800 dark:text-black-600 dark:border-gray-400 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => handleCategoryChange('Beverages')}>Beverages</button>
        </div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-8 max-w-6xl p-6 mx-auto my-7 min-h-[80vh]">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Product key={post.id} post={post} />
            ))
          ) : (
            <div>No products available for the selected category.</div>
          )}

        </div>
        {loading && <Spinner />}
      </div>

    </>
  );
}

export default Subscribe;
