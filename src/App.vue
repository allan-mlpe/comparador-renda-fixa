<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import TabItem from "./components/TabItem.vue";
import PrefixedInvestment from "./views/PrefixedInvestment.vue";
import PostFixedInvestment from "./views/PostFixedInvestment.vue";
import PostFixedIpcaInvestment from "./views/PostFixedIpcaInvestment.vue";
</script>

<template>
  <TheHeader />

  <main>
    <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
      <TabItem contentId="prefixed" tabTitle="Prefixado" :isActive="true" />
      <TabItem contentId="postfixed" tabTitle="Pós-fixado" />
      <TabItem contentId="postfixed-ipca" tabTitle="IPCA" />
    </ul>
    <div class="tab-content mt-3" id="myTabContent">
      <PrefixedInvestment />
      <PostFixedInvestment />
      <PostFixedIpcaInvestment />
    </div>
  </main>

  <TheFooter />
</template>
