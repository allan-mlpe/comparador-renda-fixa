<script>
import ReactiveInput from "../components/ReactiveInput.vue";
import Card from "../components/Card.vue";
import TaxIncomeRange from "../components/TaxIncomeRange.vue";
import { postFixedCdbToPrefixed, postFixedLciToPrefixed, cdbToLci, lciToCdb } from "../logic/converters.ts";

export default {
  components: {
    ReactiveInput,
    Card,
    TaxIncomeRange,
  },

  data() {
    return {
      fee: 100,
      incomeTax: 0,
      expectedCdi: 12,
    };
  },

  computed: {
    prefixedCdb() {
      return (postFixedCdbToPrefixed(this.fee, this.expectedCdi / 100) || 0).toFixed(2);
    },
    prefixedLci() {
      return (postFixedLciToPrefixed(this.fee, this.incomeTax, this.expectedCdi / 100) || 0).toFixed(2);
    },
    postFixedCdb() {
      return (lciToCdb(this.fee, this.incomeTax) || 0).toFixed(2)
    },
    postFixedLci() {
      return (cdbToLci(this.fee, this.incomeTax) || 0).toFixed(2)
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
      @change-value="
        (val) => {
          this.incomeTax = val;
        }
      "
    />
  </div>

  <div class="row mt-4">
    <Card id="cdb-card" title="CDB" subtitle="Prefixado" :text="prefixedCdb + '%'" />

    <Card id="lci-card" title="LCI/LCA" subtitle="Prefixado" :text="prefixedLci + '%'" />
  </div>

  <div class="row mt-4">
    <Card id="cdb-card-2" title="CDB" :subtitle="`Equivalente a uma LCI/LCA de ${fee || 0}% do CDI`" :text="postFixedCdb + '%'" />

    <Card id="lci-card" title="LCI/LCA" :subtitle="`Equivalente a um CDB de ${fee || 0}% do CDI`" :text="postFixedLci + '%'" />
  </div>
</template>
