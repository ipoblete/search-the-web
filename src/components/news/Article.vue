<template>
  <li>
    <RouterLink :to="`/news/${article.id}`">
      {{article.title}} by {{article.author}}
    </RouterLink>
  </li>
</template>

<script>
export default {
  props: {
    article: Object
  }
};
</script>

<style>

</style>
