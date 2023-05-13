import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Card from "./pages/Card";
import Shop from "./pages/Shop";

import { ADMIN_ROUTE, BASKET_ROUTE, AUTH_ROUTE, REG_ROUTE, CARD_ROUTE, SHOP_ROUTE } from "./utils/consts";

export const privateRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }];
export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: REG_ROUTE,
        Component: Auth
    },
    {
        path: CARD_ROUTE + '/:id',
        Component: Card
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    }

];