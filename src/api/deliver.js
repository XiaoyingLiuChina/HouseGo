import store from '@/store/index'
import request from '@/utils/request'
/**
 * 根据学号 招新信息id
 * @param
 */
export const studentDeliver = (id) => {
  const studentid = store.state.user.profile.id
  return request(`/deliver/${studentid}/${id}`, 'post')
}
/**
 * 根据学号 密码 类型 获取投递信息
 * @param\
 */
export const getStudentDeliver = () => {
  const studentid = store.state.user.profile.id
  return request(`/deliver/bystudent`, 'get', { studentid })
}
/**
 * 根据学号 密码 类型 获取投递信息
 * @param\
 */
export const getDeliverByTeacher = () => {
  const teacherid = store.state.user.profile.id
  return request(`/deliver/byteacher`, 'get', { teacherid })
}
/**
 * 根据学号 密码 类型 撤销投递信息
 * @param
 */
export const backDeliver = (id) => {
  return request(`/deliver/recycle/${id}`, 'post')
}
/**
 * 根据学号 密码 类型 删除投递信息
 * @param
 */
export const deleteDeliver = (id) => {
  return request(`/deliver/${id}`, 'delete')
}
/**
 * 学生拒绝加入，老师不同意
 * @param
 */
export const refuseDeliver = (id) => {
  return request(`/deliver/${id}/no`, 'put')
}
/**
 * 学生同意加入，老师同意
 * @param
 */
export const agreeDeliver = (id) => {
  return request(`/deliver/${id}/yes`, 'put')
}
