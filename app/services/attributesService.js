class attributesService {
  constructor() {
    if(localStorage.getItem('attributes')){
      this.attributes = JSON.parse(localStorage.getItem('attributes'))
    }
    else {
      this.attributes = {
        strength: 0, 
        charisma: 0,
        dexterity:0,
        intelligence:0,
        chance:0,
      }
    }
  }
  value() {
    console.log('attributes');
    return this.attributes;
  }
}

module.exports = new attributesService();

/* 
Pour le localstorage et les objets 
faire json.stringify pour le stocker
puis json.parse pour le repasser en objet
*/