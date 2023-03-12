import CreateUser from "./pages/CreateUser";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

 let routes =[
    {path:'/', element:<Dashboard/>},
    {path:'/create_user', element:<CreateUser/>},
    {path:'/users', element:<Users/>},
]

export default routes