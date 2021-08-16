<template>
  <div>
    <rm-uploader v-model="formData.image" />

    <rm-input
      autofocus
      label="Company"
      v-model="formData.company"
    />
    <rm-input
      label="Description"
      v-model="formData.description"
    />
    <rm-input
      label="Location"
      v-model="formData.location"
    />
    <rm-input
      label="Title"
      v-model="formData.title"
    />

    <rm-hashtag-input
      label="Hashtags"
      v-model="formData.hashtags"
    />

    <q-select
      label="Hashtags"
      ref="hashtagInput"
      v-model="formData.hashtags"
      @keypress="onHashtagKeyPress"
      @keydown.ctrl="prevent"
      @keydown.alt="prevent"
      @keydown.meta="prevent"
      use-input
      use-chips
      multiple
      hide-dropdown-icon
      input-debounce="0"
      new-value-mode="add-unique"
      bottom-slots
      :stack-label="false"
      outlined
      class="q-mb-sm"
      clearable
      :rules="[(val)=>Array.isArray(val) && val.length || 'arrayLength 0']"
    >
      <template v-slot:selected-item="item">
        <q-chip
          removable
          @remove="removeHashtag(item.index)"
          dense
        >
          {{`#${item.opt}`}}
        </q-chip>
      </template>
    </q-select>

  </div>
</template>

<script>
import { modelProfile } from "../../../models/modelProfile";

export default {
  data: () => ({
    formData: {}
  }),
  watch: {
    formData: {
      handler: function(data) {
        this.$emit("update", data);
      },
      deep: true
    }
  },
  methods: {
    prevent(e) {
      e.preventDefault();
    },
    onHashtagKeyPress(e) {
      const isLowerLetter = e.keyCode >= 65 && e.keyCode <= 90;
      const isUpperLetter = e.keyCode >= 97 && e.keyCode <= 122;

      const other = { backspace: 8 };
      const isOther = Object.values(other).includes(e.keyCode);

      if (!isLowerLetter && !isUpperLetter && !isOther) e.preventDefault();
    },
    removeHashtag(index) {
      this.componentValue.splice(index, 1);
    }
  },
  created() {
    this.formData = modelProfile.fillTemplate(this.data);
  }
};
</script>
