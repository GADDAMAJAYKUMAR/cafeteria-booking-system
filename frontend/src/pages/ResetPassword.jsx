import React, { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1 = enter email, 2 = enter otp & new password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const sendOtp = async () => {
    setLoading(true);
    setError(null);
    setMessage(null);
    try {
      const res = await axios.post(`http://localhost:8081/api/auth/send-reset-otp?email=${encodeURIComponent(email)}`);
      setMessage(res.data.message || "OTP sent to your email.");
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async () => {
    setLoading(true);
    setError(null);
    setMessage(null);
    try {
      const res = await axios.post("http://localhost:8081/api/auth/reset-password", {
        email,
        otp,
        newPassword,
      });
      setMessage(res.data.message || "Password reset successful. You can now login.");
      setStep(1);
      setEmail("");
      setOtp("");
      setNewPassword("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>Forgot Password</h2>

      {step === 1 && (
        <>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={loading}
            style={{ width: "100%", marginBottom: 12, padding: 8 }}
          />
          <button onClick={sendOtp} disabled={loading || !email}>
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <label>OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            required
            disabled={loading}
            style={{ width: "100%", marginBottom: 12, padding: 8 }}
          />

          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
            required
            disabled={loading}
            style={{ width: "100%", marginBottom: 12, padding: 8 }}
          />

          <button onClick={resetPassword} disabled={loading || !otp || !newPassword}>
            {loading ? "Resetting Password..." : "Reset Password"}
          </button>
          <br />
          <button
            style={{ marginTop: 12, background: "none", border: "none", color: "blue", cursor: "pointer" }}
            onClick={() => {
              setStep(1);
              setOtp("");
              setNewPassword("");
              setMessage(null);
              setError(null);
            }}
            disabled={loading}
          >
            Back
          </button>
        </>
      )}

      {message && <p style={{ color: "green", marginTop: 12 }}>{message}</p>}
      {error && <p style={{ color: "red", marginTop: 12 }}>{error}</p>}
    </div>
  );
};

export default ForgotPassword;
