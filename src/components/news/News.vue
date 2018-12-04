<template>
  <section>
    <h2>News</h2>
    <Article></Article>
    {{news}}
  </section>
</template>

<script>
import api from '../../services/api';
import Article from './Article';

export default {
  data() {
    return {
      news: null
    };
  },
  components: {
    Article
  },
  created() {
    this.searchArticle();
  },
  methods: {
    searchArticle() {
      api.getNews()
        .then(response => {
          this.news = response.articles;
        });
    }  
  }
};
</script>

<style>

</style>
