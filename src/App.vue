<script setup>
import PrefixedInvestment from "./views/PrefixedInvestment.vue";
import SimpleCol from "./components/SimpleCol.vue";
import PostFixedInvestment from "./views/PostFixedInvestment.vue";
import PostFixedIpcaInvestment from "./views/PostFixedIpcaInvestment.vue";
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
        id="postfixed-ipca-tab"
        data-bs-toggle="tab"
        data-bs-target="#postfixed-ipca"
        type="button"
        role="tab"
        aria-controls="postfixed-ipca"
        aria-selected="false"
      >
        IPCA
      </button>
    </li>
  </ul>
  <div class="tab-content mt-3" id="myTabContent">
    <div
      class="tab-pane fade show active"
      id="prefixed"
      role="tabpanel"
      aria-labelledby="prefixed-tab"
    >
      <PrefixedInvestment />
    </div>

    <div
      class="tab-pane fade"
      id="postfixed"
      role="tabpanel"
      aria-labelledby="postfixed-tab"
    >
      <PostFixedInvestment />
    </div>
    <div
      class="tab-pane fade"
      id="postfixed-ipca"
      role="tabpanel"
      aria-labelledby="postfixed-ipca-tab"
    >
      <PostFixedIpcaInvestment />
    </div>
  </div>
</template>
