"use client"

import { useState, useEffect } from "react"

export function AaveEarnModal() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Show modal after dashboard loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500) // 1.5 second delay to ensure dashboard is rendered

    return () => clearTimeout(timer)
  }, [])

  const handleClaim = () => {
    if (isLoading || isSuccess) return

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 2000)
  }

  if (!isVisible) return null

  return (
    <>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1.1) rotate(5deg);
            opacity: 0.8;
          }
        }

        @keyframes shimmer {
          0% { transform: translate(-50%, -50%); }
          100% { transform: translate(50%, 50%); }
        }

        @keyframes pillFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(10px, -15px) scale(1.2); opacity: 1; }
        }

        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(-15px, -10px) scale(0.8); opacity: 0.8; }
        }

        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) scale(0.8); opacity: 0.5; }
          50% { transform: translate(8px, -20px) scale(1.1); opacity: 0.9; }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .aave-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.4s ease-out;
          z-index: 2147483647;
        }

        .aave-modal {
          background: #ffffff;
          border-radius: 24px;
          padding: 24px;
          width: 380px;
          max-width: 90vw;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
          animation: modalSlideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .aave-gradient-card {
          height: 180px;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 30%, #a78bfa 60%, #c4b5fd 100%);
        }

        .aave-gradient-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 30% 20%, rgba(139, 92, 246, 0.8) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(196, 181, 253, 0.6) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(124, 58, 237, 0.4) 0%, transparent 60%);
          animation: gradientShift 6s ease-in-out infinite;
        }

        .aave-gradient-card::after {
          content: '';
          position: absolute;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 70%
          );
          animation: shimmer 4s ease-in-out infinite;
        }

        .aave-address-pill {
          position: relative;
          z-index: 1;
          background: rgba(255, 255, 255, 0.95);
          padding: 14px 24px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          animation: pillFloat 3s ease-in-out infinite;
        }

        .aave-address-icon {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          font-weight: bold;
          flex-shrink: 0;
        }

        .aave-address-text {
          font-size: 15px;
          color: #1f2937;
          font-weight: 600;
          letter-spacing: 0.3px;
        }

        .aave-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          pointer-events: none;
        }

        .aave-particle:nth-child(1) {
          top: 20%;
          left: 15%;
          animation: float1 4s ease-in-out infinite;
        }

        .aave-particle:nth-child(2) {
          top: 60%;
          left: 80%;
          animation: float2 5s ease-in-out infinite;
        }

        .aave-particle:nth-child(3) {
          top: 80%;
          left: 25%;
          animation: float3 4.5s ease-in-out infinite;
        }

        .aave-interact-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .aave-interact-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .aave-interact-button:hover::before {
          opacity: 1;
        }

        .aave-interact-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(79, 70, 229, 0.4);
        }

        .aave-interact-button:active {
          transform: translateY(0);
        }

        .aave-interact-button span,
        .aave-interact-button svg {
          position: relative;
          z-index: 1;
        }

        .aave-interact-button svg {
          width: 20px;
          height: 20px;
        }

        .aave-interact-button.loading {
          cursor: not-allowed;
          opacity: 0.8;
        }

        .aave-interact-button.loading svg {
          animation: spin 1s linear infinite;
        }

        .aave-interact-button.success {
          background: linear-gradient(135deg, #10b981 0%, #34d399 100%) !important;
          cursor: default;
        }

        .aave-interact-button.success::before {
          display: none;
        }
      `}</style>

      <div className="aave-modal-overlay">
        <div className="aave-modal">
          <div className="aave-gradient-card">
            <div className="aave-particle" />
            <div className="aave-particle" />
            <div className="aave-particle" />
            <div className="aave-address-pill">
              <div className="aave-address-icon">A</div>
              <span className="aave-address-text">Aave Earn</span>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#111827",
                marginBottom: "8px",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              Aave Earn is live
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: isSuccess ? "#10b981" : "#6b7280",
                lineHeight: 1.5,
                marginBottom: "24px",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              {isSuccess
                ? "Aave Earn will be activated for your account once sync is complete. Welcome to the community!"
                : "Now get passive income with yields up to 8% - no gas fees, no bridging, no network switching required."}
            </p>
            <button
              className={`aave-interact-button ${isLoading ? "loading" : ""} ${isSuccess ? "success" : ""}`}
              onClick={handleClaim}
              disabled={isLoading || isSuccess}
            >
              {isLoading ? (
                <>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  <span>Processing Earn...</span>
                </>
              ) : isSuccess ? (
                <>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Process Initiated</span>
                </>
              ) : (
                <>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                  </svg>
                  <span>Launch Earn</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
