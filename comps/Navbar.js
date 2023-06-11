import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo_UFRN.jpg" width={150} height={80} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">Ninjas Listing</Link>
    </nav>
  );
}

export default Navbar;