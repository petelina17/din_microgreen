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

  //
  // Get data with Cloud Firestore
  //
  // https://firebase.google.com/docs/firestore/query-data/get-data
  async getUser(email) {
    let user = {}
    const userRef = db.collection('users').doc(email)

    let doc = await userRef.get()
    if (doc.exists) {
      user = doc.data()
    }
    return user
  }

  //
  // Add data to Cloud Firestore
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
      await db.collection('users').doc(user.email).set(user)
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
