"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Info } from "lucide-react"

interface AssetsToSupplyProps {
  isConnected: boolean
  onConnectClick: () => void
}

const availableAssets = [
  {
    symbol: "ETH",
    name: "Ethereum",
    walletBalance: "5.2",
    walletValue: "$8,580",
    apy: "1.82%",
    collateral: true,
    icon: "🔷",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    walletBalance: "10,000",
    walletValue: "$10,000",
    apy: "3.45%",
    collateral: true,
    icon: "🔵",
  },
  {
    symbol: "WBTC",
    name: "Wrapped Bitcoin",
    walletBalance: "0.15",
    walletValue: "$6,150",
    apy: "0.52%",
    collateral: true,
    icon: "🟠",
  },
  {
    symbol: "DAI",
    name: "Dai",
    walletBalance: "2,500",
    walletValue: "$2,500",
    apy: "3.12%",
    collateral: true,
    icon: "🟡",
  },
  {
    symbol: "LINK",
    name: "Chainlink",
    walletBalance: "150",
    walletValue: "$2,250",
    apy: "0.85%",
    collateral: true,
    icon: "🔷",
  },
]

export function AssetsToSupply({ isConnected, onConnectClick }: AssetsToSupplyProps) {
  return (
    <Card className="border-[#2d3348] bg-[#2d3348]/50">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg text-white">Assets to supply</CardTitle>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search"
            className="w-48 border-[#3d4358] bg-[#1b2030] pl-9 text-white placeholder:text-gray-500"
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#3d4358] text-left text-sm text-gray-400">
                <th className="pb-3 font-medium">Asset</th>
                <th className="pb-3 font-medium">Wallet balance</th>
                <th className="pb-3 font-medium">
                  <div className="flex items-center gap-1">
                    APY <Info className="h-3 w-3" />
                  </div>
                </th>
                <th className="pb-3 font-medium">
                  <div className="flex items-center gap-1">
                    Can be collateral <Info className="h-3 w-3" />
                  </div>
                </th>
                <th className="pb-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {availableAssets.map((asset) => (
                <tr key={asset.symbol} className="border-b border-[#3d4358] last:border-0">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{asset.icon}</span>
                      <div>
                        <div className="font-medium text-white">{asset.symbol}</div>
                        <div className="text-sm text-gray-400">{asset.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    {isConnected ? (
                      <>
                        <div className="text-white">{asset.walletBalance}</div>
                        <div className="text-sm text-gray-400">{asset.walletValue}</div>
                      </>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="py-4 text-green-400">{asset.apy}</td>
                  <td className="py-4">
                    {asset.collateral ? (
                      <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="py-4">
                    {isConnected ? (
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-[#B6509E] to-[#2EBAC6] text-white hover:opacity-90"
                      >
                        Supply
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        onClick={onConnectClick}
                        variant="outline"
                        className="border-[#3d4358] bg-transparent text-white hover:bg-[#3d4358]"
                      >
                        Connect
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
