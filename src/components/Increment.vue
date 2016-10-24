<template>
  <div style="text-align: center">
    <button @click='addValue'>Count +1</button>
  </div>
</template>

<script>
export default {
  methods: {
    addValue() {
      this.$store.dispatch('setCounterValue',1);
      console.log(this.$store.state.count);
    }
  }
  }
</script>