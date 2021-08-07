<template>
  <rm-dialog-card>
    <template v-slot:title>
      add profile
    </template>
    <form-profile @success="$emit('success')" />
  </rm-dialog-card>
</template>

<script>
import formProfile from "../form/form-profile.vue";
export default {
  components: { formProfile },
  name: "dialog-card-form-profile",
  data: () => ({}),
  methods: {
    onUpdate() {
      this.$emit("input", this.value);
    }
  }
};
</script>

<style>
</style>