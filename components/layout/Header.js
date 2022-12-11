import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
    return ( 
        <>
        <div>
        </div>
        <Image src="/bikeLogo.png" width={119} height={54} alt='logo' />
        <nav className='header'>
           
                <Link className='linki btn' href='/'>Home</Link>
                <Link className='linki btn' href='/about'>About</Link>
                <Link className='linki btn' href='/ninjas'>Ninjas</Link>
           
        </nav>
        </>
     );
}
 
export default Header;