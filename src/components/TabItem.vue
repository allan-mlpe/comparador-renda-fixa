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
  <li class="nav-item" role="presentation">
    <button
      class="nav-link"
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
