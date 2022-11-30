// import { userAccountCheck } from '@/api/user'
import store from '@/store/index'
// 给vee-validate提供校验规则函数
export default {
  // 用户名校验
  id(value) {
    if (!value) return '请输入你的工号'
    // 规则：字母开头6-20字符之间
    if (!/^(\d){10}$/.test(value)) return '请输入正确的工号'
    return true
  },
  // 用户校验且校验唯一性
  //   async accountApi (value) {
  //     if (!value) return '请输入用户名'
  //     if (!/^[a-zA-Z]\w{5,19}$/.test(value)) return '字母开头且6-20个字符'
  //     // 服务器端校验
  //     const data = await userAccountCheck(value)
  //     if (data.result.valid) return '用户名已存在'
  //     return true
  //   },
  // 密码校验
  password(value) {
    if (!value) return '请输入密码'
    // 规则：密码格式6-24个字符
    if (!/^\w{6,24}$/.test(value)) return '密码6-24个字符'
    return true
  },
  type(value) {
    if (!value) return '请选择用户类型'
    return true
  },
  oldPassword(value) {
    if (!value) return '请输入旧密码'
    if (!/^\w{6,24}$/.test(value)) return '密码6-24个字符'
    const rightPassword = store.state.user.profile.password
    if (value !== rightPassword) return '请输入正确的旧密码'
    return true
  },
  newPassword(value) {
    if (!value) return '请输入密码'
    // 规则：密码格式6-24个字符
    if (!/^\w{6,24}$/.test(value)) return '密码6-24个字符'
    const rightPassword = store.state.user.profile.password
    if (value === rightPassword) return '请不要与旧密码相同'
    return true
  },
  // 密码校验
  rePassword(value, { form }) {
    if (!value) return '请重新输入新密码'
    if (!/^\w{6,24}$/.test(value)) return '密码6-24个字符'
    // form表单数据对象
    if (value !== form.newPassword) return '需要和新密码保持一致'
    return true
  },
  mobile(value) {
    if (!value) return '请输入手机号'
    // 规则：1开头 3-9 之间  9个数字
    if (!/^\d{11}$/.test(value)) return '手机号格式不对'
    // if (!/^1[3-9]\d{9}$/.test(value)) return '手机号格式不对'
    return true
  },

  isAgree(value) {
    if (!value) return '请勾选登录协议'
    return true
  }
}
