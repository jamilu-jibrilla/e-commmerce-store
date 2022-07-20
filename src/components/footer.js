// import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <address>
                    <h3>GET IN TOUCH</h3>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    </p>
                    <ul className='addy'>
                        <li>123 Street, New York, USA</li>
                        <li>info@example.com</li>
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
                        <li>Home</li>
                        <li>Our Shop</li>
                        <li>Shop Detail</li>
                        <li>Shopping Cart</li>
                        <li>Checkout</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className='newsletter'>
                    <h3>NEWSLETTER</h3>
                    <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                    <ul className='email-signup'>
                        <input type="email" placeholder='Your Email Address' />
                        <button type="submit">Sign Up</button>
                    </ul>
                    <h4>FOLLOW US</h4>
                    <ul className='social-media'>
                        <li><i class="fa fa-facebook"></i></li>
                        <li><i class="fa">&#xf099;</i></li>
                        <li><i class="fa">&#xf0d2;</i></li>
                        <li><i class="fa">&#xf16d;</i></li>
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