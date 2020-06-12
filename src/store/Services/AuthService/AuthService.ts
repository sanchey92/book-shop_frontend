export interface IAuthData {
  email: string,
  password: string
}

export default class AuthService {

  static singUp = async (data: IAuthData) => {
    try {
      const response = await fetch(`http://localhost:3001/user/sign_up`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return await response.json()
    } catch (e) {
      console.log(e)
    }
  }

  static singIn = async (data: IAuthData) => {
    try {
      const response = await fetch(`http://localhost:3001/user/sign_in`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return await response.json()
    } catch (e) {
      console.log(e)
    }
  }

}