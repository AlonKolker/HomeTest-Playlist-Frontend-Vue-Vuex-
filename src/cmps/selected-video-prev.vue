<template>
  <section v-if="selectedVideo" class="selceted-video-conteiner">
    <iframe class="selectd-video" :src="selectedVideo.url"> </iframe>
    <div> <span class="Currently-playing-title"> Currently playing:</span> "{{selectedVideo.name}}"</div>
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
