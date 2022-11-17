<template>
  <div class="user-password">
    <div class="card">
      <div class="card-header"><h3>修改密码</h3></div>
      <div class="card-body">
        <Form :validation-schema="mySchema" autocomplete="off" v-slot="{ errors }" @submit="updatePw">
          <div>
            <label for="oldpwd"><h5>旧密码：</h5></label>
            <Field type="password" id="oldPassword" name="oldPassword" placeholder="请输入旧密码" class="form-control" />
            <div class="errorShow" v-if="errors.oldPassword">
              <i class="bi bi-exclamation-triangle" />
              {{ errors.oldPassword }}
            </div>
          </div>

          <div>
            <label for="newpwd"><h5>新密码:</h5></label>
            <Field type="password" id="newPassword" name="newPassword" placeholder="请输入新密码" class="form-control" />
            <div class="errorShow" v-if="errors.newPassword">
              <i class="bi bi-exclamation-triangle" />
              {{ errors.newPassword }}
            </div>
          </div>
          <div>
            <label for="new2pwd"><h5>确认密码:</h5></label>
            <Field type="password" id="rePassword" name="rePassword" placeholder="再次输入新密码" class="form-control" />
            <div class="errorShow" v-if="errors.rePassword">
              <i class="bi bi-exclamation-triangle" />
              {{ errors.rePassword }}
            </div>
          </div>
          <button class="btn btn-primary" type="reset" id="btn-reset">重置表单</button>
          <button class="btn btn-primary" type="submit">确认修改</button>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field } from 'vee-validate'
import veeSchema from '@/utils/vee-validate-schema'
import { updatePassword } from '@/api/user'
export default {
  name: 'UserPassword',
  components: { Form, Field },
  data() {
    return {
      mySchema: {
        oldPassword: veeSchema.oldPassword,
        newPassword: veeSchema.newPassword,
        rePassword: veeSchema.rePassword
      }
    }
  },
  methods: {
    async updatePw(values) {
      console.log(values)
      const { id, collegeid, type } = this.$store.state.user.profile
      const password = values.rePassword
      const data = await updatePassword({ id, collegeid, password, type })
      if (data === true) {
        this.$store.commit('user/updatePassword', password)
        // 重置表单
        const reset = document.getElementById('btn-reset')
        reset.click()
        this.$message({ type: 'success', text: '修改密码成功' })
      } else {
        this.$message({ type: 'error', text: '修改密码失败' })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.user-password {
  margin-top: 20px;
  input {
    display: block;
    padding: 5px 5px;
    width: 250px;
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

  .card-body {
    form > div {
      display: flex;
      margin-top: 20px;
      justify-content: flex-start;
      align-items: center;
      & > label {
        width: 80px;
      }
      .errorShow {
        margin-left: 15px;
      }
    }
    button {
      margin-top: 20px;
      margin-right: 15px;
    }
  }
}
</style>
