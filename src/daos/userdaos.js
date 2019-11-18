const userModel = require('../schema/userSchema');

exports.postUser = async (userData) => {
  try{
    const user = new userModel(userData);
    const data = await user.save();
    return {data};
  }catch(err){
    return {err};
  }
}

exports.getUser = async (id)  => {
  try{
    const data = await userModel.findById(id);
    return {data};
  }catch(err){
    return {err};
  }
}