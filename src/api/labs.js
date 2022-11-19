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
 * 根据老师查询实验室
 * @param
 */
export const getLabByTeacher = (id) => {
  const teacherid = id
  return request('/laboratory/byteacher', 'get', { teacherid })
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
