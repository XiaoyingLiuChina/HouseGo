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
//  * 查看用户类型
//  * @param
//  */
// export const getUserType = (id) => {
//   return request(`user/${id}`, 'post')
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
/**
 * 修改密码
 * @param
 */
export const updatePassword = (data) => {
  const jsondata = JSON.stringify(data)
  return request('user/resetpassword', 'post', jsondata)
}

// export const updatePassword = ({ id, type, password }) => {
//   const data = {}
//   Object.assign(data, { id, password })
//   console.log(data)
//   const jsondata = JSON.stringify(data)
//   console.log(jsondata)
//   if (type === 0) {
//     return request('user/updateteacher', 'post', jsondata)
//   } else {
//     return request('user/updatestudent', 'post', jsondata)
//   }
// }

/**
 * 老师管理获取实验室学生
 * @param
 */
export const getLabStudentList = () => {
  const user = store.state.user.profile
  const teacherid = user.id
  return request('/join/byteacher', 'get', { teacherid })
}
