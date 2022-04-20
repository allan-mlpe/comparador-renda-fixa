<script>
import { generateRandomId } from "../logic/utils";

export default {
  props: ["label", "value"],
  emits: ["changeValue"],
  data() {
    return {
      id: generateRandomId(),
    };
  },
};
</script>

<template>
  <div class="form-floating mb-3">
    <input
      :id="id"
      type="number"
      class="form-control"
      v-model="value"
      step=".01"
      @input="$emit('changeValue', value)"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>
