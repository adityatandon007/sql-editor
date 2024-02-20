<template>
  <div class="home-wrapper w-full lg:h-screen border-t-2 border-gray-200 dark:border-darkBorder">
    <query-sidebar :queries="queries" @update-current-query="setCurrentQuery" />
    <main-query-result :queries="queries" @update-queries="setQueries" :currentQuery="currentQuery" @update-current-query="setCurrentQuery" />
  </div>
</template>

<script>
import QuerySidebar from './subcomponents/QuerySidebar.vue'
import MainQueryResult from './subcomponents/MainQueryResult.vue'
import { queries } from '@/data/index'
export default {
  components: { QuerySidebar, MainQueryResult},
  data () {
    return {
      queries,
      currentQuery: ''
    }
  },
  methods: {
    setQueries(updatedQueries) {
      this.queries = updatedQueries
    },
    setCurrentQuery (query) {
      this.currentQuery = query
    }
  },
}
</script>

<style scoped>
  .home-wrapper {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 768px) {
    .home-wrapper {
      display: flex;
      flex-direction: column;
    }
  }
</style>
