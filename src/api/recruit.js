import store from '@/store/index'
import request from '@/utils/request'
/**
 * 发布招新信息
 * @param
 */

export const publishRecruit = (data) => {
  const { id } = store.state.user.profile
  const teacherid = id
  Object.assign(data, { teacherid })
  return request('/recruit', 'post', data)
}
/**
 * 获取招新信息
 * @param
 */

export const getRecruit = (id) => {
  return request('recruit', 'get', { id })
}
/**
 * 实验室获取招新信息列表
 * @param
 */

export const getRecruitList = (laboratoryid) => {
  return request('/recruit/bylaboratory', 'get', { laboratoryid })
}
/**
 * 根据老师获取招新信息列表
 * @param
 */

export const getRecruitByTeacher = () => {
  const { id } = store.state.user.profile
  const teacherid = id
  return request('/recruit/byteacher', 'get', { teacherid })
}
/**
 * 删除招新信息
 * @param
 */

export const deleteRecruit = (id) => {
  return request(`/recruit/${id}`, 'delete')
}

/**
 * 修改招新信息
 * @param
 */
export const editRecruit = (data) => {
  const datajson = JSON.stringify(data)
  return request('/recruit', 'put', datajson)
}
