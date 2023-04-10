import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

// 讀取 env
config()

/**
 * 建立 Token
 * @param {String} userId
 * @param {String} userName
 * @returns
 */
export const jwtToken = (userId:string, userName:String) => {
  const exp = Math.floor(Date.now() / 1000) + 60 * 15
  if (userId && userName) {
    const payload = { userId, userName }
    const token = jwt.sign(
      {payload,exp},
      process.env.JWT_SIGN_SECRET ? process.env.JWT_SIGN_SECRET : 'maoDidThis'
    )
    return token
  } else {
    return ''
  }
}
