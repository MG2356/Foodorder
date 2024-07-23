import React, { useState, useEffect } from 'react';
import "../PagesStyle.css";
import { Link } from 'react-router-dom';
import Spinner from "../../components/Spinner";
import Product from '../../components/Product';
import { API_URL } from '../../Utils/app.util';
import SubscriptionPage from './SubscriptionPage';

function Weekly() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log(`${API_URL}/products`)
        const response = await fetch(`${API_URL}/weeklydishes`);
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

    </>
  );
}

export default Weekly;
