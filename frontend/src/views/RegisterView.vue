<script setup>
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import CardBox from "@/components/CardBox.vue";
import FormControl from "@/components/FormControl.vue";
import FormField from "@/components/FormField.vue";
import SectionFullScreen from "@/components/SectionFullScreen.vue";
import LayoutGuest from "@/layouts/LayoutGuest.vue";
import { mdiAccount, mdiAsterisk, mdiEmail } from "@mdi/js";
import { message } from 'ant-design-vue';
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useAccountStore } from "../stores";

const form = reactive({
  username: "",
  name: '',
  email: "",
  password: "",
  passwordConfirmation: ''
  // remember: true,
});
let backendError = ref('');
const accountStore = useAccountStore()

const router = useRouter();

async function submit() {
  backendError.value = null
  try {
    await accountStore.registerUser({
      username: form.username,
      name: form.name,
      email: form.email,
      password: form.password,
      passwordConfirmation: form.passwordConfirmation
    })
    message.success('Register successful 🎉')
    router.push({ path: '/login' })
  } catch (error) {
    backendError.value = error?.response?.data?.message ?
      error?.response?.data?.message :
      error?.message

    message.error(backendError.value)
  }
};
</script>

<template>
  <LayoutGuest>
    <SectionFullScreen v-slot="{ cardClass }" bg="purplePink">
      <CardBox :class="cardClass" is-form @submit.prevent="submit">
        <FormField label="Username" help="Please enter your username">
          <FormControl v-model="form.username" :icon="mdiAccount" name="username" autocomplete="username" />
        </FormField>

        <FormField label="Full Name" help="Please enter your name">
          <FormControl v-model="form.name" :icon="mdiAccount" name="name" autocomplete="name" />
        </FormField>

        <FormField label="Username" help="Please enter your email">
          <FormControl v-model="form.email" :icon="mdiEmail" name="email" autocomplete="email" />
        </FormField>

        <FormField label="Password" help="Please enter your password">
          <FormControl v-model="form.password" :icon="mdiAsterisk" type="password" name="password"
            autocomplete="current-password" />
        </FormField>
        <FormField label="Password Confirmation" help="Please enter your password confirmation">
          <FormControl v-model="form.passwordConfirmation" :icon="mdiAsterisk" type="passwordConfirmation"
            name="passwordConfirmation" autocomplete="current-password" />
        </FormField>

        <!-- <FormCheckRadio
          v-model="form.remember"
          name="remember"
          label="Remember"
          :input-value="true"
        /> -->

        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Register" />
            <BaseButton to="/login" color="info" outline label="Login" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionFullScreen>
  </LayoutGuest>
</template>
