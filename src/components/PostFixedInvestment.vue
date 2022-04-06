<script>
import ReactiveInput from "./ReactiveInput.vue";
import TaxIncomeRange from "./TaxIncomeRange.vue";
import { postFixedCdbToPrefixed, postFixedLciToPrefixed } from "../logic/converters.ts";

export default {
  components: {
    ReactiveInput,
    TaxIncomeRange,
  },

  data() {
    return {
      fee: undefined,
      incomeTax: undefined,
      expectedCdi: undefined,
    };
  },

  computed: {
    prefixedCdb() {
      return (postFixedCdbToPrefixed(this.fee, this.expectedCdi / 100) || 0).toFixed(2);
    },
    prefixedLci() {
      return (postFixedLciToPrefixed(this.fee, this.incomeTax) || 0).toFixed(2)
    }
  },
};
</script>

<template>
  <div class="row">
    <div class="col">
      <ReactiveInput
        label="% do CDI"
        :value="fee"
        @change-value="
          (val) => {
            this.fee = val;
          }
        "
      />
    </div>

    <div class="col">
      <ReactiveInput
        label="CDI esperado"
        :value="expectedCdi"
        @change-value="
          (val) => {
            this.expectedCdi = val;
          }
        "
      />
    </div>
  </div>
  <div class="row">
    <TaxIncomeRange @change-value="val => { this.incomeTax = val}" />
  </div>

  <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">CDB</h5>
          <h6 class="card-subtitle mb-2 text-muted">Prefixado</h6>
          <p class="card-text">{{ prefixedCdb }}%</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">LCI/LCA</h5>
          <h6 class="card-subtitle mb-2 text-muted">Prefixado</h6>
          <p class="card-text">{{ prefixedLci}}%</p>
        </div>
      </div>
    </div>
  </div>
</template>
