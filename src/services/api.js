export default {
  getNews(searchTerm = '') {
    if(searchTerm.startsWith('Trump')) {
      return Promise.reject(new Error('Why?!'));
    }
    return fetch(`https://newsapi.org/v2/top-headlines?country=${encodeURIComponent(searchTerm)}&apiKey=3791030249b74eaba042f0bb0d2f984c`)
      .then(response => response.json());
  }
};