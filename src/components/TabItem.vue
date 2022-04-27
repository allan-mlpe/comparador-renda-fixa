<script>
export default {
  props: {
    contentId: String,
    tabTitle: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <li class="nav-item text-white bg-dark" role="presentation">
    <button
      class="nav-link bg-dark text-white"
      :class="{ active: isActive }"
      :id="`${contentId}-tab`"
      data-bs-toggle="tab"
      :data-bs-target="`#${contentId}`"
      type="button"
      role="tab"
      :aria-controls="contentId"
      :aria-selected="isActive"
    >
      {{ tabTitle }}
    </button>
  </li>
</template>

<style scoped>
.nav-link.active {
  border: none;
  color: rgb(255, 115, 0) !important;
  border-bottom: 1px solid rgb(255, 115, 0) !important;
  height: 100%;
}
</style>
