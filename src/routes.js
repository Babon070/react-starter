import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import DevicePage from "./pages/DevicePage"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, BASKET_ROUTE, DEVISE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utilis/consts"

// authRoutes bilan faqat autorithatsiadan otgan foydalanuvchilar kiradi:
export const authRoutes = [
    {
        path:  ADMIN_ROUTE,
        component: Admin
    },
    {
        path:  BASKET_ROUTE,
        component: Basket
    }
]
// publicRoutes bilan xamma yofdalanuvchi kiradi
export const publicRoutes = [
    {
        path:  SHOP_ROUTE,
        component: Shop
    },
    {
        path: LOGIN_ROUTE,
        component: Auth
    }, 

    {
        path:  REGISTRATION_ROUTE,
        component: Auth
    },
  
    {
        path:  DEVISE_ROUTE + '/:id',
        component: DevicePage
    }
]