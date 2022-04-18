<script>
import ReactiveInput from "../components/ReactiveInput.vue";
import Card from "../components/Card.vue";
import TaxIncomeRange from "../components/TaxIncomeRange.vue";
import TabContent from "../components/TabContent.vue";
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
      return postFixedCdbToPrefixed(this.fee, this.percentageCdi).toFixed(2);
    },
    prefixedLci() {
      return postFixedLciToPrefixed(
        this.fee,
        this.incomeTax,
        this.percentageCdi
      ).toFixed(2);
    },
    postFixedCdb() {
      return lciToCdb(this.fee, this.incomeTax).toFixed(2);
    },
    postFixedLci() {
      return cdbToLci(this.fee, this.incomeTax).toFixed(2);
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

    <div class="row mt-4">
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
