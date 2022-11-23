import store from '@/store/index'
import request from '@/utils/request'
/**
 * 查询实验室
 * @param
 */
export const getLab = (id) => {
  return request('/laboratory', 'get', { id })
}

/**
 * 查询实验室
 * @param
 */
export const getLabList = (search) => {
  return request('/laboratory/search', 'get', search)
}
/**
 * 根据老师查询实验室
 * @param
 */
export const getLabByTeacher = (teacherid) => {
  return request('/laboratory/byteacher', 'get', { teacherid })
}

/**
 * 根据学生获取实验室
 * @param
 */
export const getLabByStudent = (studentid) => {
  return request('/join/bystudent', 'get', { studentid })
}
/**
 * 添加实验室
 * @param
 */
export const addLab = (data) => {
  const { id } = store.state.user.profile
  const teacherid = id
  Object.assign(data, { teacherid })
  const datajson = JSON.stringify(data)
  return request('/laboratory', 'post', datajson)
}
/**
 * 编辑实验室
 * @param
 */
export const editLab = (data) => {
  const datajson = JSON.stringify(data)
  return request('/laboratory', 'put', datajson)
}
/**
 * 删除实验室
 * @param
 */
export const deleteLab = (id) => {
  return request(`/laboratory/${id}`, 'delete')
}
/**
 * 退出实验室
 * @param
 */
export const exitLab = () => {
  const { lab, id } = store.state.user.profile
  return request(`/join/${lab.id}/${id}`, 'delete')
}
