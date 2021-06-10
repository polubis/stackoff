import { Technology } from "../models/TechnologiesModels"
import { collection } from "./FirestoreService"

export const loadTechnologies = (): Promise<Technology[]> =>
  collection("technologies")
    .get()
    .then(
      response =>
        response.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Technology[]
    )
