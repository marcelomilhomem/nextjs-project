import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function Navbar() {
  const { user, username } = useContext(UserContext);

  console.log("tessssss", user)

  return (
    <nav className="navbar">
      <ul>
        <li className="btn-logo">
          <Link href={"/"}>
            <button>FEED</button>
          </Link>
        </li>
        {user && (
          <>
            <li className="push-left">
              <Link href={"/admin"}>
                <button>Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`${username}`}>
                <img src={user.photoURL}></img>
              </Link>
            </li>
          </>
        )}
        {!username && (
          <li>
            <Link href={"/enter"}>
              <button className="btn-blue">Log In</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
