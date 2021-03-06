import Link from 'next/link';

const Header = () => {
    return (
        <div>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <Link href='/about'>
                <a>About</a>
            </Link>
            <Link href='/contact'>
                <a>Contact</a>
            </Link>
        </div>
    )
}

export default Header
