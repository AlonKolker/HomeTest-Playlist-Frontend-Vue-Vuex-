<template>
  <section v-if="video" class="video-preview-conteiner flex">
    <img class="prev-video-tumblr" :src="video.thumbnail" alt="" />
    <div class="video-info">
      <h1 class="prev-video-name">{{ video.name }}</h1>
      <h5>{{ video.description }}</h5>
     

    </div>
    <!-- <div>{{ video.TotalVots }}</div> -->
    <!-- <button @click.prevent="setSelectedVideo" class="prev-play-btb"> <font-awesome-icon icon="fa-solid fa-play" /> -->
<!-- </button> -->
<div @click.prevent="setSelectedVideo" class="prev-play-btb"><font-awesome-icon icon="fa-solid fa-circle-play" /></div>

  </section>
</template>

<script>
export default {
  name: "video-preview",
  props: { video: Object },
  created() {},
  methods: {
    setSelectedVideo(){
      let selectedVid = this.video
      this.$store.dispatch({ type: "setSelectedVideo",selectedVid })

    }
  },
  computed: {
    shortBodyMsg() {
      if (this.feedback.comment.length > 45) return this.feedback.comment.substr(0, 45) + "..."
      return this.feedback.comment
    },
  },
  emits: [],
}
</script>
