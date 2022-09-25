<script>
import { useAccountStore } from '@/store';
import { message } from 'ant-design-vue';
import { mapActions, mapState } from 'pinia';

export default {
  name: "App",
  computed: {
    ...mapState(useAccountStore, ["user"]),
    selectedKeys() {
      return [this.$route?.name]
    },
  },
  methods: {
    ...mapActions(useAccountStore, ["logout"]),
    async doLogout() {
      await this.logout()
      message.success('Logout successful 🎉✅🎉')
      this.$router.push("/")
    },
  },
}
</script>
<template>
  <div id="app" :class="$route?.name">
    <a-layout class="layout" id="components-layout-demo-top" theme="light">
      <a-layout-header>
        <a-row type="flex" justify="space-between">
          <a-col>
            <div class="logo">
              <router-link to="/">Boiler Plate</router-link><span>BETA</span>
            </div>
          </a-col>
          <a-col class="navigation">
            <a-menu v-if="user" theme="light" :selectedKeys="selectedKeys" mode="horizontal"
              :style="{lineHeight: '64px'}" inlineCollapsed="false" ellipsize={false} class="nav-list">
              <a-menu-item key="register">
                <router-link :to="`/profile/${user._id}`" v-if="user.username">
                  {{ user.username }}
                </router-link>
              </a-menu-item>
              <a-menu-item v-if="user" key="logout" @click="doLogout">Log out</a-menu-item>
            </a-menu>
            <a-menu v-else mode="horizontal" class="nav-list">
              <a-menu-item key="login">
                <router-link to="/login">Log in</router-link>
              </a-menu-item>
              <a-menu-item key="register">
                <router-link to="/register">Sign up</router-link>
              </a-menu-item>
            </a-menu>
          </a-col>
        </a-row>
      </a-layout-header>
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

  .ant-layout-header {
    background: white;
    padding: 0 calc(calc(100% - 1088px) / 2);
  }

  .ant-layout-content {
    max-width: 1200px;
    align-self: center;
    padding: 4em;
    width: 100%;

    @media (max-width: 576px) {
      padding: 1em;
    }
  }

  .navigation {
    flex-grow: 2;

    .nav-list {
      justify-content: flex-end;

      li {
        span {
          display: block;
          a {
            display: block;
          }
        }
      }
    }
  }
}
</style>
