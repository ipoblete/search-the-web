export default {
  getNews() {
    return fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=359f53afc95c481e94fb13829bdbeb2f')
      .then(response => response.json());
  }
};