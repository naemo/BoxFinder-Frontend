const users = [
  { email: "admin1@test.com", password: "123", name: "admin1" },
  { email: "admin2@test.com", password: "456", name: "admin2" },
  { email: "admin3@test.com", password: "789", name: "admin3" },
]

export function signIn({ email, password }) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  )
  if (user === undefined) throw new Error()
  return user
}