import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged 
} from 'firebase/auth'
import { auth } from './config'

const googleProvider = new GoogleAuthProvider()

export const registerWithEmail = (email, password) => 
  createUserWithEmailAndPassword(auth, email, password)

export const loginWithEmail = (email, password) => 
  signInWithEmailAndPassword(auth, email, password)

export const loginWithGoogle = () => 
  signInWithPopup(auth, googleProvider)

export const logout = () => signOut(auth)

export const onAuthChange = (callback) => 
  onAuthStateChanged(auth, callback)
