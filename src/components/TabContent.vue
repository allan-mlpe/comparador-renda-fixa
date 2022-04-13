<script>
import SimpleCol from "../components/SimpleCol.vue";

export default {
  components: {
      SimpleCol
  },
  props: {
      id: String,
      isActive: {
          type: Boolean,
          default: false
      }
  },
};
</script>

<template>
  <div
    class="tab-pane fade show"
    :class="{ active: isActive }"
    role="tabpanel"
    :id="id"
    :aria-labelledby="`${id}-tab`"
  >
    <SimpleCol>
      <slot></slot>
    </SimpleCol>
  </div>
</template>
