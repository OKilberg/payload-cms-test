import { Access } from 'payload/config'

export const canReadPage: Access = ({ req: { user } }) => {
  // allow authenticated users
  if (user) {
    return true
  }
  // using a query constraint, guest users can access when a field named 'isPublic' is set to true
  return {
    // assumes we have a checkbox field named 'isPublic'
    isPublic: {
      equals: true,
    },
  }
}