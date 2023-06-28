import Link from "next/link"

const Header: React.FC = () => {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/order-eggs">Order Eggs</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/recipes">Recipes</Link>
      <Link href="/faq">FAQ</Link>
      <Link href="/about">About the Farm</Link>
      <Link href="/login">Login</Link>
    </nav>
  )
}

export default Header