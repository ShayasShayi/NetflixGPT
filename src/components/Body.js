import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { adduser, removeUser } from "../utils/userSlice";

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
    const dispatch = useDispatch();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName,photoURL} = user;
              dispatch(adduser({uid,email,displayName,photoURL}))
            } else {
              dispatch(removeUser())
            }
          });
    },[])
    return(
        <div>
            <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg"/>
            <div className="h-screen flex">
                <RouterProvider router={appRoutes}></RouterProvider>
            </div>
        </div>
    )
}

export default Body;