//import configutation
import config from "../../../config.json"

const _db   ={
      client: config.knexdriver,
      connection: {
            host: config.Host,
            user: config.DbUsername,
            password: config.DbPassword,
            database: config.Dbname
        }
  }


let Conf  =  {
    db : require('knex')(_db)
}


module.exports = Conf;