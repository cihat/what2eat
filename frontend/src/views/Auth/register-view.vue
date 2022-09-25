<script>
import { router } from '@/router';
import { useAccountStore } from '@/store';
import { LockOutlined, UserOutlined } from "@ant-design/icons-vue";
import { computed, defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },

  setup() {
    const formState = reactive({
      name: "",
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    });

    let backendError = ref('');
    const accountStore = useAccountStore()

    const onFinish = async (values) => {
      backendError.value = null
      try {
        await accountStore.registerUser(values)
        router.push({ path: '/login' })
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
    <a-form :model="formState" name="basic" :label-col="{span: 8}" label-align="left" :wrapper-col="{span: 16}"
      class="login-form" autocomplete="on" @finish="onFinish" @finishFailed="onFinishFailed">
      <a-form-item label="Full Name" name="name" :rules="[{required: true, message: 'Please input your name!'}]">
        <a-input v-model:value="formState.name">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item label="Username" name="username" :rules="[{required: true, message: 'Please input your username!'}]">
        <a-input v-model:value="formState.username">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item label="E-mail" name="email" :rules="[{required: true, message: 'Please input your email address!'}]">
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
      <a-form-item label="Password Confirmation" name="passwordConfirmation"
        :rules="[{required: true, message: 'Please input your password confirmation!'}]">
        <a-input-password v-model:value="formState.passwordConfirmation">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item :label-col="{span: 8}" :wrapper-col="{span: 32}">
        <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button"> Sign Up </a-button>
        <span v-if="backendError" class="error_message">{{ backendError }}</span>
        <a-divider style="border-color: #000" dashed />
        <div class="container">I have a account. &nbsp;<a href="/login">Login</a></div>
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
</style>
