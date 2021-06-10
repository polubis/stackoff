import { User } from "../models/UsersModels"
import { collection } from "./FirestoreService"

export const loadUser = (id: string): Promise<User> =>
  collection("users")
    .doc(id)
    .get()
    .then(
      doc =>
        ({
          id: doc.id,
          ...doc.data(),
        } as User)
    )
