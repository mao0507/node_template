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

/**
 * 檢查 token 是否失效
 * @param {String} token  
 * @returns 
 */
export const verifyToken = (token:string) => {
  if(token === '') return false
  const secret = process.env.JWT_SIGN_SECRET ? process.env.JWT_SIGN_SECRET : 'maoDidThis'
  let value:Boolean = false;
  jwt.verify(token,secret,(error,decoded) => {
    if(error){
      if(error.name === 'TokenExpireError') {
        value = false;
        console.log('token time put ')
      }
      console.log('error',error)
      value = false;
    }
    else{
      console.log('decoded',decoded)
      value = true;
    }
  })

  return value
} 
