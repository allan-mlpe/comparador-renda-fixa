<script>
export default {
  props: ['label', 'value'],
  emits: ['changeValue']
}
</script>

<template>
<div class="form-floating mb-3">
  <input type="number" class="form-control" v-model="value" @change="$emit('changeValue', value)"/>
  <label for="floatingInput">{{ label }} (% do CDI)</label>
  </div>
</template>