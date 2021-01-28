// export const api = function () {
// }
//
// api.prototype.getUser = function (email) {
//
// }

import {userStore} from './store'
import {img1, img2, img3} from './images'

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
    source: 'https://dinodlarvan.nelsongarden.se/gronsaker/recept-groddar-skott-och-mikrogront/',
    author: 'nata@gmail.com',
    authorName: 'Lina Walentinson',
    date: '2016-10-14T18:23:01.000Z'
  },
  {
    id: '2',
    title: 'Svarvad sallad med skott, chèvre och mandel',
    description: 'Svarva mera! Av någon anledning är det mycket roligare att äta grönsaker i långa strimlor än rivna. Betor och morot är finfina smakkompisar till blandade skott.',
    text: `<p><strong>4 personer</strong><br />
5 dl blandade skott t.ex. <strong><a href="http://www.nelsongarden.se/swe/sek/p/gronsaker_120/rucola--sandsenap_91345" target="_blank" rel="noopener">rucola</a></strong>, <strong><a href="http://www.nelsongarden.se/swe/sek/p/micro-leaf_110/micro-leaf-bladsarepta_56860" target="_blank" rel="noopener">senap</a></strong> och <strong><a href="http://www.nelsongarden.se/swe/sek/p/micro-leaf_110/micro-leaf-bladradisa_56858" target="_blank" rel="noopener">rädisa</a></strong>.<br />
1/2 dl flagad mandel<br />
400 g blandade betor (t.ex. röd-, polka- och gulbeta)<br />
2 morötter<br />
2 msk olivolja<br />
1 tsk flingsalt<br />
1 krm malen svartpeppar<br />
150 g chèvre</p>
<p><strong>Dressing:</strong><br />
1 msk färskpressad citronjuice<br />
1/2 msk flytande honung<br />
1 msk olivolja<br />
1 krm salt</p>
<p><strong>Så här gör du:</strong><br />
<strong>1.</strong> Rosta mandeln i en torr stekpanna tills den får lite färg. Låt svalna.</p>
<p><strong>2.</strong> Skala och svarva betor och morot på en grönsakssvarv (eller hyvla den med mandolin, det blir också tunt och gott). Klipp av banden några gånger med sax, annars är det svårt att servera salladen.</p>
<p><strong>3.</strong> Blanda det svarvade med olja, flingsalt och peppar.</p>
<p><strong>4.</strong> Varva svarvet med skott på ett fat eller i en skål. Strö över smulad chevrè och mandel.</p>
<p><strong>5.</strong> Blanda citronjuice och honung med olja och salt till en dressing. Ringla över salladen.</p>`,
    img: img2,

    authorPhoto: ' Lennart Weibull',
    tags: ['rädisa', 'solros'],
    source: 'https://dinodlarvan.nelsongarden.se/gronsaker/recept-groddar-skott-och-mikrogront/',
    author: 'nata@gmail.com',
    authorName: 'Lina Walentinson',
    date: '2016-10-14T18:23:01.000Z'
  },
  {
    id: '3',
    title: 'Groddat fröbröd',
    description: 'Ett bröd laddat med energi och nyttigheter. Låt helst brödet vila inlindat i en handduk några timmar innan det skärs upp. Då hinner det sätta sig ordentligt och håller ihop bra. Perfekt att skiva, förvara i frysen och rosta efterhand.',

    text: `<p><strong>1 bröd</strong><br />
200 g groddat bovete<br />
1 msk fiberhusk<br />
1 dl linsfrön<br />
1 dl sesamfrön<br />
2 dl kokande vatten<br />
2 dl havremjöl<br />
2 tsk bikarbonat<br />
1 1/2 tsk salt<br />
1 1/2 dl yoghurt (3%)<br />
1 dl mörk sirap<br />
1 dl rostade pumpakärnor (eller solrosfrön)<br />
1 dl rostade hasselnötter<br />
olja till formen<br />
Havremjöl att strö över</p>
<p><strong>Så här gör du:</strong><br />
<strong>1.</strong> Blanda husk, linfrön och sesamfrön i en stor bunke. Häll över kokande vatten och blanda väl. Låt svälla i 10 minuter.</p>
<p><strong>2.</strong> Tillsätt havremjöl, groddat bovete, bikarbonat, salt, yoghurt och sirap i fröblandningen. Blanda med elvisp ett par minuter så att allt blandas väl.</p>
<p><strong>3.</strong> Blanda i pumpakärnor och nötter.</p>
<p><strong>4.</strong> Sätt ugnen på 200 °C.</p>
<p><strong>5.</strong> Häll smeten i en oljad brödform (cirka 2 liter). Strö havremjöl över. Låt vila övertäckt i cirka 30 minuter.</p>
<p><strong>6.</strong> Grädda i nedre delen av ugnen i cirka en timme. Låt stå minst en halvtimme innan brödet stjälps upp.</p>
<p><strong>TIPS:</strong> Gör gärna dubbelsats av brödet om du har groddar så att det räcker för två brödformar. Det är alltid smidigt att ha ett extra bröd i frysen.</p>`,

    img: img3,
    authorPhoto: ' Lennart Weibull',
    tags: ['pumpakärnor'],
    source: 'https://dinodlarvan.nelsongarden.se/gronsaker/recept-groddar-skott-och-mikrogront/',
    author: 'nata@gmail.com',
    authorName: 'Lina Walentinson',
    date: '2016-10-14T18:23:01.000Z'
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
  async updateUser(user, key) {
    try {
      if (key == null || key === '') {
        key = user.email
      }

      // write to firebase
      await db.collection('users').doc(key).set(user)
      console.log('firebase save user')
      return null

    } catch (err) {
      console.log('ERROR:', err)
      return err.message
    }
  }

  getProducts() {
    return products
  }

  async getRecipes() {
    return recipes

    // return recipes
    //const collection = await db.collection('recipes').get()
    //console.log('recipes', collection.docs)

    //return collection.docs
  }

  async updateRecipe(recipe) {
    try {
      const key = recipe.id
      // write to firebase
      await db.collection('recipes').doc(key).set(recipe)
      console.log('firebase save recipe')
      return null

    } catch (err) {
      console.log('ERROR:', err)
      return err.message
    }
  }

}
