// export const api = function () {
// }
//
// api.prototype.getUser = function (email) {
//
// }

const products = [
  {
    productId: '1',
    title: 'Senap mikrogrönt',
    subtitle: 'förp. 50g',
    price: '13.00 kr',
    img: 'senap.jpg'
  },
  {
    productId: '2',
    title: 'Rödkål mikrogrönt',
    subtitle: 'förp. 45g',
    price: '11.00 kr',
    img: 'redis.jpg'
  },
  {
    productId: '3',
    title: 'Ärtor mikrogrönt',
    subtitle: 'förp. 50g',
    price: '12.65 kr',
    img: 'goroh.jpg'
  },
  {
    productId: '4',
    title: 'Grönkål mikrogrönt',
    subtitle: 'förp. 70g',
    price: '15.00 kr',
    img: 'clover.jpg'
  },
  {
    productId: '5',
    title: 'Vitkål mikrogrönt',
    subtitle: 'förp. 60g',
    price: '20.00 kr',
    img: 'camera.jpg'
  },
  {
    productId: '6',
    title: 'Solros mikrogrönt',
    subtitle: 'förp. 60g',
    price: '14.50 kr',
    img: 'camera.jpg'
  },
  {
    productId: '7',
    title: 'Koriander mikrogrönt',
    subtitle: 'förp. 60g',
    price: '15.50 kr',
    img: 'camera.jpg'
  },
]

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

  getProducts() {
    return products
  }

}
