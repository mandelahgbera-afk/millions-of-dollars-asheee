import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"

interface SupplySectionProps {
  isConnected: boolean
}

const suppliedAssets = [
  {
    symbol: "ETH",
    name: "Ethereum",
    balance: "2.5",
    value: "$4,125.00",
    apy: "1.82%",
    collateral: true,
    icon: "🔷",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    balance: "5,000",
    value: "$5,000.00",
    apy: "3.45%",
    collateral: true,
    icon: "🔵",
  },
]

export function SupplySection({ isConnected }: SupplySectionProps) {
  return (
    <Card className="border-[#2d3348] bg-[#2d3348]/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-lg text-white">Your supplies</CardTitle>
          {isConnected && (
            <div className="mt-1 flex items-center gap-4 text-sm">
              <span className="text-gray-400">
                Balance: <span className="text-white">$9,125.00</span>
              </span>
              <span className="text-gray-400">
                APY: <span className="text-green-400">2.64%</span>
              </span>
              <span className="text-gray-400">
                Collateral: <span className="text-white">$9,125.00</span>
              </span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {!isConnected ? (
          <div className="py-8 text-center text-gray-400">Please connect your wallet to see your supplies</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#3d4358] text-left text-sm text-gray-400">
                  <th className="pb-3 font-medium">Asset</th>
                  <th className="pb-3 font-medium">Balance</th>
                  <th className="pb-3 font-medium">
                    <div className="flex items-center gap-1">
                      APY <Info className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="pb-3 font-medium">
                    <div className="flex items-center gap-1">
                      Collateral <Info className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="pb-3 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {suppliedAssets.map((asset) => (
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
                      <div className="text-white">{asset.balance}</div>
                      <div className="text-sm text-gray-400">{asset.value}</div>
                    </td>
                    <td className="py-4 text-green-400">{asset.apy}</td>
                    <td className="py-4">
                      <div
                        className={`inline-flex h-5 w-9 items-center rounded-full ${asset.collateral ? "bg-green-500/20" : "bg-gray-500/20"} p-1`}
                      >
                        <div
                          className={`h-3 w-3 rounded-full transition-transform ${asset.collateral ? "translate-x-4 bg-green-400" : "bg-gray-400"}`}
                        />
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-[#3d4358] bg-transparent text-white hover:bg-[#3d4358]"
                        >
                          Withdraw
                        </Button>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-[#B6509E] to-[#2EBAC6] text-white hover:opacity-90"
                        >
                          Supply
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
