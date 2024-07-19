import React, { useState, useEffect } from 'react';
import { Button, Container } from '@mui/material';
import DishForm from '../components/DishForm';
import DishList from '../components/DishList';
import { fetchDishes, deleteDish, createDish } from '../services/ChedDishService';

function CreateDish() {
  const [frm, setFrm] = useState(true);
  const [data, setData] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [uploadDisabled, setUploadDisabled] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [dishData, setDishData] = useState({
    dishName: '',
    description: '',
    price: '',
    thumbnail: null,
    chef_id: localStorage.getItem('id'),
  });

  const fetchAllDishes = async () => {
    try {
      const dishes = await fetchDishes(localStorage.getItem('id'));
      setData(dishes);
    } catch (error) {
      console.error('Error fetching dishes:', error);
    }
  };

  useEffect(() => {
    fetchAllDishes();
  }, [frm]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'thumbnail' && files[0]) {
      const file = files[0];
      setDishData((prevState) => ({
        ...prevState,
        thumbnail: file,
      }));
      setPreviewImage(URL.createObjectURL(file));
      setUploadDisabled(true);
    } else {
      setDishData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !dishData.dishName ||
      !dishData.description ||
      !dishData.price ||
      !dishData.thumbnail
    ) {
      Alert('All fields are required');
      return;
    }

    try {
      await createDish(dishData);
      setFrm(!frm);
      setDishData({
        dishName: '',
        description: '',
        price: '',
        thumbnail: null,
        chef_id: localStorage.getItem('id'),
      });
      setPreviewImage(null);
      setUploadDisabled(false);
    } catch (error) {
      console.error('Error creating dish:', error);
    }
  };

  const cancelUpload = () => {
    setPreviewImage(null);
    setUploadDisabled(false);
    setDishData((prevState) => ({
      ...prevState,
      thumbnail: null,
    }));
  };

  const handleExpandClick = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Container className="mt-5">
      <Button variant="contained" onClick={() => setFrm(!frm)} className="mb-3">
        {frm ? 'Show Dishes' : 'Create Dish'}
      </Button>
      {frm ? (
        <DishForm
          dishData={dishData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          previewImage={previewImage}
          cancelUpload={cancelUpload}
          uploadDisabled={uploadDisabled}
        />
      ) : (
        <DishList
          data={data}
          deleteDish={deleteDish}
          handleExpandClick={handleExpandClick}
          expanded={expanded}
        />
      )}
    </Container>
  );
}

export default CreateDish;
