<script>
import Header from '@/components/header.vue';
import { router } from '@/router';

export default {
  name: "App",
  components: {
    Header
  },
  created() {
    console.log("App created");
    console.log(router.currentRoute._value.name)
  }
}
</script>
<template>
  <div id="app" :class="$route?.name ? $route?.name : 'default-view'">
    <a-layout class="layout" id="components-layout-demo-top" theme="light">
      <Header />
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">©2022 Cihat Salik</a-layout-footer>
    </a-layout>
  </div>
</template>

<style lang="scss">
* {
  position: relative;
}

h1 {
  font-weight: 700 !important;
}
</style>

<style lang="scss">
html,
body {
  background-color: transparent !important;
}

#app {
  font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-weight: 500;
  background-color: #fff;

  .logo {
    z-index: 1;
    font-weight: bold;

    a {
      height: 100%;
      padding-right: 0.3em;
      width: 100%;
    }

    span {
      top: -3px;
      color: white;
      background: #1890ff;
      border-radius: 3px;
      font-size: 8px;
      padding: 3px;
    }
  }

  .ant-layout {
    min-height: 100vh;
  }
}

.default-view,
.profile-view,
.dashboard-view,
.login-view,
.register-view {
.recommendation-view,
  .ant-layout-content {
    max-width: 1200px;
    align-self: center;
    padding: 4em;
    width: 100%;

    @media (max-width: 576px) {
      padding: 1em;
    }
  }
}

.profile-view {}

.home-view {
  .ant-layout-content {
    /* max-width: 1200px; */
    align-self: center;
    padding: 0;
    width: 100%;

    @media (max-width: 576px) {
      /* padding: 1em; */
    }
  }
}

.recommendation-view {
  .ant-layout-content {
    /* max-width: 1200px; */
    align-self: center;
    padding: 1em;
    width: 100%;

    @media (max-width: 576px) {
      /* padding: 1em; */
    }
  }
}

.auth-view {
  background-color: green !important;
}
</style>
