<script>
export default {
  props: ['label', 'value'],
  emits: ['changeValue'],
  data() {
    return {
      id: Math.random().toString(36).substr(2, 5)
    }
  }
}
</script>

<template>
<div class="form-floating mb-3">
  <input :id="id" type="number" class="form-control" v-model="value" @input="$emit('changeValue', value)"/>
  <label :for="id">{{ label }} (% do CDI)</label>
  </div>
</template>