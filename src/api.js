// export const api = function () {
// }
//
// api.prototype.getUser = function (email) {
//
// }

import {userStore} from './store'

const products = [
  {
    productId: '1',
    title: 'Senap mikrogrönt',
    subtitle: 'förp. 50g',
    price: 13.00,
    img: 'senap.jpg'
  },
  {
    productId: '2',
    title: 'Rödkål mikrogrönt',
    subtitle: 'förp. 45g',
    price: 11.00,
    img: 'redis.jpg'
  },
  {
    productId: '3',
    title: 'Ärtor mikrogrönt',
    subtitle: 'förp. 50g',
    price: 12.65,
    img: 'goroh.jpg'
  },
  {
    productId: '4',
    title: 'Grönkål mikrogrönt',
    subtitle: 'förp. 70g',
    price: 15.00,
    img: 'clover.jpg'
  },
  {
    productId: '5',
    title: 'Vitkål mikrogrönt',
    subtitle: 'förp. 60g',
    price: 20.00,
    img: 'camera.jpg'
  },
  {
    productId: '6',
    title: 'Solros mikrogrönt',
    subtitle: 'förp. 60g',
    price: 14.50,
    img: 'camera.jpg'
  },
  {
    productId: '7',
    title: 'Koriander mikrogrönt',
    subtitle: 'förp. 60g',
    price: 15.50,
    img: 'camera.jpg'
  },
]

export class API {

  //
  // Get data with Cloud Firestore
  //
  // https://firebase.google.com/docs/firestore/query-data/get-data
  async getUser(email) {
    // data is for userStore.data
    let data = {}
    const userRef = db.collection('users').doc(email)

    let doc = await userRef.get()
    if (doc.exists) {
      data = doc.data()

      if (data.orders == null) {
        data.orders = []
      }
    }

    return data
  }

  //
  // Add NEW USER data to Cloud Firestore
  //
  // https://firebase.google.com/docs/firestore/manage-data/add-data
  async setUser(user) {
    try {
      // check if user with same email is already exists
      let firebaseUserData = await this.getUser(user.email)
      if (firebaseUserData.email != null) {
        // error, user already exists !
        return 'e-mail konto redan finns'
      }

      // write to firebase
      const result = await db.collection('users').doc(user.email).set(user)
      console.log('firebase save result:', result)
      return null

    } catch (err) {
      console.log('ERROR:', err)
      return err.message
    }
  }

  //
  // update USER data to Cloud Firestore
  //
  // https://firebase.google.com/docs/firestore/manage-data/add-data
  async updateUser(user) {
    try {
      // write to firebase
      const result = await db.collection('users').doc(user.email).set(user)
      console.log('firebase save result:', result)
      return null

    } catch (err) {
      console.log('ERROR:', err)
      return err.message
    }
  }

  getProducts() {
    return products
  }

}
