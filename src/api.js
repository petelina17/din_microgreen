// export const api = function () {
// }
//
// api.prototype.getUser = function (email) {
//
// }

import {userStore} from './store'
import {img1} from './images'

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

const recipes = [
  {
    id: '1',
    title: 'Färska vårrullar med rödkål, nötter och mango',
    description: 'Supergoda rispappersrullar. Lite pyssliga att göra men när man väl förberett allt går det smidigt.',
    text: `<p><strong>4 personer (16 rullar)</strong><br />
Ca 5 dl blandade skott, t.ex. <strong><a href="http://www.nelsongarden.se/swe/sek/p/micro-leaf_110/micro-leaf-arta_56864" target="_blank" rel="noopener">ärt</a></strong>-, <strong><a href="http://www.nelsongarden.se/swe/sek/p/micro-leaf_110/micro-leaf-solros_56862" target="_blank" rel="noopener">solros</a></strong>&#8211; och <strong><a href="http://www.nelsongarden.se/swe/sek/p/micro-leaf_110/micro-leaf-bladradisa_56858" target="_blank" rel="noopener">rädisskott</a></strong>.<br />
1 dl salta jordnötter<br />
1 msk sesamolja<br />
1/2 dl rapsolja<br />
2 msk japansk soja<br />
1/2 tsk sambal oelek<br />
1 klyfta rödkål (ca 200 g)<br />
2 avokado<br />
1 msk färskpressad limejuice<br />
3 salladslökar<br />
2 mango<br />
8 stora rispapper<br />
1 kruka mynta</p>
<p><strong>Så här gör du:<br />
1.</strong> Mixa nötterna grovt i matberedare. Tillsätt sesamolja, rapsolja, soja och sambal oelek. Mixa kort så att det precis bara blandas. Lägg i en skål.</p>
<p><strong>2.</strong> Strimla rödkålen fint. Lägg i en skål.</p>
<p><strong>3.</strong> Dela, kärna ur, gröp ur och skär avokadon i skivor. Lägg i en skål och droppa över limejuice (så att avokadon inte mörknar). Strimla salladslöken, lägg den i en skål. Skala och skär mangon i avlånga bitar.</p>
<p><strong>4.</strong> Fyll en stor bunke eller en vid kastrull med ljummet vatten. Blöt en ren kökshandduk, krama ur den och lägg ut på köksbänken. Doppa ett rispapper i taget i vattnet i ca 30 sekunder. Lägg det på handduken.</p>
<p><strong>5.</strong> Lägg lite rödkål, avokado, salladslök, mango, skott och några myntablad mitt på rispappret. Klicka över sås.</p>
<p><strong>6.</strong> Börja med att vika pappret från dig upp över fyllningen. Tryck försiktigt, och vik sedan in sidorna. Rulla ihop till en rulle. Lägg över rullen på en skärbräda med en ren fuktad kökshandduk på. Gör resten av rullarna på samma sätt. Lägg rullarna med några centimeters mellanrum så de inte klibbar fast i varandra.</p>
<p><strong>7.</strong> Skär varje rulle i två bitar och lägg på ett fat. Servera med japansk soja.</p>
<p><strong>TIPS:</strong> Rullarna kan förberedas några timmar i förväg. Lägg over den blöta handduken du använt vid rullningen. Förvara i kylskåp.</p>`,
    img: img1,
    authorPhoto: ' Lennart Weibull',
    tags: ['rädisa', 'solros'],
    author: 'källa: https://dinodlarvan.nelsongarden.se/gronsaker/recept-groddar-skott-och-mikrogront/',
    authorName: 'Lina Walentinson',
    date: '2016-10-14T18:23:01.000Z'
  },
  {
    id: '2',
    title: 'DEF Receipt',
    description: '',
    text: '',
    img: img1,
    tags: ['', ''],
    author: 'bob@bob.com',
    authorName: 'Bob Black',
    date: '2021-01-29T18:23:01.000Z'
  },
  {
    id: '3',
    title: 'DEF Receipt',
    description: '',
    text: '',
    img: img1,
    tags: ['', ''],
    author: 'bob@bob.com',
    authorName: 'Bob Black',
    date: '2021-01-29T18:23:01.000Z'
  },
  {
    id: '4',
    title: 'DEF Receipt',
    description: '',
    text: '',
    img: img1,
    tags: ['', ''],
    author: 'bob@bob.com',
    authorName: 'Bob Black',
    date: '2021-01-29T18:23:01.000Z'
  }
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

  getRecipes() {
    return recipes
  }

}
