<script>
import { router } from '@/router';
import { useDinnerStore } from '@/store/dinner.store';
import { CloseOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import { mapActions, mapState } from 'pinia';

export default {
  name: 'search-bar',
  data() {
    return {
      isLoading: false,
      newTag: '',
      tags: null
    }
  },
  computed: {
    ...mapState(useDinnerStore, ['ingredients'])
  },
  created() {
    this.tags = this.ingredients;
  },
  components: {
    CloseOutlined
  },
  watch: {
    tags: {
      handler: function (newValue) {
        this.setIngredients(newValue)
      },
      deep: true
    }
  },
  methods: {
    ...mapActions(useDinnerStore, ['setIngredients']),
    addTag() {
      if (!this.newTag) return

      this.tags.push(this.newTag.trim());
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
      // this.setIngredients(this.tags)
      router.push({ name: 'recommendation-view' });
    }
  }
}
</script>

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
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

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
