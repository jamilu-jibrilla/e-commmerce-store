// import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <address>
                    <h3>GET IN TOUCH</h3>
                    <p>
                        Multi shop has all the products you need, ranging from clothing to electronic gadgets and even household equipments. Visit our office address below to learn more.
                    </p>
                    <ul className='addy'>
                        <li>Shopping complex, Jimeta, Adamawa</li>
                        <li>Jamil@getrich.com</li>
                        <li>+012 345 67890</li>
                    </ul>
                </address>
                <div className='quick-shop'>
                    <h3>QUICK SHOP</h3>
                    <ul>
                        <li>Home</li>
                        <li>Our Shop</li>
                        <li>Shop Detail</li>
                        <li>Shopping Cart</li>
                        <li>Checkout</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className='my-account'>
                    <h3>MY ACCOUNT</h3>
                    <ul>
                        <li>Favorites</li>
                        <li>Register</li>
                        <li>Login</li>
                        <li>Contact</li>
                        <li>Recommendations</li>
                        <li>Shopping Cart</li>
                    </ul>
                </div>

                <div className='newsletter'>
                    <h3>NEWSLETTER</h3>
                    <p>Enter your email to get latest information regarding new products</p>
                    <ul className='email-signup'>
                        <input type="email" placeholder='Your Email Address' />
                        <button type="submit">Sign Up</button>
                    </ul>
                    <h4>FOLLOW US</h4>
                    <ul className='social-media'>
                        <li><i className="fa fa-facebook"></i></li>
                        <li><i className="fa">&#xf099;</i></li>
                        <li><i className="fa">&#xf0d2;</i></li>
                        <li><i className="fa">&#xf16d;</i></li>
                    </ul>
                </div >

            </div >

            <div className='footer-bottom'>
                <p>© <span>Domain.</span> All Rights Reserved. <span>Designed by HTML Codex</span></p>

            </div>
        </footer >
    );
}

export default Footer;