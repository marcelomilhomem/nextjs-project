import Link from "next/link";

export default function Navbar() {
  const { user, username } = {};

  return (
    <nav className="navbar">
      <ul>
        <li className="btn-logo">
          <Link href={"/"}>
            <button>FEED</button>
          </Link>
        </li>
        {username && (
            <>
            <li className="push-left">
                <Link href={'/admin'}>
                    <button>Write Posts</button>
                </Link>
            </li>
            <li>
                <Link href={`${username}`}>
                    <img src={user?.photoURL}>Profile</img>
                </Link>
            </li>
            </>
        )}
        {!username && (
            <li>
                <Link href={'/enter'}>
                    <button className="btn-blue">Log In</button>
                </Link>
            </li>
        )}
      </ul>
    </nav>
  );
}
