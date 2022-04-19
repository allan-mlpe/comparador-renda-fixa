<script>
import PrefixedInvestment from "./PrefixedInvestment.vue";
import PostFixedInvestment from "./PostFixedInvestment.vue";
import PostFixedIpcaInvestment from "./PostFixedIpcaInvestment.vue";
import TabItem from "../components/TabItem.vue";

export default {
    components: {
        PrefixedInvestment,
        PostFixedInvestment,
        PostFixedIpcaInvestment,
        TabItem
    }
}
</script>

<template>
  <ul class="nav nav-tabs nav-fill" id="investment-tabs" role="tablist">
    <TabItem contentId="prefixed" tabTitle="Prefixado" :isActive="true" />
    <TabItem contentId="postfixed" tabTitle="Pós-fixado" />
    <TabItem contentId="postfixed-ipca" tabTitle="IPCA" />
  </ul>
  <div class="tab-content mt-3" id="investment-tabs-content">
    <PrefixedInvestment />
    <PostFixedInvestment />
    <PostFixedIpcaInvestment />
  </div>
</template>
