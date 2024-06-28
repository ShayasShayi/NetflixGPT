import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { adduser, removeUser } from "../utils/userSlice";
import { APP_LOGO } from "../utils/constants";

const Header = ()=>{
    const navigate = useNavigate();
    const user = useSelector(store=>store.user)

    const dispatch = useDispatch();
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName,photoURL} = user;
              dispatch(adduser({uid,email,displayName,photoURL}));
              navigate("/browse")
            } else {
              dispatch(removeUser());
              navigate("/")
            }
          });
          
          return ()=>unsubscribe();
    },[])

    const handleSignOut = ()=>{
        signOut(auth).then(() => {
          }).catch((error) => {
            console.log(error.message)
          });
    }

    return(
        <div className="flex absolute w-full z-10 bg-gradient-to-b from-black justify-between p-2">
            <img className="h-28 " src={APP_LOGO}/>            
            {user && <div className="flex items-center">
                <img className="h-20 p-2" src={user.photoURL}/>
                <button className="text-white font-bold text-lg" onClick={handleSignOut}>(Sign Out)</button>
            </div>}

        </div>
    )
}

export default Header;