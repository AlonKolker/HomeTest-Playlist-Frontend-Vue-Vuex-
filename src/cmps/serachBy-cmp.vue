<template>
  <section class="filter">
    <form @click.prevent="onSearchBy()" class="flex">
      <input class="filter-input" v-model="text" type="text" placeholder="Search on youtube.." />
      <!-- <input   @input.prevent="onSearchBy()" passive: true v-model="text" type="text" placeholder="Search" > -->
      <button class="search-btn" type="submit">Search</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "serachBy-cmp",
  props: {},
  data() {
    return {
      text: "",
    }
  },
  methods: {
    onSearchBy() {
      let text = this.text
      this.$store.dispatch({ type: "setSearchBy", text })
    },
  },
  created() {},
  emits: [""],
}
</script>
