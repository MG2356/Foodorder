import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Container, TextField, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { API_URL } from '../../Utils/app.util';

const SubscriptionPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('weekly');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/subscribe`, { name, email, type });

      console.log('Subscription created:', response.data);
      toast.success('Subscription created successfully!', {
        duration: 3000,
        position: 'top-right',
      });

      // Optionally clear form fields after successful submission
      setName('');
      setEmail('');
      setType('weekly');
    } catch (error) {
      console.error('Subscription creation error:', error);
      toast.error('Failed to create subscription. Please try again later.', {
        duration: 3000,
        position: 'top-right',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" className="mt-4 mb-4">
        Subscribe to our Weekly/Bi-Weekly Plan
      </Typography>

      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Subscription Type</InputLabel>
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="bi-weekly">Bi-Weekly</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          className="mt-4"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>
    </Container>
  );
};

export default SubscriptionPage;
