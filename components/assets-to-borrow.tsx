"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Info } from "lucide-react"

interface AssetsToBorrowProps {
  isConnected: boolean
  onConnectClick: () => void
}

const borrowableAssets = [
  {
    symbol: "USDC",
    name: "USD Coin",
    available: "8,500",
    availableValue: "$8,500",
    apyVariable: "5.24%",
    apyStable: "—",
    icon: "🔵",
  },
  {
    symbol: "USDT",
    name: "Tether",
    available: "12,000",
    availableValue: "$12,000",
    apyVariable: "4.52%",
    apyStable: "—",
    icon: "🟢",
  },
  {
    symbol: "DAI",
    name: "Dai",
    available: "6,200",
    availableValue: "$6,200",
    apyVariable: "4.89%",
    apyStable: "—",
    icon: "🟡",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    available: "4.5",
    availableValue: "$7,425",
    apyVariable: "2.15%",
    apyStable: "—",
    icon: "🔷",
  },
  {
    symbol: "WBTC",
    name: "Wrapped Bitcoin",
    available: "0.12",
    availableValue: "$4,920",
    apyVariable: "0.85%",
    apyStable: "—",
    icon: "🟠",
  },
]

export function AssetsToBorrow({ isConnected, onConnectClick }: AssetsToBorrowProps) {
  return (
    <Card className="border-[#2d3348] bg-[#2d3348]/50">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg text-white">Assets to borrow</CardTitle>
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
                <th className="pb-3 font-medium">Available</th>
                <th className="pb-3 font-medium">
                  <div className="flex items-center gap-1">
                    APY, variable <Info className="h-3 w-3" />
                  </div>
                </th>
                <th className="pb-3 font-medium">
                  <div className="flex items-center gap-1">
                    APY, stable <Info className="h-3 w-3" />
                  </div>
                </th>
                <th className="pb-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {borrowableAssets.map((asset) => (
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
                        <div className="text-white">{asset.available}</div>
                        <div className="text-sm text-gray-400">{asset.availableValue}</div>
                      </>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="py-4 text-red-400">{asset.apyVariable}</td>
                  <td className="py-4 text-gray-400">{asset.apyStable}</td>
                  <td className="py-4">
                    {isConnected ? (
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-[#B6509E] to-[#2EBAC6] text-white hover:opacity-90"
                      >
                        Borrow
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
