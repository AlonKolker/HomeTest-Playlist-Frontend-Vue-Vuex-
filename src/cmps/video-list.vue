<template>
  <section v-if="videos">
        <!-- <videoPreview /> -->
    <videoPreview v-for="video in videos" :video="video" :key="video._id" />
  </section>
</template>

<script>
import videoPreview from "./video-preview.vue"
export default {
  name: "video-list",
  props: {},
  data() {
    return {
    }
  },
  created() {},
  methods: {
    // crudReq(funcType) { this.$emit('crudReq', { type: funcType, itemId: this.item._id }) },
  },
  computed: {
    // shortBody() { return this.item.body.substr(0, 97) + '...' },
    videos() {
      return this.$store.getters.videos
    },
  },
  emits: [""],
  components: {
    videoPreview,
  },
}
</script>
