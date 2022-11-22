import store from '@/store/index'
import request from '@/utils/request'
/**
 * 获取分享列表
 * @param
 */
export const getShareList = () => {
  const { id } = store.state.user.profile
  return request('/share', 'get', { id })
}
/**
 * 获取分享信息
 * @param
 */
export const getShare = (id) => {
  return request(`/share/${id}`, 'get')
}
/**
 * 发布分享
 * @param
 */
export const putShare = (data) => {
  const issuerid = store.state.user.profile.id
  const like = 0
  const putData = {}
  Object.assign(putData, { issuerid, like }, data)
  return request('/share', 'post', putData)
}
/**
 * 删除分享
 * @param
 */
export const deleteShare = (id) => {
  return request(`/share/${id}`, 'delete')
}
/**
 * 点赞分享
 * @param
 */
export const hitLikeShare = (id) => {
  return request(`/share/addlike/${id}`, 'post')
}
