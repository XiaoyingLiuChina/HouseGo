<template>
  <div class="labs-item">
    <!-- 这里可以先展示简介 -->
    <LabsIntroduction />
    <!-- 再展示招新信息 -->
    <LabsRecruitInfo />
    <!-- <button class="btn btn-primary"><RouterLink to="/">加入他们</RouterLink></button> -->
  </div>
</template>
<script>
import LabsIntroduction from './labs-introduction.vue'
import LabsRecruitInfo from './labs-recruit-lab.vue'
export default {
  name: 'LabsItem',
  mounted() {
    document.documentElement.scrollTop = 0
  },
  components: { LabsIntroduction, LabsRecruitInfo }
}
</script>
