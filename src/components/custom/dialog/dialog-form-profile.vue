<template>
  <q-dialog
    v-model="value"
    @update="onUpdate"
  >
    <rm-dialog-card>
      <template v-slot:title>
        add profile
      </template>
      <form-profile @success="show=false" />
    </rm-dialog-card>
  </q-dialog>
</template>

<script>
import formProfile from "../form/form-profile.vue";
export default {
  components: { formProfile },
  name: "dialog-form-profile",
  props: { show: { default: () => true } },
  data() {
    return {
      value: false
    };
  },
  methods: {
    onUpdate() {
      console.log(231);
      this.$emit("input", this.value);
    }
  },
  mounted() {
    console.log(/*LL*/ 0, "this.show", this.show);
    this.value = this.show;
  }
};
</script>

<style>
</style>