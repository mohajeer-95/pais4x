/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import PageHeader from '@/components/modules/about-us/PageHeader';
import Link from "next/link";
import Footer from "@/components/Footer";
import { getCookie } from 'cookies-next';

const ResetPass = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState("");

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{8,}$/;
    return regex.test(password);
  };

  useEffect(() => {
    const authToken = getCookie('token')
    setToken(authToken)
    setToken(getCookie('token'))
    if (!getCookie('token')) {
      window.location.href = '/';
      return;
    }
  }, []);

  const submit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    // Validate passwords
    // if (!validatePassword(currentPassword)) {
    //   newErrors.currentPassword = "Current password must include at least one uppercase letter, one number, and one special character.";
    // }

    // if (!validatePassword(newPassword)) {
    //   newErrors.newPassword = "New password must include at least one uppercase letter, one number, and one special character.";
    // }

    if (!currentPassword) {
      newErrors.currentPassword = "The password is required.";
    }

    if (!newPassword) {
      newErrors.newPassword = "The New password is required.";
    }

    if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (Object.keys(newErrors).length === 0) {
      // No validation errors, call the API
      handleChangePassword();
    } else {
      setErrors(newErrors);
    }
  };

  const handleChangePassword = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    // Define headers as in the Postman example
    const myHeaders = new Headers();
    myHeaders.append("X-Custom-Token", token);
    myHeaders.append("Content-Type", "application/json");

    // Prepare request options as in the Postman example
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        old_password: currentPassword,
        new_password: newPassword
      }),
      redirect: "follow"
    };

    try {
      // Call the API
      const response = await fetch("http://lab.app2serve.com/public/api/update-password", requestOptions);
      const result = await response.json();
      console.log('result',result);
      console.log('response',result);

      if (result.status) {
        setSuccessMessage("Password changed successfully!");
        setTimeout(() => {
          window.location.href = '/profile';
        }, 2000);
      } else {
        setErrorMessage(result.message || "Failed to change password. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <PageHeader withSocialComponent={0} title="Change Password" page="Change Password" />
      <section className="account padding-top padding-bottom sec-bg-color2">
        <div className="container">
          <div
            className="account__wrapper"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="account__content account__content--style1">
                  <div className="account__header">
                    <h2>Change Your Password</h2>
                    <p>
                      Hey there! Here you can change your password
                    </p>
                  </div>

                  <form
                    className="account__form needs-validation"
                    noValidate
                    onSubmit={submit}
                  >
                    <div className="row g-4">
                      <div className="col-12">
                        <div>
                          <label htmlFor="current-password" className="form-label">
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="current-password"
                            placeholder="Enter your current password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            required
                          />
                          {errors.currentPassword && (
                            <div className="text-danger">{errors.currentPassword}</div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div style={{ marginTop: 5 }} className="row g-4">
                      <div className="col-12">
                        <div>
                          <label htmlFor="new-password" className="form-label">
                            New Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="new-password"
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                          />
                          {errors.newPassword && (
                            <div className="text-danger">{errors.newPassword}</div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div style={{ marginTop: 5 }} className="row g-4">
                      <div className="col-12">
                        <div>
                          <label htmlFor="confirm-password" className="form-label">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="confirm-password"
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                          />
                          {errors.confirmPassword && (
                            <div className="text-danger">{errors.confirmPassword}</div>
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="trk-btn trk-btn--border trk-btn--primary d-block mt-4"
                    >
                      Change Password
                    </button>
                    
                    {successMessage && (
                      <div className="text-success mt-3">{successMessage}</div>
                    )}
                    {errorMessage && (
                      <div className="text-danger mt-3">{errorMessage}</div>
                    )}
                  </form>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="account__shape">
          <span className="account__shape-item account__shape-item--1">
            <img src="/images/contact/4.png" alt="shape-icon" />
          </span>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ResetPass;
