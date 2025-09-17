import "./Reg.scss";
import Footer from "../Footer/Footer";
import React, { useEffect } from "react";
import AOS from "aos";

export default function Reg() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="registration-bg min-h-screen flex flex-col items-center justify-center">
        <div className="registration-container w-full relative z-5">
          <div className="form-card" data-aos="fade-down">
            <div className="form-header">
              <div
                className="icon-wrapper w-16 h-16 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, rgb(90,101,245), rgb(181,225,255))`,
                }}
              >
                <svg
                  className="icon w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="title">Create Account</h2>
              <p className="subtitle">Join us today and get started</p>
            </div>

            <div className="form-content flex flex-col">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="input-field w-full"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="input-field w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input-field w-full"
                  placeholder="Create a password"
                  required
                />
              </div>

              <button className="submit-btn w-full">Create Account</button>
            </div>

            <div className="form-footer flex justify-center gap-2">
              <p className="footer-text">Already have an account?</p>
              <button
                className="link-btn"
                onMouseOver={(e) => (e.target.style.color = "rgb(70,81,225)")}
                onMouseOut={(e) => (e.target.style.color = "rgb(90,101,245)")}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
        <div className="footer2 w-full z-30">
          <Footer />
        </div>
      </div>
    </>
  );
}
