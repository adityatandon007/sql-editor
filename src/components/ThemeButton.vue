<template>
  <div>
    <button
      aria-label="theme toggle button"
      @click="toggleTheme"
    >
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        class="w-6 h-6 text-gray-800 dark:text-gray-200"
      >
        <path 
          v-if="userTheme === 'dark'"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
        <path
          v-else
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference()
    this.setTheme(initUserTheme)
  },

  data() {
    return {
      userTheme: "light",
    };
  },

  methods: {
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme")
      if (activeTheme === "light") {
        this.setTheme("dark")
      } else {
        this.setTheme("light")
      }
    },

    getTheme() {
      return localStorage.getItem("user-theme")
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme)
      this.userTheme = theme
      document.documentElement.className = theme
    },

    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
      if (hasDarkPreference) {
        return "dark"
      } else {
        return "light"
      }
    },
  },
}
</script>

<style scoped>
</style>
