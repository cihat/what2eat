<template>
  <div class="search-bar">
    <a-input placeholder="Please enter an ingredient" enter-button="Add" size='large' v-model:value="newTag"
      :loading='!isLoading' @keyup.enter="addTag" />
    <div class="tag-container">
      <a-button type="primary" shape="round" :size="size" v-for="(tag, index) in tags" :key="index"
        @click="deleteTag(tag)">
        <template #icon>
          <CloseOutlined />
        </template>
        {{ tag }}
      </a-button>
    </div>
    <a-button class="search-button" type="default" shape="round" :size="size" @click="handleIngredients">
      <template #icon>
        <DownloadOutlined />
      </template>
      Search
    </a-button>
  </div>
</template>

<script>
import { router } from '@/router';
import { CloseOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
export default {
  name: 'search-bar',
  data() {
    return {
      value: '',
      isLoading: false,
      newTag: '',
      tags: ['Biber', 'Sogan', 'Domates', 'Yumurta']
    }
  },
  components: {
    CloseOutlined
  },
  methods: {
    addTag() {
      if (!this.newTag) return

      this.tags.push(this.newTag);
      this.newTag = '';
    },
    deleteTag(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    },
    handleIngredients() {
      if (this.tags?.length == 0) {
        message.error('Please enter an ingredient');
        return
      }
      this.isLoading = true;
      router.push({ name: 'recommendation-view', query: { ingredients: this.tags } });
    }
  }
}
</script>
<style lang="scss" scoped>
.search-bar {

  .tag-container {
    max-height: calc(100vh - 350px);
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
    overflow-y: scroll;

    button {
      &:hover {
        background-color: #ff4d4f;
        border-color: #ff4d4f;
      }
    }
  }

  .search-button {
    width: 100%;
    margin-top: 1rem;
  }
}
</style>
