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
      cdb: undefined,
      lci: undefined,
      taxIncome: undefined,
    };
  },

  methods: {
    convertCdbToLci(val) {
      this.cdb = val;
      this.lci = cdbToLci(val, this.taxIncome);
    },
    convertLciToCdb(val) {
      this.lci = val;
      this.cdb = lciToCdb(val, this.taxIncome);
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
      <ReactiveInput label="LCI/LCA" :value="lci" @change-value="convertLciToCdb" />
    </div>

    <div class="col">
      <ReactiveInput label="CDB" :value="cdb" @change-value="convertCdbToLci" />
    </div>
  </div>
  <div class="row">
    <TaxIncomeRange @change-value="recalculate" />
  </div>
</template>
