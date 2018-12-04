<template>
  <section>
    <h2>News</h2>
    {{news}}
    
    <div>
      <ul v-if="news">
        <Article v-for="(article, i) in news"
          :key="i"
          :article="article"
        />
      </ul>
    </div>
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
    this.searchNews();
  },
  methods: {
    searchNews() {
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
