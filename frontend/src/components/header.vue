<script>
import { useAccountStore } from '@/store';
import { LogoutOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { mapActions, mapState } from 'pinia';

export default {
  name: "header",
  computed: {
    ...mapState(useAccountStore, ["user"]),
    selectedKeys() {
      return [this.$route?.name]
    },
  },
  components: {
    LogoutOutlined
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
  <a-layout-header>
    <a-row type="flex" justify="space-between">
      <a-col>
        <div class="logo">
          <router-link to="/">What2Eat</router-link><span>BETA</span>
        </div>
      </a-col>
      <a-col class="navigation">
        <a-menu v-if="user" theme="light" :selectedKeys="selectedKeys" mode="horizontal" :style="{lineHeight: '64px'}"
          inlineCollapsed="false" ellipsize={false} class="nav-list">
          <a-menu-item key="register" class="menu-item">
            <router-link :to="`/profile/${user._id}`" v-if="user.username">
              {{ user.username }}
            </router-link>
          </a-menu-item>
          <a-menu-item v-if="user" key="logout" @click="doLogout" class="menu-item">
            <LogoutOutlined />
            Log out
          </a-menu-item>
        </a-menu>
        <a-menu v-else mode="horizontal" class="nav-list">
          <a-menu-item key="login" class="menu-item">
            <router-link to="/login">Log in</router-link>
          </a-menu-item>
          <a-menu-item key="register" class="menu-item">
            <router-link to="/register">Sign up</router-link>
          </a-menu-item>
        </a-menu>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<style lang="scss" scoped>
.ant-layout-header {
  background: white;
  padding: 0 calc(calc(100% - 1088px) / 2);
  overflow: hidden;

  .navigation {
    flex-grow: 2;

    .nav-list {
      justify-content: flex-end;

      .menu-item {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

        svg {
          transform: scale(1.5);
        }

        a {
          display: block;
        }
      }
    }
  }
}
</style>
