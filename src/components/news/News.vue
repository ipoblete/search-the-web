<template>
  <section>
    <h2>News</h2>
    <!-- {{news}} -->
    <ArticleSearch :onSearch="handleSearch" :search="search"/>

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
import ArticleSearch from './ArticleSearch';

export default {
  data() {
    return {
      news: null,
      search: decodeURIComponent(this.$route.query.search),
    };
  },
  components: {
    Article,
    ArticleSearch
  },
  created() {
    this.searchNews();
  },
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.searchNews();
    },
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
