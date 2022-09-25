<script>
import { useAccountStore } from '@/store';
import { router } from '@/router';
import { LockOutlined, UserOutlined } from '@ant-design/icons-vue';
import { computed, defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },

  setup() {
    const formState = reactive({
      email: '',
      password: ''
    });
    let backendError = ref('');
    const accountStore = useAccountStore()

    const onFinish = async (values) => {
      backendError.value = null
      try {
        await accountStore.login(values)
        router.push({ path: '/' })
      } catch (error) {
        backendError.value = error?.response?.data?.message ?
          error?.response?.data?.message :
          error?.message
      }
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    const disabled = computed(() => {
      return !(formState.email && formState.password);
    });
    return {
      formState,
      backendError,
      onFinish,
      onFinishFailed,
      disabled,
    };
  },
});

</script>


<template>
  <div class="container">
    <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish" @finishFailed="onFinishFailed"
      :label-col="{span: 8}" label-align="left" :wrapper-col="{span: 16}">
      <a-form-item label="E-mail" name="email"
        :rules="[{required: true, message: 'Please input your e-mail address!'}]">
        <a-input v-model:value="formState.email">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item label="Password" name="password" :rules="[{required: true, message: 'Please input your password!'}]">
        <a-input-password v-model:value="formState.password">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item :label-col="{span: 8}" :wrapper-col="{span: 32}">
        <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button"> Log in </a-button>
        <span v-if="backendError" class="error_message">{{ backendError }}</span>
        <a-divider style="border-color: #000" dashed />
        <div class="container">I havent registered yet. &nbsp;<a href="/register">register now!</a></div>
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    width: 500px;
  }

  .login-form-forgot {
    float: right;
  }

  .login-form-button {
    width: 100%;
  }

  .error_message {
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    text-align: center;
    font-weight: bold;
    margin: auto;
    margin-top: 1rem;
  }
}
</style> -->
  



<!-- <script>
import {LockOutlined, UserOutlined} from "@ant-design/icons-vue"
import { mapActions } from 'pinia'
import { useAccountStore } from '../../store/account.store'

export default {
  name: "login-view",
  data() {
    return {
      formState: {
        email: "",
        password: "",
      },
      backendError: null,
    }
  },
  components: {
    LockOutlined,
    UserOutlined,
  },
  methods: {
    ...mapActions(useAccountStore, ["login"]),
    async onFinish(values) {
      this.backendError = null
      try {
        await this.login(values)
        this.$router.push("/")
      } catch (error) {
        console.log("error", error)
        this.backendError = error.response.data.message ? error.response.data.message : error.message
      } finally {
        console.log("Success:", values)
        this.loading = false
      }
    },

    onFinishFailed(errorInfo) {
      console.log("Failed:", errorInfo)
    },
  },
  computed: {
    disabled() {
      return !(this.formState.email && this.formState.password)
    },
  },
}
</script>

<template>
  <div class="container">
    <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      :label-col="{span: 8}"
      label-align="left"
      :wrapper-col="{span: 16}"
    >
      <a-form-item
        label="E-mail"
        name="email"
        :rules="[{required: true, message: 'Please input your e-mail address!'}]"
      >
        <a-input v-model:value="formState.email">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item label="Password" name="password" :rules="[{required: true, message: 'Please input your password!'}]">
        <a-input-password v-model:value="formState.password">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item :label-col="{span: 8}" :wrapper-col="{span: 32}">
        <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button"> Log in </a-button>
        <span class="error_message">{{ backendError }}</span>
        <a-divider style="border-color: #000" dashed />
        <div class="container">I havent registered yet. &nbsp;<a href="/register">register now!</a></div>
      </a-form-item>
    </a-form>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-form {
    width: 500px;
  }

  .login-form-forgot {
    float: right;
  }

  .login-form-button {
    width: 100%;
  }

  .error_message {
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    text-align: center;
    font-weight: bold;
    margin: auto;
    margin-top: 1rem;
  }
}
</style> -->
