<script>
import ReactiveInput from "../components/ReactiveInput.vue";
import TaxIncomeRange from "../components/TaxIncomeRange.vue";
import TabContent from "../components/TabContent.vue";
import { roundDecimalPlaces } from "../logic/utils.ts";
import { lciToCdb, cdbToLci } from "../logic/converters.ts";

export default {
  components: {
    ReactiveInput,
    TaxIncomeRange,
    TabContent,
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
      this.lci = roundDecimalPlaces(cdbToLci(val, this.taxIncome));
    },
    convertLciToCdb(val) {
      this.lci = val;
      this.cdb = roundDecimalPlaces(lciToCdb(val, this.taxIncome));
    },
    recalculate(tax) {
      this.taxIncome = tax;
      this.convertLciToCdb(this.lci);
    },
  },
};
</script>

<template>
  <TabContent id="prefixed" :isActive="true">
    <div class="row">
      <div class="col">
        <ReactiveInput
          lci-input
          label="LCI/LCA (%)"
          :value="lci"
          @change-value="convertLciToCdb"
        />
      </div>

      <div class="col">
        <ReactiveInput
          cdb-input
          label="CDB (%)"
          :value="cdb"
          @change-value="convertCdbToLci"
        />
      </div>
    </div>
    <div class="row">
      <TaxIncomeRange tax-income-input @change-value="recalculate" />
    </div>
  </TabContent>
</template>
