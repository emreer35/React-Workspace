import { Link } from "react-router";

const Header = () => {
  return (
// link ile header navigation barini     
    <div className="flex gap-2 ">
        <Link className="text-lg hover:text-blue-400" to={'/'}>Home</Link>
        <Link className="text-lg hover:text-blue-400" to={'/about'}>Hakkimda</Link>
        <Link className="text-lg hover:text-blue-400" to={'/products'}>Urunler</Link>
        <Link className="text-lg hover:text-blue-400"  to={'/contact'}>Contact</Link>
    </div>
  )
}

export default Header