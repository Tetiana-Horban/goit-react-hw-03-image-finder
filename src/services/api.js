const fetchHits = (name, page) => {
  const API_KEY = '24373442-b431678aac0bac18598ec6531';
  return fetch(
    `https://pixabay.com/api/?q=${name}&${page}=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Ничего не найдено'));
  });
};
export default fetchHits;
