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
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">Comparador Renda Fixa</a>
    </nav>
  </header>

  <main class="container-sm">
    <div class="row">
      <div class="col">
        <InvestmentInput label="LCI" :value=lci @change-value="convertLciToCdb"/>
      </div>

      <div class="col">
        <InvestmentInput label="CDB" :value=cdb @change-value="convertCdbToLci"/>    
      </div>
    </div>
    <div class="row">
      <TaxIncomeRange @change-value="recalculate"/>
      </div>

  </main>
</template>

<style>

</style>
