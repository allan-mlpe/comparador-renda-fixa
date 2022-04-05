<script>
import ReactiveInput from "./ReactiveInput.vue";
import TaxIncomeRange from "./TaxIncomeRange.vue";
import { postFixedCdbToPrefixed } from "../logic/converters.ts";

export default {
  components: {
    ReactiveInput,
    TaxIncomeRange,
  },
};
</script>

<template>
  <div class="row">
    <div class="col">
      <ReactiveInput label="% do CDI" :value="0" @change-value="() => {}" />
    </div>

    <div class="col">
      <ReactiveInput label="CDI esperado" :value="0" @change-value="() => {}" />
    </div>
  </div>
  <div class="row">
    <TaxIncomeRange @change-value="() => {}" />
  </div>
</template>
