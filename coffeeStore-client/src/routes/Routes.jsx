import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import CoffeeDetails from "../pages/CoffeeDetails/CoffeeDetails";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/details',
                element: <CoffeeDetails></CoffeeDetails>
            },
            {
                path: '/update',
                element: <UpdateCoffee></UpdateCoffee>
            }
        ]
    }
])

export default routes;