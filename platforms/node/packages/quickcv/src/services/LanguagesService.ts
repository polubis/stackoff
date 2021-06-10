import { Language, LanguageLevel } from "../models/LanguagesModels"
import { collection } from "./FirestoreService"

export const loadLanguages = (): Promise<Language[]> =>
  collection("languages")
    .get()
    .then(
      ({ docs }) =>
        docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Language[]
    )

export const loadLanguagesLevels = (): Promise<LanguageLevel[]> =>
  collection("languagesLevels")
    .get()
    .then(
      ({ docs }) =>
        docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as LanguageLevel[]
    )
