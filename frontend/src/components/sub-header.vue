<template >
  <a-page-header style="border: 1px solid rgb(235, 237, 240)" :title="title" :sub-title="subTitle"
    @back="() =&gt; $router.go(-1)"></a-page-header>
</template>
<script>
export default {
  name: "sub-header",
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: false
    }
  }
}
</script>
<style lang="scss">

</style>
