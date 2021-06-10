export interface UserContact {
  email: string
  phone: string
}

export interface UserArticle {
  id: string
  date: number
  description: string
  rate: number
  votes: number
  title: string
}

export interface UserEducation {
  from: number
  path: string
  school: string
  title: string
  to: number
}

export interface UserLanguage {
  languageId: string
  languageLevelId: string
}

export interface UserProject {
  name: string
  description: string
  from: number
  area: string
  to: number
  technologiesIds: string[]
}

export interface UserReferences {
  githubUrl: string
  linkedInUrl: string
}

export interface UserWork {
  company: string
  from: number
  to: number
  roles: string[]
}

export interface User {
  id: string
  firstName: string
  lastName: string
  contact: UserContact
  description: string
  articles: UserArticle[]
  avatarUrl: string
  thumbnailUrl: string
  education: UserEducation[]
  languages: UserLanguage[]
  projects: UserProject[]
  roles: string[]
  references: UserReferences
  technologiesIds: string[]
  work: UserWork[]
}
