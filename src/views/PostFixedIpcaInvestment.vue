<script>
import ReactiveInput from "../components/ReactiveInput.vue";
import Card from "../components/Card.vue";
import TaxIncomeRange from "../components/TaxIncomeRange.vue";
import TabContent from "../components/TabContent.vue";
import { roundDecimalPlaces } from "../logic/utils.ts";
import { ipcaCdbToPrefixed, ipcaLciToPrefixed } from "../logic/converters.ts";

export default {
  components: {
    ReactiveInput,
    Card,
    TaxIncomeRange,
    TabContent,
  },

  data() {
    return {
      fee: 4,
      incomeTax: 0,
      expectedInflation: 6,
    };
  },

  computed: {
    percentageInflation() {
      return this.expectedInflation / 100;
    },
    prefixedCdb() {
      return roundDecimalPlaces(
        ipcaCdbToPrefixed(this.fee, this.percentageInflation)
      );
    },
    prefixedLci() {
      return roundDecimalPlaces(
        ipcaLciToPrefixed(this.fee, this.incomeTax, this.percentageInflation)
      );
    },
  },
};
</script>

<template>
  <TabContent id="postfixed-ipca">
    <div id="postfixed-ipca-content" class="row">
      <div class="col">
        <ReactiveInput
          fee-input
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
          ipca-input
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
        tax-income-input
        @change-value="
          (val) => {
            this.incomeTax = val;
          }
        "
      />
    </div>

    <div class="row mt-4">
      <Card
        id="cdb-card"
        title="CDB"
        subtitle="Prefixado"
        :text="prefixedCdb + '%'"
      />

      <Card
        id="lci-card"
        title="LCI/LCA"
        subtitle="Prefixado"
        :text="prefixedLci + '%'"
      />
    </div>
  </TabContent>
</template>
