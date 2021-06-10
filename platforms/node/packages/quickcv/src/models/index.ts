export interface Education {
  from: Date
  to: Date
  school: string
  title: string
  path: string
}

export interface Work {
  from: Date
  to: Date
  company: string
  role: string
}

export interface User {
  avatar: string
  thumbnail: string
  firstName: string
  lastName: string
  roles: string[]
  description: string
  linkedinUrl: string
  githubUrl: string
  languages: string[]
  education: Education[]
  work: Work[]
}
