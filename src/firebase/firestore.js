import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc,
  deleteDoc 
} from 'firebase/firestore'
import { db } from './config'

export const productsCollection = collection(db, 'products')
export const ordersCollection = collection(db, 'orders')
export const usersCollection = collection(db, 'users')

export const addProduct = (data) => addDoc(productsCollection, data)
export const getProducts = () => getDocs(productsCollection)
export const getProduct = (id) => doc(db, 'products', id)
export const updateProduct = (id, data) => updateDoc(doc(db, 'products', id), data)
export const deleteProduct = (id) => deleteDoc(doc(db, 'products', id))

export const addOrder = (data) => addDoc(ordersCollection, data)
export const getOrders = () => getDocs(ordersCollection)
