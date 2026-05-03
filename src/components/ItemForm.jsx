import React, { useState } from 'react';
import { createItem } from './api'; // Adjust the import path as needed

export default function ItemForm({ onItemAdded }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [merialType, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createItem({ name, description, price: Number(price), merialType });
    setName('');
    setDescription('');
    setPrice('');
    onItemAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          placeholder="Price (e.g. 29.99)"
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
}