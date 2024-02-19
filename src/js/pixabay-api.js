import { renderPhotos, loader, gallery } from './render-functions';

function buildApiUrl(searchQuery) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const API_KEY = '42444486-bc4896f356324bce186cf1418';

  const params = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return `${BASE_URL}${END_POINT}?${params}`;
}

function fetchPhotos(url) {
    loader.style.display = 'block';
    gallery.innerHTML = '';

  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          renderPhotos(data.hits);
          loader.style.display = 'none';
          resolve(data.hits);
        }, 1000);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
        loader.style.display = 'none';
        reject(error);
      });
  });
}

export {
	buildApiUrl,
	fetchPhotos,
}