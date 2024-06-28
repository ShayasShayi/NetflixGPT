import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const appRoutes = createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/browse',
        element:<Browse/>
    }
])
const Body = ()=>{
    
    return(
        <div>
            <div className="h-screen flex">
                <RouterProvider router={appRoutes}></RouterProvider>
            </div>
        </div>
    )
}

export default Body;