import firebase from '@/plugins/firebase'

export const firebaseLogin = async (email, password) => {
  try {
    const data = await firebase.auth().signInWithEmailAndPassword(email, password)
    return data
  } catch (err) {
    throw new Error(err)
  }
}

export const firebaseSignUp = async (email, password) => {
  try {
    const data = await firebase.auth().createUserWithEmailAndPassword(email, password)
    return data
  } catch (err) {
    throw new Error(err)
  }
}

export const getUserIdToken = async () => {
  try {
    const data = await firebase.auth().currentUser.getIdToken()
    return data
  } catch (err) {
    throw new Error(err)
  }
}

export const firebaseSignOut = async () => {
  try {
    const data = await firebase.auth().signOut()
    return data
  } catch (err) {
    throw new Error(err)
  }
}

export const firebaseResetPassword = async email => {
  try {
    const data = await firebase.auth().sendPasswordResetEmail(email)
    return data
  } catch (err) {
    throw new Error(err)
  }
}
