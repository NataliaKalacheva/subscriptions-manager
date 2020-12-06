import firebase from '@/plugins/firebase'

export const firebaseLogin = async (email, password) => {
  try {
    const data = await firebase.auth().signInWithEmailAndPassword(email, password)
    return data
  } catch (err) {
    return Promise.reject(err)
  }
}

export const firebaseSignUp = async (email, password) => {
  try {
    const data = await firebase.auth().createUserWithEmailAndPassword(email, password)
    return data
  } catch (err) {
    return Promise.reject(err)
  }
}
