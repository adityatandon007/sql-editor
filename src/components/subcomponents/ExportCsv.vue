<template>
  <div class="w-full flex justify-between items-end mb-2 md:mb-0">
      <div>
        <h3 class="text-lg font-medium">OUTPUT</h3>
      </div>
      <div
        class="cursor-pointer flex items-center rounded px-5 py-1 bg-primary text-white"
       @click="download"
      >
        <p class="ml-2 text-base font-medium">
          Export
        </p>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    result: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    download () {
      let csvfile = 'data:text/csv;charset=utf-8,'
      const keys = Object.keys(this.result[0])
      csvfile += keys.join(',')
      csvfile += '\n'

      this.result.forEach((res) => {
        let properties = Object.values(res)
        csvfile += properties.join(',')
        csvfile += '\n';
      });

      const encodedUri = encodeURI(csvfile)
      const link = document.createElement('a')
      link.setAttribute('href', encodedUri)
      link.setAttribute('downnload', 'result.csv')
      document.body.appendChild(link)
      link.click()
    }
  },
}
</script>

<style scoped>
</style>
