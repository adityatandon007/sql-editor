<template>
  <div class="flex-1 py-4 overflow-auto">
      <div class="w-full flex flex-col px-4 md:px-12 mx-auto">
        <div class="flex flex-col w-full h-full">
          <h3 class="text-xl md:text-2xl font-bold mb-4">
            Execute SQL Query
          </h3>

          <div class="flex flex-col gap-4 mb-4">
            <Codemirror
              aria-label="sql-code-editor" 
              v-model="query"
              :style="{ height: '100px' }"
              :autofocus="true"
              :indent-with-tab="true"
              :tab-size="2"
              :extensions="extensions"
            />
            <div class="flex gap-4">
              <button
                class="bg-green-900 text-white font-bold uppercase text-xs md:text-sm px-3 py-2 md:px-6 md:py-3 rounded outline-none"
                @click="handleQueriesChange"
              >
                <div class="flex items-center gap-1">
                  <span>Run</span>
                </div>
              </button>

              <button
                class="bg-red-700 text-white font-bold uppercase text-xs md:text-sm px-3 py-2 md:px-6 md:py-3 rounded outline-none"
                @click="clear"
              >
                <div class="flex items-center gap-1">
                  <span>Clear</span>
                </div>
              </button>
            </div>
          </div>
          <export-csv v-if="result.length > 0" :result="result" />

          <div className="w-full overflow-auto">
            <result-table v-if="result.length > 0" :result="result" />
          </div>

          <div v-if="result.length === 0" class="flex">
            <p class="font-semibold text-sm">
              Select a sample query from the sidebar and then click Run to execute the query!
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import ExportCsv from './ExportCsv.vue'
import ResultTable from './ResultTable.vue'
import { Codemirror } from 'vue-codemirror'
import { sql } from '@codemirror/lang-sql'
import { oneDark } from '@codemirror/theme-one-dark'
import { queryData } from '@/data/index'

export default {
  components: { ResultTable, ExportCsv, Codemirror },
  props: {
    queries: {
      type: Array,
      default: () => []
    },
    currentQuery: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      result: [],
      query: ''
    }
  },
  computed: {
    extensions () {
      return [sql(), oneDark]
    }
  },
  methods: {
    handleQueriesChange () {
      let data = queryData.filter((element) => element.query === this.query);
      let updatedQueries = [this.query, ...this.queries];
      updatedQueries = [...new Set(updatedQueries)];

      if (data.length) {
        data = data[0].result;
        this.$emit('update-queries', updatedQueries)
        setTimeout(() => {
          this.result = [...data]
          const timeTaken = Math.round(Math.random() * 500);
          console.log(`Query successfully ran in ${timeTaken}`)
        }, 500)
      } else {
        console.error("Please select a query from the list!")
      }
    },
    clear () {
      this.$emit('update-current-query', '')
      this.result = []
    }
  },
  watch : {
    currentQuery (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.query = newVal
      }
    }
  },
}
</script>

<style scoped>
</style>