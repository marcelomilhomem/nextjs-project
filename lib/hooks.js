import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from './firebase';
import { doc, onSnapshot } from 'firebase/firestore';

export function useUserData() {
    const [user] = useAuthState(auth);
    const [username, setUsername] = useState(null);
  
    useEffect(() => {
      // turn off realtime subscription  

      let unsubscribe;

      if (user) {
        unsubscribe = onSnapshot(doc(firestore, "users", user.uid), (doc) =>  {
          setUsername(doc.data()?.username)
        });
        console.log("username", username, "user", user)
      }
      return unsubscribe;
      }, [user]);

    return { user, username };
  }