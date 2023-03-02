//Dependencies
import axios from 'axios';
import { useEffect, useState } from 'react';

const baseUrl = 'https://ecommerce-node-78dk.onrender.com/api/v1';

const useGetCategories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    axios
      .get(`${baseUrl}/categories`)
      .then((res) => setCategories(res.data.response))
      .catch((error) => console.log(error));
  };

  return [categories];
};

export default useGetCategories;
