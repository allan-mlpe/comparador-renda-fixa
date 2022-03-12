<script>
export default {
    emits: ['changeValue'],
    data() {
        return {
            taxes: [
                {tax: 0.225, label: "Até 180 dias"},
                {tax: 0.20, label: "De 181 a 360 dias"},
                {tax: 0.175, label: "De 361 a 720 dias"},
                {tax: 0.15, label: "Acima de 720 dias"}
            ],
            value: 0
        }
    },
    created() {
        this.$emit('changeValue', this.taxes[this.value].tax)
    }
}
</script>

<template>
<div class="form-floating mb-3">
    Prazo para resgate:
  <input type="range" class="form-range" min="0" v-model="value" :max="taxes.length - 1" step="1" @change="$emit('changeValue', taxes[value].tax)"/>
    {{ taxes[value].label }}
    </div>
</template>