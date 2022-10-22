<template>
  <section class="app-conteiner flex flex-column">
  <div class="app-header">OurTube playlist</div>
    <filterCmp />
    <div class="flex">
      <VideoList />
      <SelectedVideoPrev />
    </div>
  </section>
</template>

<script>
import filterCmp from "./cmps/serachBy-cmp.vue"
import VideoList from "./cmps/video-list.vue"
import SelectedVideoPrev from "./cmps/selected-video-prev.vue"

export default {
  name: "app",
  components: {
    filterCmp,
    VideoList,
    SelectedVideoPrev,
  },
  created() {
    this.$store.dispatch({ type: "loadVideos" })
  },
}
</script>
