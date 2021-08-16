<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="childValue"
      animated
      swipeable
      thumbnails
      infinite
      arrows
      control-type="regular"
      control-color="white"
      control-text-color="primary"
      class="shadow-1 text-black"
    >
      <q-carousel-slide
        v-for="(imageUrl,i) of imageUrlValues"
        :key="imageUrl"
        :name="imageUrl"
        :img-src="imageUrl"
      />
    </q-carousel>
  </div>
</template>

<script>
export default {
  name: "PageImageCarousel",

  props: {
    images: {
      default: () => ({}),
      required: true
    },
    value: { required: true }
  },

  data() {
    return { childValue: null };
  },

  computed: {
    imageValues() {
      return Object.values(this.images);
    },
    imageUrlValues() {
      return this.imageValues.map(({ url }) => url);
    }
  },

  watch: {
    value: {
      immediate: true,
      handler(newValue, oldValue) {
        this.childValue = newValue;
      }
    },

    childValue: {
      handler(newValue, oldValue) {
        this.$emit("input", newValue);
      }
    }
  }
};
</script>

<style>
</style>