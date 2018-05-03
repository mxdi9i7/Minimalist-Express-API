const login = 'admin'
const pass = 'pass'
const url = 'ds263989.mlab.com:63989/boiler'

module.exports = {
    mongoUrl: `mongodb://${login}:${pass}@${url}`
}