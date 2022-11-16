import request from '@/utils/request'
/**
 * 根据学号获取学生
 * @param { account, password }
 */
export const userLogin = ({ account, password }) => {
  const user = {}
  user.id = account
  user.upassword = password
  // console.log(user)
  const userjson = JSON.stringify(user)
  console.log(userjson)
  return request(`/user/login`, 'post', userjson)
}
