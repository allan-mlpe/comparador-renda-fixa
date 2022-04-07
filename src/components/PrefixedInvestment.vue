<script>
import ReactiveInput from "./ReactiveInput.vue";
import TaxIncomeRange from "./TaxIncomeRange.vue";
import { lciToCdb, cdbToLci } from "../logic/converters.ts";

export default {
  components: {
    ReactiveInput,
    TaxIncomeRange,
  },

  data() {
    return {
      cdb: 0,
      lci: 12,
      taxIncome: 0,
    };
  },

  methods: {
    convertCdbToLci(val) {
      this.cdb = val;
      this.lci = cdbToLci(val, this.taxIncome).toFixed(2);
    },
    convertLciToCdb(val) {
      this.lci = val;
      this.cdb = lciToCdb(val, this.taxIncome).toFixed(2);
    },
    recalculate(tax) {
      this.taxIncome = tax;
      this.convertLciToCdb(this.lci);
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="col">
      <ReactiveInput label="LCI/LCA (%)" :value="lci" @change-value="convertLciToCdb" />
    </div>

    <div class="col">
      <ReactiveInput label="CDB (%)" :value="cdb" @change-value="convertCdbToLci" />
    </div>
  </div>
  <div class="row">
    <TaxIncomeRange @change-value="recalculate" />
  </div>
</template>
