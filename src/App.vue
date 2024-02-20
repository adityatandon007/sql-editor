<template>
  <div class="text-gray-900 dark:text-gray-50 bg-white dark:bg-bgDark">
    <div class="w-full flex justify-between items-center px-8 py-4">
      <div class="text-xl font-bold text-gray-900 dark:text-hotGreen">SQL Editor</div>
      <theme-button />
    </div>
    <div class="home-view">
      <home-view />
    </div>
  </div>
</template>

<script>
import ThemeButton from '@/components/ThemeButton.vue'
import HomeView from '@/components/HomeView.vue'
export default {
  components: { ThemeButton, HomeView },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
</style>
