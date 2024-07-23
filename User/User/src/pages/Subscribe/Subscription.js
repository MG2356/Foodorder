import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../Utils/app.util';

const Subscription = () => {
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
        const config = {
          headers: {
            Authorization: token,
          },
        };                
        const response = await axios.get(`${API_URL}/subscription`, config);
        setSubscription(response.data.subscription);
      } catch (error) {
        console.error('Error fetching subscription:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscription();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!subscription) {
    return <div>No subscription found.</div>;
  }

  return (
    <div>
      <h2>Subscription Details</h2>
      <p>Name: {subscription.name}</p>
      <p>Email: {subscription.email}</p>
      <p>Subscription Type: {subscription.subscriptionType}</p>
      {/* Add more subscription details as needed */}
    </div>
  );
};

export default Subscription;
