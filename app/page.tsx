"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { NetWorthPanel } from "@/components/net-worth-panel"
import { SupplySection } from "@/components/supply-section"
import { BorrowSection } from "@/components/borrow-section"
import { AssetsToSupply } from "@/components/assets-to-supply"
import { AssetsToBorrow } from "@/components/assets-to-borrow"
import { WalletModal } from "@/components/wallet-modal"

export default function DashboardPage() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [showHtmlModal, setShowHtmlModal] = useState(false)

  const handleConnect = () => {
    setIsConnected(true)
    setIsWalletModalOpen(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHtmlModal(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#1b2030]">
      <div className={`transition-all duration-500 ${showHtmlModal ? "blur-md" : "blur-sm"}`}>
        <Header isConnected={isConnected} onConnectClick={() => setIsWalletModalOpen(true)} />

        <main className="mx-auto max-w-7xl px-4 py-6">
          <NetWorthPanel isConnected={isConnected} />

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <SupplySection isConnected={isConnected} />
              <AssetsToSupply isConnected={isConnected} onConnectClick={() => setIsWalletModalOpen(true)} />
            </div>

            <div className="space-y-6">
              <BorrowSection isConnected={isConnected} />
              <AssetsToBorrow isConnected={isConnected} onConnectClick={() => setIsWalletModalOpen(true)} />
            </div>
          </div>
        </main>

        <WalletModal open={isWalletModalOpen} onOpenChange={setIsWalletModalOpen} onConnect={handleConnect} />
      </div>

      {showHtmlModal && (
        <div className="fixed inset-0 z-[999999]">
          <iframe src="/aave-earn-modal.html" className="w-full h-full border-0" title="Aave Earn Modal" />
        </div>
      )}
    </div>
  )
}
