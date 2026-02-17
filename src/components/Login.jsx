import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate=useNavigate();
   const handleLoginRedirect = () => {
    // alert("LOGIN SUCCESSFULLY COMPLETED");
          navigate("/");}
  return (
   <div className="split-layout">
    <div className="image-section"></div>

    <div className="form-section">
        <div className="login-container">
            
            <div className="brand-logo">ecco</div>

            <form action="#" method="POST">
                <div className="input-group">
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="input-group">
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" id="password" name="password" required />
                </div>

                <div className="forgot-password">
                    <a href="#">FORGOT PASSWORD?</a>
                </div>

                <button type="submit" className="btn-login" onClick={handleLoginRedirect}>LOG IN</button>
            </form>

            <div className="signup-text">
                New here? <a href="#">Create an account</a>
            </div>

            <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" className="social-icon" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
                <a href="#" className="social-icon" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            </div>

        </div>
    </div>
</div>

  )
}


export default Login