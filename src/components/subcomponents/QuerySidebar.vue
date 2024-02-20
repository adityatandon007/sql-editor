<template>
  <div class="query-sidebar overflow-auto px-0 h-full flex flex-col border-r-2 border-gray-200 dark:border-darkBorder">
    <div class="w-full p-4 border-b-2 border-gray-100 dark:border-darkBorder">
      <h2 class="text-lg font-semibold">
        Choose a query from the list below:
      </h2>
    </div>
    <div class="w-full flex flex-col">
      <div v-for="(query, index) in queries" :key="index">
        <div 
          class="p-4 cursor-pointer flex items-center border-b-2 border-gray-200 dark:border-darkBorder hover:text-primary"
          @click="setCurrentQuery(query)"
        >
          <p class="text-base leading-4 font-medium">
            <code>{{ query }}</code>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    queries: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    setCurrentQuery(query) {
      this.$emit('update-current-query', query)
    }
  },
}
</script>

<style scoped>
  .query-sidebar {
    width: 500px;
  }
  @media (max-width: 768px) {
    .query-sidebar {
      display: inline-block;
      width: 100%;
      transition: height 0.3s ease;
    }
}
</style>