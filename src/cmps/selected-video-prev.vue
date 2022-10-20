<template>
  <section v-if="selectedVideo">
    <iframe width="420" height="315" :src="selectedVideo.url"> </iframe>
    <div>Currently playing: "{{selectedVideo.name}}"</div>
  </section>
</template>

<script>

export default {
  name: "selected-video-prev",
  props: {},
  data() {
    return {}
  },
  created() {},
  methods: {},
  computed: {
    selectedVideo() {

      return this.$store.getters.selectedVideo
    },
    // shortBody() { return this.item.body.substr(0, 97) + '...' },
  },
  emits: [""],
  components: {},
}
</script>
