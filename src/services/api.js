export default {
  getNews(searchTerm = '') {
    if(searchTerm.startsWith('Trump')) {
      return Promise.reject(new Error('Why?!'));
    }
    return fetch(`https://newsapi.org/v2/top-headlines?country=${encodeURIComponent(searchTerm)}&apiKey=359f53afc95c481e94fb13829bdbeb2f`)
      .then(response => response.json());
  }
};