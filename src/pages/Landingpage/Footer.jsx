import "./Footer.css";

function Footer() {
    return (

        <footer id="footer"className="footer">

            <div className="footer-container">

                {/* Company */}

                <div className="footer-section">

                    <h2>PROJEX</h2>

                    <p>
                        A modern project management platform
                        designed to simplify planning,
                        collaboration, and project delivery.
                    </p>

                </div>

                {/* Quick Links */}

                <div className="footer-section">

                    <h3>Quick Links</h3>

                    <ul>

                        <li>
                            <a href="#home">Home</a>
                        </li>

                        <li>
                            <a href="#about">About</a>
                        </li>

                        <li>
                            <a href="#features">Features</a>
                        </li>

                        <li>
                            <a href="#contact">Contact</a>
                        </li>

                    </ul>

                </div>

                {/* Resources */}

                <div className="footer-section">

                    <h3>Resources</h3>

                    <ul>

                        <li>
                            <a href="/">Documentation</a>
                        </li>

                        <li>
                            <a href="/">Privacy Policy</a>
                        </li>

                        <li>
                            <a href="/">Terms & Conditions</a>
                        </li>

                    </ul>

                </div>

                {/* Contact */}

                <div className="footer-section">

                    <h3>Connect</h3>

                    <ul>

                        <li>
                            📧 najeerkhanp335@gmail.com
                        </li>

                        <li>
                            💻 github.com/najeer2005
                        </li>

                        <li>
                            💼 linkedin.com/in/najeer/
                        </li>

                    </ul>

                </div>

            </div>

            <hr />

            <div className="footer-bottom">

                <p>
                    © 2026 PROJEX. All Rights Reserved.
                </p>

                <a href="#home">
                    ↑ Back to Top
                </a>

            </div>

        </footer>

    );
}

export default Footer;