import store from '@/store/index'
import request from '@/utils/request'
/**
 * 根据学号 密码 类型 获取登录信息
 * @param { id, password, type }
 */
export const userLogin = ({ id, password, type }) => {
  const userjson = JSON.stringify({ id, password, type })
  return request(`/user/login`, 'post', userjson)
}
/**
 * 根据工号获取老师
 * @param { id, password, type }
 */
export const getTeacher = (id) => {
  return request(`user/getteacher/${id}`, 'get')
}
/**
 * 根据学号获取学生
 * @param id
 */
export const getStudent = (id) => {
  return request(`user/getstudent/${id}`, 'get')
}

/**
 * 根据id获取学院
 * @param id
 */
export const getCollege = (id) => {
  return request('/college', 'get', { id })
}
/**
 * 修改用户的各类信息
 * @param { id, collegeid,... }
 */
export const updateUser = (needUpdate) => {
  const user = store.state.user.profile
  if (user.type === '0') {
    const { id, collegeid, laboratoryid } = user
    Object.assign(needUpdate, { id, collegeid, laboratoryid })
    const jsondata = JSON.stringify(needUpdate)
    return request('user/updateteacher', 'post', jsondata)
  } else {
    const { id, collegeid } = user
    Object.assign(needUpdate, { id, collegeid })
    const jsondata = JSON.stringify(needUpdate)
    return request('user/updatestudent', 'post', jsondata)
  }
}
// /**
//  * 修改联系方式
//  * @param { id, collegeid,... }
//  */
// export const updatePhone = ({ id, collegeid, telephone, type }) => {
//   const jsondata = JSON.stringify({ id, collegeid, telephone })
//   if (type === '0') return request('user/updateteacher', 'post', jsondata)
//   else return request('user/updatestudent', 'post', jsondata)
// }

// /**
//  * 修改头像
//  * @param { id, collegeid,... }
//  */
// export const updateAvatar = ({ id, collegeid, image, type }) => {
//   const jsondata = JSON.stringify({ id, collegeid, image })
//   if (type === '0') return request('user/updateteacher', 'post', jsondata)
//   else return request('user/updatestudent', 'post', jsondata)
// }
// /**
//  * 修改密码
//  * @param { id, collegeid,... }
//  */
// export const updatePassword = ({ id, collegeid, password, type }) => {
//   const jsondata = JSON.stringify({ id, collegeid, password })
//   if (type === '0') return request('user/updateteacher', 'post', jsondata)
//   else return request('user/updatestudent', 'post', jsondata)
// }
