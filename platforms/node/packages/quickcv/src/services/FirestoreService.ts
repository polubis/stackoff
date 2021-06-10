import firebase from "gatsby-plugin-firebase"

const db = firebase.firestore()

export const collection = (name: string) => db.collection(name)
