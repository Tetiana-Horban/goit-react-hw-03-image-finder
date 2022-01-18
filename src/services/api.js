const fetchHits = (name, page) => {
  const API = 'https://pixabay.com/api/';
  const API_KEY = '24373442-b431678aac0bac18598ec6531';
  const OPTIONS = 'image_type=photo&orientation=horizontal&per_page=12';
  return fetch(`${API}?q=${name}&page=${page}&key=${API_KEY}&${OPTIONS}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Nothing found'));
    },
  );
};
export default fetchHits;
