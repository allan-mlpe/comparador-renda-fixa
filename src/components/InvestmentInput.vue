<script>
export default {
  props: ['label', 'value'],
  emits: ['changeValue']
}
</script>

<template>
  {{ label }} <input type="number" v-model="value" @change="$emit('changeValue', value)"/>
</template>