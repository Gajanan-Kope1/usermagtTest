const db = require("../models");
const User = db.user;
const Board = db.board;

exports.createboard = async(req, res, next) => {
  await Board.create(req.body)
  res.send({status:200,msg:"success",data:null})
};

exports.getboard = async (req, res, next) => {
  let data = await Board.findAll();
  res.send({status:200,msg:"success",data:data})
};

exports.createUser = async(req, res, next) => {
  await User.create(req.body)
  res.send({status:200,msg:"success",data:null})
};

exports.getuser = async(req, res, next) => {
  let data = await User.findAll()
  res.send({status:200,msg:"success",data:data})
};
