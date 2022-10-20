<template>
  <section class="app-conteiner">
    <filter />
    <div class="flex">
      <VideoList />
      <SelectedVideoPrev />
    </div>
  </section>
</template>

<script>
import filter from "./cmps/filter.vue"
import VideoList from "./cmps/video-list.vue"
import SelectedVideoPrev from "./cmps/selected-video-prev.vue"

export default {
  name: "app",
  components: {
    filter,
    VideoList,
    SelectedVideoPrev,
  },
  created() {
    this.$store.dispatch({ type: "loadVideos" })
  },
}
</script>
