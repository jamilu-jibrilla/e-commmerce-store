import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <div className="top-nav">
            <ul className='about'>
                <Link href="/about" className="push-left"><li>About</li></Link>
                <Link href="/contact"><li>Contact</li></Link>
                <Link href="/contact"><li>Help</li></Link>
                <Link href="/"><li>FAQs</li></Link>
            </ul>
            <ul className='auth'>
                <Link href="/about"><li>Sign in</li></Link>
                <Link href="/about" className="push-right"><li>Sign up</li></Link>
            </ul>
        </div>
    );
}

export default TopNav;