<script>
import ReactiveInput from "../components/ReactiveInput.vue";
import Card from "../components/Card.vue";
import TaxIncomeRange from "../components/TaxIncomeRange.vue";
import TabContent from "../components/TabContent.vue";
import { roundDecimalPlaces } from "../logic/utils.ts";
import {
  postFixedCdbToPrefixed,
  postFixedLciToPrefixed,
  cdbToLci,
  lciToCdb,
} from "../logic/converters.ts";

export default {
  components: {
    ReactiveInput,
    Card,
    TaxIncomeRange,
    TabContent,
  },

  data() {
    return {
      fee: 100,
      incomeTax: 0,
      expectedCdi: 12,
    };
  },

  computed: {
    percentageCdi() {
      return this.expectedCdi / 100;
    },
    prefixedCdb() {
      return roundDecimalPlaces(
        postFixedCdbToPrefixed(this.fee, this.percentageCdi)
      );
    },
    prefixedLci() {
      return roundDecimalPlaces(
        postFixedLciToPrefixed(this.fee, this.incomeTax, this.percentageCdi)
      );
    },
    postFixedCdb() {
      return roundDecimalPlaces(lciToCdb(this.fee, this.incomeTax));
    },
    postFixedLci() {
      return roundDecimalPlaces(cdbToLci(this.fee, this.incomeTax));
    },
  },
};
</script>

<template>
  <TabContent id="postfixed">
    <div id="postfixed-content" class="row">
      <div class="col">
        <ReactiveInput
          fee-input
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
          interest-rate-input
          label="Taxa de juros (%)"
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
      <TaxIncomeRange
        tax-income-input
        @change-value="
          (val) => {
            this.incomeTax = val;
          }
        "
      />
    </div>

    <div class="row my-4">
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

      <Card
        id="postfixed-cdb-card"
        title="CDB"
        :subtitle="`Equivalente a uma LCI/LCA de ${fee || 0}% do CDI`"
        :text="postFixedCdb + '%'"
      />

      <Card
        id="postfixed-lci-card"
        title="LCI/LCA"
        :subtitle="`Equivalente a um CDB de ${fee || 0}% do CDI`"
        :text="postFixedLci + '%'"
      />
    </div>
  </TabContent>
</template>
