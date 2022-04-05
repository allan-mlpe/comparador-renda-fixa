<script setup>
import PrefixedInvestment from "./components/PrefixedInvestment.vue";
import SimpleCol from "./components/SimpleCol.vue";
import PostFixedInvestment from "./components/PostFixedInvestment.vue";
</script>

<template>
  <header>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">Comparador Renda Fixa</a>
    </nav>
  </header>

  <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
    <li class="nav-item" role="presentation">
      <button
        class="nav-link active"
        id="prefixed-tab"
        data-bs-toggle="tab"
        data-bs-target="#prefixed"
        type="button"
        role="tab"
        aria-controls="prefixed"
        aria-selected="true"
      >
        Prefixado
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="postfixed-tab"
        data-bs-toggle="tab"
        data-bs-target="#postfixed"
        type="button"
        role="tab"
        aria-controls="postfixed"
        aria-selected="false"
      >
        Pós-fixado
      </button>
    </li>
    <li class="nav-item" role="presentation">
      <button
        class="nav-link"
        id="contact-tab"
        data-bs-toggle="tab"
        data-bs-target="#contact"
        type="button"
        role="tab"
        aria-controls="contact"
        aria-selected="false"
      >
        IPCA
      </button>
    </li>
  </ul>
  <div class="tab-content" id="myTabContent">
    <div
      class="tab-pane fade show active"
      id="prefixed"
      role="tabpanel"
      aria-labelledby="prefixed-tab"
    >
      <SimpleCol>
        <PrefixedInvestment />
      </SimpleCol>
    </div>

    <div 
      class="tab-pane fade" 
      id="postfixed" 
      role="tabpanel" 
      aria-labelledby="postfixed-tab"
    >
      <SimpleCol>
        <PostFixedInvestment />
      </SimpleCol>
    </div>
    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
      <SimpleCol> Em breve... </SimpleCol>
    </div>
  </div>
</template>

<style>
div.tab-pane {
  margin-top: 10pt;
}
</style>
