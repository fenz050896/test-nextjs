import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Nav() {
  const [active, setActive] = useState(false);
  const router = useRouter();
  return (
    <nav>
      <ul className={`menu ${active ? 'active' : ''}`}>
        <li className="logo"><a href="#">Company Name</a></li>
        <li className={`menu__item ${router.pathname === '/' ? 'menu__item__active' : ''}`}>
          <Link href="/"><a>Product</a></Link>
        </li>
        <li className={`menu__item ${router.pathname === 'a' ? 'menu__item__active' : ''}`}>
          <Link href="#"><a>About</a></Link>
        </li>
        <li className={`menu__item ${router.pathname === 'b' ? 'menu__item__active' : ''}`}>
          <Link href="#"><a>Blogs</a></Link>
        </li>
        <li className={`menu__item ${router.pathname === 'c' ? 'menu__item__active' : ''}`}>
          <Link href="#"><a>Contact</a></Link>
        </li>
        <li className="toggle" onClick={() => { setActive(!active); }}>
          <a>{ active ? <i className="fa fa-times fa-2"></i> : <i className="fa fa-bars fa-2"></i> }</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;