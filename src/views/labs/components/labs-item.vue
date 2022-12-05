<template>
  <div class="labs-item">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">首页</RouterLink></li>
        <li class="breadcrumb-item"><RouterLink to="/labs">实验室</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page" :key="lab" v-if="lab">{{ lab.name }}</li>
      </ol>
    </nav>
    <!-- 这里可以先展示简介 -->
    <LabsIntroduction :lab="lab" :key="lab" v-if="lab" />
    <!-- 再展示招新信息 -->
    <LabsRecruitInfo :recruitlist="recruitlist" :key="recruitlist" v-if="recruitlist" />
    <!-- <button class="btn btn-primary"><RouterLink to="/">加入他们</RouterLink></button> -->
  </div>
</template>
<script>
import LabsIntroduction from './labs-introduction.vue'
import LabsRecruitInfo from './labs-recruit-lab.vue'
import { getLab } from '@/api/labs'
import { getRecruitList } from '@/api/recruit'
export default {
  name: 'LabsItem',
  components: { LabsIntroduction, LabsRecruitInfo },
  mounted() {
    document.documentElement.scrollTop = 0
    this.getMes()
  },
  data() {
    return {
      lab: null,
      recruitlist: null
    }
  },
  methods: {
    async getMes() {
      const labmes = await getLab(this.$route.params.id)
      this.lab = labmes[0]
      const recruitmes = await getRecruitList(this.$route.params.id)
      this.recruitlist = recruitmes
    }
  }
}
</script>
<style lang="less" scoped>
nav {
  margin: 10px 0;
  font-size: 18px;
}
</style>
