export default (to, from, next) => {
  const isLogin = Boolean(localStorage.getItem(process.env.VUE_APP_LS_TOKEN_KEY))
  const availablePathes = 'Login, SignUp, ResetPassword'

  if (availablePathes.includes(to.name) && !isLogin) {
    next()
    return
  }

  if (!isLogin) {
    next({ name: 'Login' })
    return
  }

  next()
}
