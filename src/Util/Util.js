export const setLocalStorage = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value))
  }
  
  export const getLocalStorage = (key) => {
    return JSON.parse(sessionStorage.getItem(key))
  }
  
  export const deleteLocalStorage = (key) => {
    sessionStorage.removeItem(key)
  }
  
  export const clearLocalStorage = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userInfo')
  }
  
  export const emailValidate = (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
    return pattern.test(value) === false
  }
  
  
export const numberValidate = (value) => {
  const pattern = /^[0-9]*$/

  return pattern.test(value) === false
}
  
  export const urlValidate = (value) => {
    const pattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g
    return pattern.test(value) === false
  }