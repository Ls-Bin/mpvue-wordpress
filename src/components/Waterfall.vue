<!-- 瀑布流组件
     只负责及时垂直高度，宽度由css自适应
 -->
<template>
  <div 
    ref="container" 
    :style="{height:height+'px'}"
    class="waterfall-wrap" >
    <slot/>
  </div>  
</template>
<script>
import { bounce } from '@/utils/index'
export default {
  porps: {
    length: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      itemWidth: 0,
      columnData: [],
      columnNum: 1, // 列数
      height: 0
    }
  },
  watch: {},
  mounted() {
    // 初始分一个防抖函数
    let dobounce = bounce(this.render, 300)
    // 窗口改变更新
    window.onresize = function() {
      dobounce()
    }

    this.render()
  },
  methods: {
    render() {
      // 计算列数
      this.columnNum = Math.round(
        this.$refs.container.offsetWidth /
          this.$refs.container.childNodes[0].offsetWidth
      )

      this.columnData = []
      this.$nextTick(() => {
        // 对所有子元素计算绝对位置
        this.$refs.container.childNodes.forEach((item, index) => {
          this.setElementStyle(item, item.offsetHeight, index)
        })

        this.height = Math.max.apply({}, this.columnData) + 50 // 50是动画高度
      })
    },
    setElementStyle(element, height, index) {
      // 第一行坐标计算
      if (index < this.columnNum) {
        element.style.left = `${index * (100 / this.columnNum)}%`
        element.style.top = 0
        // 统计每一列总高度
        this.columnData[index] = this.columnData[index]
          ? this.columnData[index] + height
          : height
      } else {
        // 第二行以上
        // 找出最小高度的列
        let minIndexHeight = Math.min.apply({}, this.columnData)
        let columnIndex = this.columnData.indexOf(minIndexHeight)
        // 设置高度
        element.style.left = `${columnIndex * (100 / this.columnNum)}%`
        element.style.top = `${minIndexHeight}px`
        // 缓存每列高度
        this.columnData[columnIndex] += height
      }
      element.style.position = 'absolute'
    }
  }
}
</script>
<style lang="scss" >
.waterfall-wrap {
  position: relative;
}
</style>
