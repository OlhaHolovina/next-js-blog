import Link from "next/link";
import Image from "next/image";
import BurlingtonGallery from "../pages/blog/burlington-gallery";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Image
           priority
           src="/images/humber_logo.png"
           height={16}
           width={64}
           alt='Humber logo'
         />
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <Link href="/">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
            </Link>
            <Link href="/blog">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Blog</a>
              </li>
            </Link>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                 data-bs-toggle="dropdown" aria-expanded="false">
                Posts
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link href="/blog/bronte-park">
                  <li><a className="dropdown-item clickable">Bronte Park</a></li>
                </Link>
                <Link href="/blog/burlington-gallery">
                  <li><a className="dropdown-item clickable">Burlington Gallery</a></li>
                </Link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
