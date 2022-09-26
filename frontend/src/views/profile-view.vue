<script>
import { useAccountStore } from '@/stores';
import { mapState } from 'pinia';
import { defineComponent } from "vue";
import SubHeader from "@/components/sub-header.vue";
import UserPreview from "@/components/user-preview.vue";

export default defineComponent({
  name: "profile-view",
  components: {
    SubHeader,
    UserPreview
  },
  computed: {
    ...mapState(useAccountStore, ['user'])
  }
})
</script>

<template>
  <div class="container">
    <SubHeader :title="user.name" :sub-title="user.username"></SubHeader>
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="10">
        <a-card class="gutter-box" hoverable="" style="width: full">
          <div class="avatar_image_wrapper">
            <a-avatar :size="200" icon="user"></a-avatar>
          </div>
          <template class="ant-card-actions" slot="actions">
            <a-icon key="setting" type="setting">
              <a-icon key="edit" type="edit">
                <a-icon key="ellipsis" type="ellipsis"></a-icon>
              </a-icon>
            </a-icon>
          </template>
          <a-descriptions title="User Info">
            <a-descriptions-item label="UserName">{{ user.username }}</a-descriptions-item>
            <a-descriptions-item label="E-mail">{{ user.email }}</a-descriptions-item>
            <a-descriptions-item label="Live">Hangzhou, Zhejiang</a-descriptions-item>
            <a-descriptions-item label="Remark">empty</a-descriptions-item>
            <a-descriptions-item label="Address">No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </a-descriptions-item>
          </a-descriptions>
        </a-card>
      </a-col>
      <a-col class="gutter-row" :span="14">
        <UserPreview />
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
}

.avatar_image_wrapper {
  margin-bottom: 20px;
}
</style>
