<script>
export default {
  props: {
    title: String,
    subtitle: String,
    text: String,
  },
};
</script>

<template>
  <div class="col-xs-12 col-sm-6 g-3">
    <div class="card bg-dark text-white">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ subtitle }}</h6>
        <p class="card-text text-orange">{{ text }}</p>
      </div>
    </div>
  </div>
</template>
