<template>
  <section 
    v-if="postDetail" 
    class="site-wrapper" >
    <article class="single-container bg-color  post ">	
      <div class="featured-media">

        <img 
          :src="(postDetail.featured_image&&postDetail.featured_image.url)||require('@/assets/images/default-fallback-image.png')" 
          :srcset="postDetail.featured_image_srcset" 
     
          :width="postDetail.featured_image&&postDetail.featured_image.width" 
          :height="postDetail.featured_image&&postDetail.featured_image.height" 
          class="post-image" 
          alt="" 
          sizes="(max-width: 1639px) 100vw, 1639px"
          mode="widthFix"
        >
      </div><!-- .featured-media -->

      <div class="post-inner section-inner">
        <header class="post-header">
          <h1 class="post-title">{{ postDetail.title && postDetail.title.rendered }}</h1>
        </header><!-- .post-header -->

        <!-- <div 
          class="entry-content" 
          v-html="postDetail.content&&postDetail.content.rendered"/> -->
        <rich-text 
          :nodes="postDetail.content&&postDetail.content.rendered" 
          type="node"/>
        <div class="post-meta-wrapper post-meta-single">
          <ul class="post-meta stack-mobile">
            <li class="post-date">
              <a 
                :title="postDetail.title && postDetail.title.rendered" 
                class="meta-wrapper" 
              >
                <span class="screen-reader-text">Post date</span>
                <div class="meta-icon">
                  <i class="iconfont icon-calendar"/>
                </div>
                <span class="meta-content">{{ postDetail.date }}</span>
              </a>
            </li>
          </ul><!-- .post-meta -->
        </div><!-- .post-meta-wrapper -->
      </div><!-- .post-inner -->

    </article>
  </section>
</template>

<script>
import { getPostDetail } from '@/api'
import { formatPostDetail } from '@/utils/post'
export default {
  components: {},
  data() {
    return {
      postDetail: {}
    }
  },
  mounted() {
    console.log(this.$root.$mp.query)
    let params = this.$root.$mp.query

    getPostDetail(params.id)
      .then(res => {
        this.postDetail = formatPostDetail(res.data)
        return res.data
      })
      .catch(e => {
        error({ statusCode: 404, message: 'Post not found' + e })
      })
  }
}
</script>
<style lang="scss" >
.site-wrapper {
  margin-bottom: 200rpx;
}
.single-container {
  // @include min-screen(1000px) {
  //   border-radius: 16rpx;
  //   box-shadow: 0 6rpx 36rpx rgba(5, 10, 15, 0.07);
  //   overflow: hidden;
  // }
}
.post-image {
  width: 100%;
  height: auto;
}

.post-inner {
  max-width: 1040rpx;
  margin: 0 auto;
  padding-top: 8rpx;
  padding-bottom: 16rpx;
}

.post-header {
  margin-bottom: 4rpx;

  h1 {
    font-size: 36rpx;
    font-weight: 600;
    line-height: 1.3;
    word-break: break-word;
  }
}
.post-meta-single {
  margin-top: 8rpx;
}

// meta--------------------------
.meta-content {
  line-height: 42rpx;
}
.meta-wrapper {
  display: flex;
  flex-wrap: wrap;
  font-size: 24rpx;
  .meta-icon {
    margin-right: 14rpx;
    .iconfont {
      font-size: 34rpx;
    }
  }
}

rich-text {
  p {
    font-size: 26rpx;
    color: red;
  }
}
</style>
