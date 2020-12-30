// export const api = function () {
// }
//
// api.prototype.getUser = function (email) {
//
// }

export class API {
  constructor() {
    // TODO: use Firebase instead of hardcoded list
    this.users = {
      'blake@gmail.com': {
        firstName: 'blake', secondName: 'seamson', email: 'blake@gmail.com'
      },
      'bob@gmail.com': {
        firstName: 'bob', secondName: 'dillan', email: 'bob@gmail.com'
      },
      'jessica@gmail.com': {
        firstName: 'jessica', secondName: 'jones', email: 'jessica@gmail.com'
      }
    }
  }

  getUserMock(email) {
    const user = this.users[email]
    return user
  }

  async getUser(email) {
    let user = {}
    const userRef = db.collection('users').doc(email)

    let doc = await userRef.get()
    if (doc.exists) {
      user = doc.data()
    }
    return user
  }

  setUser(user) {
    this.users[user.email] = user
  }

}
