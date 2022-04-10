<script>
import ReactiveInput from "../components/ReactiveInput.vue";
import Card from "../components/Card.vue";
import TaxIncomeRange from "../components/TaxIncomeRange.vue";
import SimpleCol from "../components/SimpleCol.vue";
import { ipcaCdbToPrefixed, ipcaLciToPrefixed } from "../logic/converters.ts";

export default {
  components: {
    ReactiveInput,
    Card,
    TaxIncomeRange,
    SimpleCol,
  },

  data() {
    return {
      fee: 4,
      incomeTax: 0,
      expectedInflation: 6,
    };
  },

  computed: {
    prefixedCdb() {
      return (ipcaCdbToPrefixed(this.fee, this.expectedInflation / 100) || 0).toFixed(2);
    },
    prefixedLci() {
      return (
        ipcaLciToPrefixed(this.fee, this.incomeTax, this.expectedInflation / 100) || 0
      ).toFixed(2);
    },
  },
};
</script>

<template>
  <SimpleCol>
    <div class="row">
      <div class="col">
        <ReactiveInput
          label="Taxa (%)"
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
          label="IPCA estimado (%)"
          :value="expectedInflation"
          @change-value="
            (val) => {
              this.expectedInflation = val;
            }
          "
        />
      </div>
    </div>

    <div class="row">
      <TaxIncomeRange
        @change-value="
          (val) => {
            this.incomeTax = val;
          }
        "
      />
    </div>

    <div class="row mt-4">
      <Card id="cdb-card" title="CDB" subtitle="Prefixado" :text="prefixedCdb + '%'" />

      <Card
        id="lci-card"
        title="LCI/LCA"
        subtitle="Prefixado"
        :text="prefixedLci + '%'"
      />
    </div>
  </SimpleCol>
</template>
