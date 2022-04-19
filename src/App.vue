<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import MainTabs from "./views/MainTabs.vue"
</script>

<template>
  <TheHeader />

  <main>
    <MainTabs />
  </main>

  <TheFooter />
</template>
