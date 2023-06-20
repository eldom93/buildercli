import Link from "next/link";
import "../styles/nav.css";
import Image from "next/image";

const Nav = ({ title }) => {
  return (
    <nav role="navigation">
      <div className="left-navlinks">
        <Link href="/men">Men</Link>

        <Link href="/women">Women</Link>

        <Link href="/about">About</Link>
      </div>
      <div className="center-navlink">
        <Link href="/">
          {title}
          <Image
            className="builderLogo"
            height={77}
            width={128}
            src="/builder-logo.svg"
          />
        </Link>
      </div>
      <div className="right-navlinks">
        <button>Search</button>

        <Link href="/cart">Cart</Link>
      </div>
    </nav>
  );
};
export default Nav;
