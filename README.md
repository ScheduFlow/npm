# npm Common function 생성
```sh
npm init

JS파일에 Common function 추가

npm publish
```

# npm Common function use
```sh

npm install scheduflow
```

# use example

- App.vue
```
<script setup>
import { fetchData, fetchDataMembers } from 'scheduflow'

const jsonData = ref(null)

onMounted(async () => {
  try {
    jsonData.value = await fetchData()
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
</script>

<template>
    <component-name :jsonData="jsonData" />
</template>
```

- component.vue
```
<script setup>
const props = defineProps({
  jsonData: Object
})
</script>
```
