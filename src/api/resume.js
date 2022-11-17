import store from '@/store/index'
import request from '@/utils/request'
/**
 * 查询简历
 * @param
 */
export const getResume = (id) => {
  const studentid = id
  return request('/resume', 'get', { studentid })
}
/**
 * 添加简历
 * @param
 */
export const addResume = (data) => {
  const { id } = store.state.user.profile
  const studentid = id
  Object.assign(data, { studentid })
  const datajson = JSON.stringify(data)
  console.log(data)
  return request('/resume', 'post', datajson)
}
export const editResume = (data) => {
  const datajson = JSON.stringify(data)
  return request('/resume', 'put', datajson)
}
