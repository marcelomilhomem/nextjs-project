'use client'
import { signInWithPopup, signOut } from 'firebase/auth';
import { googleProvider, auth } from '../../../lib/firebase';
import { useContext } from 'react';
import { UserContext } from '../../../lib/context';

export default function Enter(props) {

  const { user, username } = useContext(UserContext)

  return (
    <main>
      {user ? 
        !username ? <UsernameForm /> : <SignOutButton /> 
        : 
        <SignInButton />
      }
    </main>
  );
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={'/google.png'} /> Sign in with Google
    </button>
  );
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => signOut(auth)}>Sign Out</button>;
}

function UsernameForm() {
  return null;
}