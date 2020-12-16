function setAuthToken(config) {
  const customConfig = { ...config }
  // const token = localStorage.getItem(process.env.VUE_APP_LS_TOKEN_KEY)

  return customConfig
}

function getData(res) {
  return res.data
}

export default function(axios) {
  axios.interceptors.request.use(setAuthToken)
  axios.interceptors.response.use(getData)
}
