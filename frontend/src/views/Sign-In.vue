<!-- 
	This is the sign in page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<template>
  <div class="sign-in">

    <a-row type="flex" :gutter="[24,24]" justify="space-around" align="middle">

      <!-- Sign In Form Column -->
      <a-col :span="24" :md="12" :lg="{span: 12, offset: 0}" :xl="{span: 6, offset: 2}" class="col-form">
        <h1 class="mb-15">Sign In</h1>
        <h5 class="font-regular text-muted">Enter your email and password to sign in</h5>

        <!-- Sign In Form -->
        <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish"
          @finishFailed="onFinishFailed" :label-col="{span: 8}" label-align="left" :wrapper-col="{span: 16}">
          <a-form-item label="E-mail" name="email"
            :rules="[{required: true, message: 'Please input your e-mail address!'}]">
            <a-input v-model:value="formState.email">
              <template #prefix>
                <UserOutlined class="site-form-item-icon" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item label="Password" name="password"
            :rules="[{required: true, message: 'Please input your password!'}]">
            <a-input-password v-model:value="formState.password">
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item :label-col="{span: 8}" :wrapper-col="{span: 32}">
            <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button"> Log in
            </a-button>
            <!-- <span v-if="backendError" class="error_message">{{ backendError }}</span> -->
            <a-divider style="border-color: #000" dashed />
            <div class="container">I havent registered yet. &nbsp;<a href="/register">register now!</a></div>
          </a-form-item>
        </a-form>
        <!-- / Sign In Form -->

        <p class="font-semibold text-muted">Don't have an account? <router-link to="/sign-in"
            class="font-bold text-dark">Sign Up</router-link>
        </p>
      </a-col>
      <!-- / Sign In Form Column -->

      <!-- Sign In Image Column -->
      <a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img">
        <img src="images/img-signin.jpg" alt="">
      </a-col>
      <!-- Sign In Image Column -->

    </a-row>

  </div>
</template>

<script>
  import { router } from '@/router';
  import { useAccountStore } from '@/store';
  import { LockOutlined, UserOutlined } from '@ant-design/icons-vue';
  import { message } from 'ant-design-vue';
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
          message.success('Login successful 🎉')
          router.push({ path: '/' })
        } catch (error) {
          backendError.value = error?.response?.data?.message ?
            error?.response?.data?.message :
            error?.message
  
          message.error(backendError.value)
        } finally {
          accountStore.fetchUser()
        }
      };
  
      const onFinishFailed = errorInfo => {
        message.error(errorInfo)
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

<style lang="scss">
body {
  background-color: #ffffff;
}
</style>