import { v4 as uuidv4 } from 'uuid'

export default function getUserTempId() {
  // 将userTempId保存在localStorage中，
  // 1- 获取，看是否存在
  let userTempId = localStorage.getItem('userTempId')
  if (userTempId) {
    return userTempId;
  }
  // 不存在就创建一个
  userTempId = uuidv4();
  // 将创建的id 保存在localStorage中
  localStorage.setItem('userTempId', userTempId)
  return userTempId
}
