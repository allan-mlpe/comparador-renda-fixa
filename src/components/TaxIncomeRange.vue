<script>
import { generateRandomId } from "../logic/utils";

export default {
  emits: ["changeValue"],
  data() {
    return {
      id: generateRandomId(),
      taxes: [
        { tax: 0.225, label: "Até 6 meses" },
        { tax: 0.2, label: "Entre 6 meses e 1 ano" },
        { tax: 0.175, label: "Entre 1 e 2 anos" },
        { tax: 0.15, label: "Acima de 2 anos" },
      ],
      value: 0,
    };
  },
  created() {
    this.$emit("changeValue", this.taxes[this.value].tax);
  },
};
</script>

<template>
  <div>
    <label for="taxes" class="form-label">Prazo para resgate:</label>
    <input
      :id="id"
      type="range"
      class="form-range"
      min="0"
      v-model="value"
      :max="taxes.length - 1"
      step="1"
      @change="$emit('changeValue', taxes[value].tax)"
    />
    <span>{{ taxes[value].label }}</span>
  </div>
</template>
