<script>
import InvestmentInput from "./components/InvestmentInput.vue";
import TaxIncomeRange from "./components/TaxIncomeRange.vue";
import { lciToCdb, cdbToLci } from "./logic/converters.ts"

export default {
  components: {
    InvestmentInput,
    TaxIncomeRange
    },
    
    data() {
      return {
        cdb: 0,
        lci: 0,
        taxIncome: 0
      }
    },

    methods: {
      convertCdbToLci(val) {
        this.cdb = val
        this.lci = cdbToLci(val, this.taxIncome)
      },
      convertLciToCdb(val) {
        this.lci = val
        this.cdb = lciToCdb(val, this.taxIncome)
      },
      recalculate(tax) {
        this.taxIncome = tax
        this.convertLciToCdb(this.lci)
      }
    }
}
</script>

<template>
  <header>
    <div class="wrapper">
    
    </div>
  </header>

  <main>
    <InvestmentInput label="LCI" :value=lci @change-value="convertLciToCdb"/>
    <InvestmentInput label="CDB" :value=cdb @change-value="convertCdbToLci"/>

    <TaxIncomeRange @change-value="recalculate"/>
  </main>
</template>

<style>

</style>
