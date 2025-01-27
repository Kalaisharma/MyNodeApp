const express=require("express")
const {
  insertData,
  senddata,
  getMembership,
  getCity,
  getTourData,
  checkLogin,
  emailexist,
  updatepassword,
  blogdata,
  getpackagedata,
  BookTour,
  getDestination,
  addFavourites,
  getFavourites,
  removeFavourites,
  getBookings,
  getRegions,
  getPlaces,
} = require("../Contollers/formControllers");
const {loginmiddleware}=require('../Middlewares/middleware')
const formrouters=express.Router()
formrouters.post("/postData",insertData)
formrouters.get("/getData",senddata)
formrouters.get("/getMembership",getMembership)
formrouters.post("/getTourData",getTourData)
formrouters.post("/getCity",getCity)
formrouters.post("/checkLogin",loginmiddleware,checkLogin)
formrouters.post("/emailExist",emailexist)
formrouters.post("/updatepassword",updatepassword)
formrouters.get("/blogpost",blogdata)
formrouters.post("/getmembershipdata",getpackagedata)
formrouters.post("/bookingtour",BookTour)
formrouters.get("/getdestinations",getDestination)
formrouters.post("/addFavourites",addFavourites)
formrouters.post("/getFavourites", getFavourites)
formrouters.post("/removeFavourites", removeFavourites);
formrouters.post("/getBookings", getBookings);
formrouters.get("/getRegions", getRegions);
formrouters.post("/getPlaces", getPlaces);

module.exports=formrouters