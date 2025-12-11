import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"

interface BorrowSectionProps {
  isConnected: boolean
}

const borrowedAssets = [
  {
    symbol: "USDT",
    name: "Tether",
    debt: "2,000",
    value: "$2,000.00",
    apy: "4.52%",
    apyType: "Variable",
    icon: "🟢",
  },
]

export function BorrowSection({ isConnected }: BorrowSectionProps) {
  return (
    <Card className="border-[#2d3348] bg-[#2d3348]/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg text-white">Your borrows</CardTitle>
          {isConnected && (
            <div className="mt-1 flex items-center gap-4 text-sm">
              <span className="text-gray-400">
                Balance: <span className="text-white">$2,000.00</span>
              </span>
              <span className="text-gray-400">
                APY: <span className="text-red-400">4.52%</span>
              </span>
              <span className="text-gray-400">
                Borrow power used: <span className="text-white">32.8%</span>
              </span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {!isConnected ? (
          <div className="py-8 text-center text-gray-400">Please connect your wallet to see your borrows</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#3d4358] text-left text-sm text-gray-400">
                  <th className="pb-3 font-medium">Asset</th>
                  <th className="pb-3 font-medium">Debt</th>
                  <th className="pb-3 font-medium">
                    <div className="flex items-center gap-1">
                      APY <Info className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="pb-3 font-medium">APY type</th>
                  <th className="pb-3 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {borrowedAssets.map((asset) => (
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
                      <div className="text-white">{asset.debt}</div>
                      <div className="text-sm text-gray-400">{asset.value}</div>
                    </td>
                    <td className="py-4 text-red-400">{asset.apy}</td>
                    <td className="py-4">
                      <span className="rounded bg-[#3d4358] px-2 py-1 text-xs text-white">{asset.apyType}</span>
                    </td>
                    <td className="py-4">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-[#3d4358] bg-transparent text-white hover:bg-[#3d4358]"
                        >
                          Repay
                        </Button>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-[#B6509E] to-[#2EBAC6] text-white hover:opacity-90"
                        >
                          Borrow
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
