<script>
import ReactiveInput from "../components/ReactiveInput.vue";
import TaxIncomeRange from "../components/TaxIncomeRange.vue";
import SimpleCol from "../components/SimpleCol.vue";
import { lciToCdb, cdbToLci } from "../logic/converters.ts";

export default {
  components: {
    ReactiveInput,
    TaxIncomeRange,
    SimpleCol,
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
  <SimpleCol>
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
  </SimpleCol>
</template>
