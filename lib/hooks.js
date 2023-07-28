import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from './firebase';

export function useUserData() {
    const [user] = useAuthState(auth);
    const [username, setUsername] = useState(null);
  
    useEffect(() => {
      // turn off realtime subscription  
      if (user) {
        console.log(user.uid)
      }
      }, [user]);

    return { user, username };
  }