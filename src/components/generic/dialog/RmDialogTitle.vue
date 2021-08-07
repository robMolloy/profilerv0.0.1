<template>
  <div class="row items-center q-pa-sm bg-primary text-white">
    <q-toolbar-title
      class="text-h6"
      style="text-transform:capitalize;"
    >
      <slot></slot>
    </q-toolbar-title>
    <q-space />
    <q-btn
      padding="none"
      icon="close"
      flat
      dense
      v-close-popup
    />
  </div>
</template>

<script>
export default {
  name: "rm-dialog-title"
};
</script>
