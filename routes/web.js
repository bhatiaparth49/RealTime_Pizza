const homeController = require('../app/http/controllers/homeControllers')
const authController = require('../app/http/controllers/authControllers')
const cartController = require('../app/http/controllers/customers/cartControllers')
const orderController = require('../app/http/controllers/customers/orderControllers')
const adminOrderController = require('../app/http/controllers/admin/adminOrderController')

//Middlewares
const guest = require('../app/http/middlewares/guest')
const auth = require('../app/http/middlewares/auth')
const admin = require('../app/http/middlewares/admin')

function initRoutes(app) {
    app.get('/', homeController().index)

    app.get('/login', guest, authController().login)
    app.post('/login', authController().postLogin)
    app.get('/register', guest, authController().register)

    app.get('/cart', cartController().index)
    app.post('/update-cart', cartController().update)
    
    app.post('/register', authController().postRegister)
    app.post('/logout', authController().logout)

    //Customer routes
    app.post('/orders', auth, orderController().store)
    app.get('/customers/orders', auth, orderController().index)

    // Admin routes
    app.get('/admin/orders', admin, adminOrderController().index)
}

module.exports = initRoutes;