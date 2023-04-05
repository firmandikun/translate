import localforage from 'localforage'
import Cookies from 'js-cookie'

const getToken = async () => {
  // return localforage.getItem('access_token').then((value) => {
  //   return value
  // }).catch(() => {
  //   return false
  // })
  const res = localforage.getItem('access_token')
  const [token] = await Promise.all([res])
  return token
}

const getOtpToken = () => {
  // rpcn is RupaCoin means a token for otp request purposes
  return Cookies.get('rpcn')
}

export default { getToken, getOtpToken }
