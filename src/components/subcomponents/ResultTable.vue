<template>
  <div>
    <table
        class="result-table sm:my-2 mb-10 h-full w-full text-center text-xs sm:text-base border-4 shadow-md border-gray-100 dark:border-darkBorder overflow-x-auto border-collapse"
      >
        <thead>
          <tr class="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-50">
            <th class="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Order ID
            </th>
            <th class="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Customer Id
            </th>
            <th class="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Employee Id
            </th>
            <th class="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Ordered Date
            </th>
            <th class="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Shipped Date
            </th>
            <th class="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Freight
            </th>
            <th class="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Ship Name 
            </th>
            <th class="border-2 border-gray-100 dark:border-darkBorder text-sm font-medium">
              Ship Address
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in result" :key="index">
            <td clas="border border-gray-100 dark:border-darkBorder">
              {{ row.orderID }}
            </td>
            <td class="border border-gray-100 dark:border-darkBorder">
              {{ row.customerID }}
            </td>
            <td class="border border-gray-100 dark:border-darkBorder">
              {{ row.employeeID }}
            </td>
            <td class="border border-gray-100 dark:border-darkBorder">
              {{ row.orderDate }}
            </td>
            <td class="border border-gray-100 dark:border-darkBorder">
              {{ row.shippedDate }}
            </td>
            <td class="border border-gray-100 dark:border-darkBorder">
              {{ row.freight }}
            </td>
            <td class="border border-gray-100 dark:border-darkBorder">
              {{ row.shipName }}
            </td>
            <td class="border border-gray-100 dark:border-darkBorder">
              {{ row.shipAddress }}
            </td>
          </tr>
        </tbody>
      </table>
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
}
</script>

<style scoped>
.result-table {
  width: 100%;
  overflow-x: auto;
  border-collapse: collapse;
  width: 100%;
}

.result-table th {
  padding: 0.5rem 1rem;
}

.result-table td {
  padding: 0.5rem 1rem;
  text-align: center;
  width: 12.5%;
}
</style>
