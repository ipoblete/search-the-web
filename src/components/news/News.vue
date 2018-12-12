<template>
  <section>
    <h2>News</h2>

    <ArticleSearch :onSearch="handleSearch" :search="search"/>
    
    <Loader :loading="loading"/>
    
    <pre :show="error" class="error">
      {{error}}
    </pre>

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
import Loader from './Loader';

export default {
  data() {
    let search = this.$route.query.search;
    return {
      news: null,
      loading: false,
      error: null,
      search: search ? decodeURIComponent(search) : ''
    };
  },
  components: {
    Article,
    ArticleSearch,
    Loader
  },
  created() {
    this.searchNews();
  },
  watch: {
    $route(newRoute) {
      const newSearch = newRoute.query.search;
      this.search = decodeURIComponent(newSearch);
      this.searchNews();
    }
  },
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.searchNews();
    },
    searchNews() {
      this.loading = true;
      this.error = null;

      api.getNews(this.search)
        .then(response => {
          this.news = response.articles;
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.news = null;
          this.loading = false;
        });
    }  
  }
};
</script>

<style>

</style>
