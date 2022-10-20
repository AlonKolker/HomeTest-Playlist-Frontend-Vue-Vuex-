<template>
  <section v-if="video" class="video-preview-conteiner flex">
    <img class="prev-video-tumblr" :src="video.thumbnail" alt="" />
    <div>
      <h1 class="prev-video-name">{{ video.name }}</h1>
      <h5>{{ video.description }}</h5>

    </div>
    <div>{{ video.TotalVots }}</div>
  </section>
</template>

<script>
export default {
  name: "video-preview",
  props: { video: Object },
  created() {},
  methods: {},
  computed: {
    shortBodyMsg() {
      if (this.feedback.comment.length > 45) return this.feedback.comment.substr(0, 45) + "..."
      return this.feedback.comment
    },
  },
  emits: [],
}
</script>
