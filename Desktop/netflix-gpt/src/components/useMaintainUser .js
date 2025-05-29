

import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

// As I wanted to use this useEffect code at a lot of places, thats why I have put it in custom hook 

const useMaintainUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // 🔁 navigate hook

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // console.log("called ueeefect");
         dispatch(addUser({ uid:uid, email:email, displayName: displayName, photo: photoURL }));
        navigate("/browse"); // ✅ on login
      } else {
        dispatch(removeUser());
        navigate("/"); // ✅ on logout
      }
    });

    // Cleanup listener if you ever want:
     return () => unsubscribe();

  }, []); // 🔁 dependencies
};

export default useMaintainUser;
