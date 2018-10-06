export const login = (user) => {
  try {
    const data = {
      token: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      data: user
    }
    return new Promise(resolve => setTimeout(resolve(data), 1000))
  } catch (error) {
    return new Promise(reject => setTimeout(reject(new Error(error)), 1000))
  }
}

export const logout = () => {
  return new Promise(resolve => setTimeout(resolve, 1000))
}