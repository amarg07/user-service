const userDaos = require('../daos/userdaos');
const client = require("../redis/redis");

exports.postUser = async (req, res) => {
  const user = req.body;

  const {err, data} = await userDaos.postUser(user);
  if(err){
     return res.status(500).send(err);
  } 
  res.status(200).send(data);
}

exports.getUser = async (req, res) => {
  const {id} = req.params;
  
  return client.get(id, async (err, user) => {
    if (user) {
      // eslint-disable-next-line no-console
      console.log('exists in redis');
      res.status(200).send(JSON.parse(user));    
    } 
    else {
      const {err, data} = await userDaos.getUser(id);
      if(err || !data){
        return res.status(500).send(err);
      } 
   client.set(data._id.toString(), JSON.stringify(data._doc));
   res.status(200).send(data);
    }
  });
  
}