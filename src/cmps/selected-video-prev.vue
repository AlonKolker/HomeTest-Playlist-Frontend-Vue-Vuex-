<template>
  <section v-if="selectedVideo" class="selceted-video-conteiner">
    <iframe width="600" height="320" :src="selectedVideo.url"> </iframe>
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
