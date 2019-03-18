<template>
  <article 
    :id="'post-'+postId" 
    class="preview preview-post " 
  >

    <div 
      ref="wrapper" 
      :class="{'slide-up':!isMounted}" 
      class="preview-wrapper ">
      <a 
        :href="'/pages/post/main?id='+postDetail.id" 
        class="preview-image">

        <img 
          :src="postDetail.featured_image&&postDetail.featured_image.url||require('@/assets/images/default-fallback-image.png')" 
          :srcset="postDetail.featured_image_srcset" 
          :width="postDetail.featured_image&&postDetail.featured_image.width" 
          :height="postDetail.featured_image&&postDetail.featured_image.height" 
          class="wp-post-image" 
          alt="" 
          sizes="(max-width: 800px) 100vw, 800px"
          mode="widthFix"
        >				
      </a>
		
      <div class="preview-inner">
        <h2 class="preview-title"><a :href="'/pages/post/main?id='+postDetail.id" >{{ postDetail.title.rendered }}</a></h2>
        <div class="post-meta-wrapper post-meta-preview">
          <ul class="post-meta">
            <li class="post-date">
              <a 
                :href="'/pages/post/main?id='+postDetail.id" 
                class="meta-wrapper" 
                title="test">
                <span class="screen-reader-text">Post date</span>
                <div class="meta-icon"><i class="iconfont icon-calendar"/></div>
                <span class="meta-content">{{ postDetail.date }}</span>
              </a>
            </li>
          </ul><!-- .post-meta -->
        </div><!-- .post-meta-wrapper -->			
      </div><!-- .preview-inner -->
    </div><!-- .preview-wrapper -->


  </article>
</template>
<script>
import { formatPostDetail } from '@/utils/post'
export default {
  props: {
    postId: { type: Number, default: 0 },
    content: { type: String, default: '' },
    detail: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      postDetail: {},
      isMounted: false
    }
  },
  created() {
    this.postDetail = formatPostDetail(this.detail)
  },
  mounted() {
    setTimeout(() => {
      this.isMounted = true
    }, 100)
  },
  methods: {}
}
</script>


<style lang="scss" scoped >
.preview {
  margin-bottom: 70rpx;
}
.preview-wrapper {
  background: #fff;
  border-radius: 25rpx;
  box-shadow: 0 10rpx 30rpx 0 rgba(5, 10, 15, 0.05);
  overflow: hidden;
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  &.slide-up {
    opacity: 0;
    transform: translateY(50px);
  }
}

.preview-inner {
  padding: 48rpx;
}

.wp-post-image {
  width: 100%;
  height: auto;
}
.preview-title {
  font-size: 40rpx;
  font-weight: 600;
  color: #4b555f;
  line-height: 1.3;
  word-break: break-word;
}

.post-meta {
  color: #68717b;
  display: flex;
  flex-wrap: wrap;
  font-size: 24rpx;
  font-weight: 500;
  list-style: none;
  margin: 16rpx 0 0 -32rpx;
  li {
    font-weight: inherit;
    margin: 16rpx 0 0 32rpx;
  }
  .meta-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .meta-icon {
    margin-right: 14rpx;
    .iconfont {
      font-size: 34rpx;
    }
  }
}
</style>
