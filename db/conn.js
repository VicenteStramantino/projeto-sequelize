const { Sequelize } = require('sequelize')

const db = new Sequelize(
  'rodolfoDB',        
  'avnadmin',                
  'AVNS_oxTlKFIZdp8xu6X2f3r',
  {
    host: 'pgriloagente-langchaintest.j.aivencloud.com',
    port: 16424,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
)

module.exports = db
