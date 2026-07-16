import "./Features.css";

function Features() {
    return (
        <section className="features" id="features">

            <div className="features-header">

                <p className="features-tag">
                    FEATURES
                </p>

                <h2>
                    Powerful Features Built For
                    <span> Modern Teams</span>
                </h2>

                <p className="features-subtitle">
                    Everything you need to manage software projects,
                    collaborate with your team and deliver on time.
                </p>

            </div>

            <div className="features-container">

                <div className="feature-card">

                    <div className="feature-icon">📁</div>

                    <h3>Project Management</h3>

                    <p>
                        Create, organize and monitor multiple
                        software projects from one place.
                    </p>

                </div>

                <div className="feature-card">

                    <div className="feature-icon">✅</div>

                    <h3>Task Assignment</h3>

                    <p>
                        Assign tasks to team members,
                        set priorities and track progress.
                    </p>

                </div>

                <div className="feature-card">

                    <div className="feature-icon">👥</div>

                    <h3>Team Collaboration</h3>

                    <p>
                        Work together with developers,
                        testers and project managers.
                    </p>

                </div>

                <div className="feature-card">

                    <div className="feature-icon">🐞</div>

                    <h3>Bug Tracking</h3>

                    <p>
                        Report, assign and resolve bugs
                        with an organized workflow.
                    </p>

                </div>

                <div className="feature-card">

                    <div className="feature-icon">📊</div>

                    <h3>Analytics</h3>

                    <p>
                        Monitor project progress through
                        visual reports and dashboards.
                    </p>

                </div>

                <div className="feature-card">

                    <div className="feature-icon">🔒</div>

                    <h3>Secure Access</h3>

                    <p>
                        Role-based authentication ensures
                        secure access for every user.
                    </p>

                </div>

            </div>

        </section>
    );
}

export default Features;