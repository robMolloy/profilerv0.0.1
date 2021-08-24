<template>
  <rm-card class="q-my-md">
    <rm-card-subtitle>
      {{ label }}

      <template v-slot:right>
        asdasdds
      </template>
    </rm-card-subtitle>
    <q-carousel
      ref="component"
      v-model="componentValue"
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
  </rm-card>
</template>

<script>
export default {
  name: "PageImageCarousel",

  props: {
    images: {
      default: () => ({}),
      required: true,
      type: Object
    },
    value: { required: true },
    label: { default: () => "Pick An Image" }
  },

  data() {
    return { componentValue: null };
  },

  methods: {
    chooseFirstImage() {
      this.componentValue = this.imageValues[0].url;
    }
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

    componentValue: {
      handler(newValue, oldValue) {
        this.$emit("input", newValue);
      }
    }
  },
  mounted() {
    if (!this.componentValue) {
      this.$refs.component.next();
    }
  }
};
</script>

<style>
</style>