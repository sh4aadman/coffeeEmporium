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
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: '/add',
                element: <AddCoffee></AddCoffee>
            },
            {
                path: '/details/:id',
                element: <CoffeeDetails></CoffeeDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`)
            },
        ]
    }
])

export default routes;