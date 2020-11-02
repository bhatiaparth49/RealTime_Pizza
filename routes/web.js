const homeController = require('../app/http/controllers/homeControllers')
const authController = require('../app/http/controllers/authControllers')
const cartController = require('../app/http/controllers/customers/cartControllers')

function initRoutes(app) {
    app.get('/', homeController().index)

    app.get('/login', authController().login)
    
    app.get('/register', authController().register)

    app.get('/cart', cartController().index)
    app.post('/update-cart', cartController().update)
}

module.exports = initRoutes;