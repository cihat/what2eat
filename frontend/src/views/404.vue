<template>
  <div class="container">
    <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
      <template #extra>
        <router-link class="ant-btn ant-btn-primary back-button" to="/">Back Home</router-link>
      </template>
    </a-result>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .back-button {
    background-color: #1890ff;
    border-color: #1890ff;
    padding: .4rem 1.2rem;
    border-radius: 4px;
    margin-top: 10px;
    color: #fff;
    &:hover {
      background-color: #40a9ff;
      border-color: #40a9ff;
    }
  }
}
</style>
