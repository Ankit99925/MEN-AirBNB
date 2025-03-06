// Core Modules

const { ObjectId } = require("mongodb");
const { getDB } = require("../utils/databaseUtil");




module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl,_id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    if(_id){
    this._id=_id;}
  }

  save() {const db=getDB();
     const updateFields={houseName :this.houseName,
      price :this.houseName,
      location :this.houseName,
      rating :this.houseName,
      photoUrl :this.houseName}
    if(this._id){//update
      return db.collection('homes').updateOne({_id : new ObjectId(String(this._id))},{$set:updateFields})
    }
    else{//insert
        return db.collection('homes').insertOne(this);
    }
    
    

  }

  static fetchAll() {
    const db=getDB();
    return db.collection('homes').find().toArray();
  }

  static findById(homeId) {
   const db=getDB();
    return db.collection('homes').find({_id : new ObjectId(String(homeId))}).next();
  }

  static deleteById(homeId) {
    const db=getDB();
    return db.collection('homes').deleteOne({_id : new ObjectId(String(homeId))});
  }
};
