export interface User {
  firstName: string
  lastName: string
  roles: string[]
  description: string
}

export interface Language {
  name: string
  level: string
}

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
  roles: string[]
}

export interface Article {
  date: Date
  rate: number
  votes: number
  title: string
  description: string
}

export interface Technology {
  name: string
  icon: string
}

export interface Project {
  from: Date
  to: Date
  name: string
  area: string
  description: string
  technologies: Technology[]
}
