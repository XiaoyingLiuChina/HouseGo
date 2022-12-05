<template>
  <!-- 筛选区 -->
  <div class="recruit-filter container">
    <div class="item" v-for="(item, index) in choicelist" :key="item.id">
      <div class="head">{{ item.name }}</div>
      <div class="body">
        <!-- <a href="javascript:;">全部</a> -->
        <a href="javascript:;" :class="{ active: myChoice[index].value.indexOf(s) > -1 }" v-for="s in item.value" :key="s" @click="hitBiao(item.name, s)">{{ s }}</a>
      </div>
    </div>
    <button class="btn btn-primary" @click="cleanChoice">重置</button>
    <button class="btn btn-primary" @click="searchMyChoice">搜索</button>
  </div>
</template>
<script>
export default {
  name: 'RecruitFilter',
  setup() {},
  data() {
    return {
      choicelist: [
        { id: '1', name: '招新对象', value: ['大一', '大二', '大三', '大四', '研一', '研二', '研三'] },
        { id: '2', name: '招新方向', value: ['可视化', '数据库', '测试', 'Android', '前端', '后端', '大数据', '人工智能'] },
        { id: '3', name: '实验室规模', value: ['0~20', '20~40', '40~60', '60+'] }
      ],
      myChoice: [
        { id: '1', name: '招新对象', value: [] },
        { id: '2', name: '招新方向', value: [] },
        { id: '3', name: '实验室规模', value: [] }
      ]
    }
  },
  props: {
    list: {
      type: Array
    }
  },
  emits: ['updatelist'],
  mounted() {},
  methods: {
    hitBiao(name, s) {
      // console.log(name, s)
      this.myChoice.forEach((item) => {
        if (item.name === name) {
          if (item.value.indexOf(s) === -1) {
            item.value.push(s)
          } else {
            item.value.splice(item.value.indexOf(s), 1)
          }
        }
      })
    },

    cleanChoice() {
      this.myChoice = [
        { id: '1', name: '招新对象', value: [] },
        { id: '2', name: '招新方向', value: [] },
        { id: '3', name: '实验室规模', value: [] }
      ]
      this.$emit('updatelist', this.list)
    },
    searchMyChoice() {
      // this.myChoice.forEach((item)=>{
      //   if(item.value.length<=0)
      // })
      const newdata = this.list.filter((item) => {
        // if (this.myChoice[0].value.indexOf(item.recruit.people) > -1) return true
        // else if (this.myChoice[1].value.indexOf(item.recruit.direction) > -1) return true
        // else if (this.myChoice[2].value.indexOf(item.laboratory.scale) > -1) return true
        // else return false
        const flag1 = this.myChoice[0].value.indexOf(item.recruit.people) > -1 || this.myChoice[0].value.length <= 0
        const flag2 = this.myChoice[1].value.indexOf(item.recruit.direction) > -1 || this.myChoice[1].value.length <= 0
        const flag3 = this.myChoice[2].value.indexOf(item.laboratory.scale) > -1 || this.myChoice[2].value.length <= 0

        if (flag1 && flag2 && flag3) {
          return true
        }
      })
      this.$emit('updatelist', newdata)
    }
  }
}
</script>
<style scoped lang="less">
// 筛选区
.recruit-filter {
  background: @appColor;
  padding: 15px;
  // display: flex;
  // align-items: center;
  .item {
    display: flex;
    // flex-direction: column;
    line-height: 40px;
    .head {
      width: 100px;
      color: #999;
    }
    .body {
      flex: 1;
      a {
        margin-right: 36px;
        transition: all 0.3s;
        display: inline-block;
        &.active,
        &:hover {
          color: @hoverColor;
        }
      }
    }
  }
}
button {
  float: right;
  margin-right: 15px;
  // height: 50%;
}
</style>
