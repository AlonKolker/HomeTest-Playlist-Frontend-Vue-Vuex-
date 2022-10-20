<template>
<section class="filter">

    <input   @input.prevent="onFilter" v-model="text" type="text" placeholder="Filter" >
</section>
</template>

<script>
export default {
    name: 'filter-cmp',
    props: {  },
    data() {
        return{
            text:'',
        }
    },
    methods: {
        onFilter(){
  
            this.$emit('onChangeFilter',this.text)
        }
    },
    created() {
    },
    emits: ['filter']
}
</script>

