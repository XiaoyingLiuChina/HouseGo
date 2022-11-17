<template>
  <div class="user-info">
    <UserMine />
    <div class="card text-center">
      <div class="card-header"><h3>个人基本信息</h3></div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">学号：{{ user.id }}</li>
          <li class="list-group-item">姓名：{{ user.name }}</li>
          <li class="list-group-item">学院：{{ user.collegeid }}</li>
          <li class="list-group-item">班级：{{ user.clas }}</li>
          <li class="list-group-item">
            手机号码：<Form :validation-schema="mySchema" autocomplete="off" v-slot="{ errors }" @submit="updateTelephone" class="phone">
              <Field type="text" name="mobile" id="mobile" class="form-control" v-model="user.telephone" />
              <button class="btn btn-primary" type="submit">修改手机</button>
              <div class="errorShow" v-if="errors.mobile">
                <i class="bi bi-exclamation-triangle" />
                {{ errors.mobile }}
              </div>
            </Form>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import UserMine from './user-mine.vue'
import { Form, Field } from 'vee-validate'
import veeSchema from '@/utils/vee-validate-schema'
import { updatePhone } from '@/api/user'
export default {
  name: 'UserInfo',
  components: { UserMine, Field, Form },
  data() {
    return {
      user: this.$store.state.user.profile,
      mySchema: {
        mobile: veeSchema.mobile
      }
    }
  },
  methods: {
    async updateTelephone(values) {
      console.log('发起修改密码请求')
      const { id, collegeid, type } = this.user
      const telephone = values.mobile
      const data = await updatePhone({ id, collegeid, telephone, type })
      if (data === true) {
        this.$message({ type: 'success', text: '修改成功' })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.user-info {
  margin-top: 10px;
  .list-group-item {
    &:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        margin-left: 10px;
      }
    }
    input {
      display: block;
      padding: 5px 5px;
      width: 200px;
      height: 30px;
      color: #212529;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border-radius: 0.375rem;
    }
  }
  .phone {
    display: flex;
    align-items: center;
    .errorShow {
      color: red;
      font-size: 8px;
      text-align-last: end;
    }
  }
}
</style>
