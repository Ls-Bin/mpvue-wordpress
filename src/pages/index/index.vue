<template>
  <div class="section-inner">
    <div 
      id="posts" 
      ref="posts" 
      class="posts ">
      <PreviewPost 
        v-for="(item,index) in postList" 
        :key="index"
        :post-id="item.id"
        :content="item.content.rendered"
        :detail="item"
      />
    </div><!-- .posts -->

  </div><!-- .section-inner -->
</template>

<script>
import PreviewPost from '@/components/Preview-post.vue'
import { getPostList } from '@/api'

export default {
  components: {
    PreviewPost
  },
  data() {
    return {
      postList: []
    }
  },
  computed: {},
  mounted() {
    getPostList().then(res => {
      this.postList = res.data
      console.log(this.postList)
      return res.data
    })
  }
}
</script>

<style lang="scss" >
page {
  background-color: #f6f7f8;
}
#posts {
  padding: 70rpx 0;
}
</style>
