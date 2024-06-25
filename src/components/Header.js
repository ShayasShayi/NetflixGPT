import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ()=>{
    const navigate = useNavigate();
    const user = useSelector(store=>store.user)
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
          }).catch((error) => {
            // An error happened.
          });
    }

    return(
        <div className="flex absolute w-full z-10 bg-gradient-to-b from-black justify-between p-2">
            <img className="h-28 " src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>            
            {user && <div className="flex items-center">
                <img className="h-20 p-2" src={user.photoURL}/>
                <button className="text-white font-bold text-lg" onClick={handleSignOut}>(Sign Out)</button>
            </div>}

        </div>
    )
}

export default Header;