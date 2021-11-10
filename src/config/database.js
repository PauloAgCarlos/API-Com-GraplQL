const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex


// knex('users').insert({
//     name: 'teste',
//     email: 'teste@teste.com',
//     password: 'teste123'
// }).then(data => console.log(data))

// knex('users').select('*').then(resultado => console.log(resultado))
// knex('users').then(resultado => console.log(resultado))
// knex('users').first().then(resultado => console.log(resultado))
knex('users').where({id:1}).then(resultado => console.log(resultado))