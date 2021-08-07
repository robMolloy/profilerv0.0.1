<template>
  <div>

    <q-btn @click="childValue--">c-</q-btn>
    <q-btn @click="childValue++">c+</q-btn>

    <div> parentValue: {{ value }} </div>
    <div> childValue: {{ childValue }} </div>
  </div>
</template>

<script>
export default {
  props: {
    value: { required: true }
  },
  data: () => ({
    childValue: null
  }),
  watch: {
    value: {
      immediate: true,
      handler: function(newValue) {
        this.childValue = newValue;
      }
    },
    childValue: {
      handler: function(newValue) {
        this.$emit("input", newValue);
      }
    }
  }
};
</script>
