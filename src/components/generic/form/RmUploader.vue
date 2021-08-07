<template>
  <q-field
    full-width
    no-error-icon
    class="q-mb-sm"
    :value="value"
    :rules="[(val)=>!!val || 'no files']"
  >
    <q-uploader
      ref="uploader"
      flat
      class="full-width"
      @added="onUploaderChange"
      @removed="onUploaderChange"
      hide-upload-btn
      bordered
    />
  </q-field>
</template>

<script>
export default {
  name: "rm-uploader",
  data: () => ({ value: [] }),
  methods: {
    onUploaderChange(e) {
      this.value = this.$refs.uploader.files[0];
      this.$emit("input", this.value);
    }
  },
  mounted() {
    this.value = this.$attrs.value;
  }
};
</script>

<style>
</style>