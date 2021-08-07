<template>

  <q-dialog
    v-model="childValue"
    persistent
  >
    <q-card style="width:500px">
      <rm-dialog-title>
        {{ title }}
      </rm-dialog-title>
      <slot></slot>
    </q-card>
  </q-dialog>

</template>

<script>
import RmDialogTitle from "./RmDialogTitle.vue";
export default {
  name: "rm-dialog",
  props: {
    title: { required: true },
    value: { default: () => true }
  },
  components: {
    RmDialogTitle
  },
  data: () => ({
    childValue: false,
    console
  }),
  methods: {
    toggle() {
      this.childValue = !this.childValue;
    }
  },
  watch: {
    value: {
      handler() {
        this.toggle();
      }
    }
  }
};
</script>
