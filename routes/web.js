const homeController = require('../app/http/controllers/homeControllers')
const authController = require('../app/http/controllers/authControllers')
const cartController = require('../app/http/controllers/customers/cartControllers')
const guest = require('../app/http/middlewares/guest')

function initRoutes(app) {
    app.get('/', homeController().index)

    app.get('/login', guest, authController().login)
    app.post('/login', authController().postLogin)
    app.get('/register', guest, authController().register)

    app.get('/cart', cartController().index)
    app.post('/update-cart', cartController().update)
    app.post('/register', authController().postRegister)
    app.post('/logout', authController().logout)
}

module.exports = initRoutes;