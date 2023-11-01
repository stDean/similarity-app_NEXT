/* eslint-disable no-unused-vars */
import type { Session, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

type UserId = string

// the declare module defines a global scope of the type
// ie extending to the types that originally exists in next
declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserId
    }
  }
}
