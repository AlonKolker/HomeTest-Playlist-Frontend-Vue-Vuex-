<template>
  <section v-if="video" class="video-preview-conteiner flex">
    <img :src="video.thumbnail" alt="" />
    <div>{{ video.titile }}</div>
    <div>{{ video.description }}</div>
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
