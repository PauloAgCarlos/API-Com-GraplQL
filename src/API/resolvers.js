const db = require('../config/database')

module.exports = {
    Query: {
        async getUser(_, {id}) {
            return await db('users').where({id: id}).first()
        },
        async getUsers() {
            return await db('users')
        },
        mutation: {
            async createUser (_, {input}) {
                const resultado = await db('users').insert({
                    name: input.name,
                    email: input.email,
                    password: input.password
                })

                const id = resultado[0];
                return await db('users').where({id}).first()
            }
        }
    }
}