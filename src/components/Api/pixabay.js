// import axios from 'axios';

// const apiKey = '40086351-1ecfc0e91427dffbd1011d9dc';

// axios.defaults.baseURL = 'https://pixabay.com/api';

// export const findImages = async (query, page) => {
//   const params = new URLSearchParams({
//     key: apiKey,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     per_page: 12,
//     page: page,
//   });

//   const response = await axios.get(`/?${params.toString()}`);
//   return response.data;
// };
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const key = '40086351-1ecfc0e91427dffbd1011d9dc';

export const findImages = async (q, page) => {
  const params = {
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
    q: q,
    page: page,
  };

  try {
    const response = await axios.get(`${BASE_URL}?key=${key}`, { params });
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching images: ${error.message}`);
  }
};

// export default getImages;
