import request from '@/utils/request'
/**
 * 根据学号获取学生
 * @param {String} id - id
 */
export const getStudentById = (id) => {
  return request(`/student/student/${id}`, 'get')
}
