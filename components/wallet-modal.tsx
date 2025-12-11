"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface WalletModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConnect: () => void
}

const wallets = [
  { name: "MetaMask", icon: "🦊", popular: true },
  { name: "Coinbase Wallet", icon: "🔵", popular: true },
  { name: "WalletConnect", icon: "🔗", popular: true },
  { name: "Rabby Wallet", icon: "🐰", popular: false },
  { name: "Trust Wallet", icon: "🛡️", popular: false },
  { name: "Rainbow", icon: "🌈", popular: false },
]

export function WalletModal({ open, onOpenChange, onConnect }: WalletModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-[#2d3348] bg-[#1b2030] text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Connect a wallet</DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-2">
          {wallets.map((wallet) => (
            <Button
              key={wallet.name}
              variant="ghost"
              onClick={onConnect}
              className="flex w-full items-center justify-between px-4 py-6 hover:bg-[#2d3348]"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{wallet.icon}</span>
                <span className="font-medium">{wallet.name}</span>
              </div>
              {wallet.popular && <span className="rounded bg-[#2d3348] px-2 py-1 text-xs text-gray-400">Popular</span>}
            </Button>
          ))}
        </div>

        <div className="mt-4 border-t border-[#2d3348] pt-4">
          <p className="text-center text-sm text-gray-400">
            By connecting a wallet, you agree to Aave Labs{" "}
            <a href="#" className="text-[#2EBAC6] hover:underline">
              Terms of Service
            </a>{" "}
            and consent to its{" "}
            <a href="#" className="text-[#2EBAC6] hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
