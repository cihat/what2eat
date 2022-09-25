<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra="">
      <a-button type="primary" @click="() =&gt; $router.go(-1)">Previous Page</a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
