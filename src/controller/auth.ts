import { jwtToken } from '../model/token'
/**
 * 宣告回傳 模型，帶入指定欄位資料即可輸出物件回去
 * @param { Boolean } success  判斷是否請求成功
 * @param { Number } status 回傳 http 狀態碼
 * @param { String } msg 回傳訊息 
 * @param { any } data 回傳請求資料 
 * @returns { String } 將物件轉換為 JSON，並回傳
 */
const AuthModel = (success:Boolean,status:Number,msg:string,data?:any) => {
  const obj = {
    success,
    status,
    response:{
      msg,
      data
    }
  }
  return JSON.stringify(obj);
}

/**
 * 宣告 登入相關 function
 * @function login 登入
 * @function logout 登出
 * @function checkToken 檢查 token
 * @returns login, logout, checkToken
 */
export default function Auth() {
  
  /**
   * 登入
   * @param { Object } loginInfo 
   * @returns { String }
   */
  const login = (loginInfo:any) => {
    if(!loginInfo) return AuthModel(true,200,'缺少對應資料')
    else console.log('login work')
    const { account , password } = loginInfo;
    console.log(account , password)
    const token = jwtToken('9527','mao')
    const response ={
      token,
      userName:'mao',
      userId:'9527'
    }

    return AuthModel(true,200,'login Work',response)
  }
  
  /**
   * 登出
   */
  const logout = () => {
    console.log('logout')
  }

  /**
   * 檢查 Token 是否失效
   * @param { Object } accountInfo 帳號資訊
   */
  const checkToken = (accountInfo:any) => {
    console.log(accountInfo)
    console.log('checkToken')
  }

  return {
    login,
    logout,
    checkToken
  }
}
