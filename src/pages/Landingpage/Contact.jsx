import "./Contact.css";

function Contact() {
    return (
        <section className="contact" id="contact">

            <div className="contact-header">

                <p className="contact-tag">
                    CONTACT
                </p>

                <h2>
                    Let's Build Something
                    <span> Amazing Together</span>
                </h2>

                <p className="contact-subtitle">
                    Have a question, project idea, or collaboration opportunity?
                    Feel free to reach out. We'd love to hear from you.
                </p>

            </div>

            <div className="contact-container">

                {/* Left Side */}

                <div className="contact-info">

                    <h3>Get In Touch</h3>

                    <p>
                        Whether you have a project idea, feedback,
                        or simply want to connect, we're always
                        happy to talk.
                    </p>

                    <div className="info-box">

                        <h4>📧 Email</h4>

                        <p>
                            najeerkhanp335@gmail.com
                        </p>

                    </div>

                    <div className="info-box">

                        <h4>💼 LinkedIn</h4>

                        <p>
                            www.linkedin.com/in/najeer/
                        </p>

                    </div>

                    <div className="info-box">

                        <h4>💻 GitHub</h4>

                        <p>
                            github.com/najeer2005
                        </p>

                    </div>

                </div>

                {/* Right Side */}

                <div className="contact-form">

                    <h3>Send Message</h3>

                    <form>

                        <input
                            type="text"
                            placeholder="Your Name"
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                        />

                        <textarea
                            rows="6"
                            placeholder="Write your message..."
                        ></textarea>

                        <button>
                            Send Message
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}

export default Contact;