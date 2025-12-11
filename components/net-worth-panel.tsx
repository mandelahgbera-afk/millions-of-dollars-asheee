import { Card } from "@/components/ui/card"
import { TrendingUp, Info } from "lucide-react"

interface NetWorthPanelProps {
  isConnected: boolean
}

export function NetWorthPanel({ isConnected }: NetWorthPanelProps) {
  return (
    <Card className="border-[#2d3348] bg-[#2d3348]/50 p-6">
      <div className="grid gap-6 md:grid-cols-3">
        {/* Net Worth */}
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Net worth
            <Info className="h-4 w-4" />
          </div>
          <div className="mt-1 text-2xl font-semibold text-white">{isConnected ? "$12,450.32" : "$0.00"}</div>
        </div>

        {/* Net APY */}
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Net APY
            <Info className="h-4 w-4" />
          </div>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-2xl font-semibold text-white">{isConnected ? "2.45%" : "—"}</span>
            {isConnected && (
              <span className="flex items-center text-sm text-green-400">
                <TrendingUp className="mr-1 h-4 w-4" />
                +0.12%
              </span>
            )}
          </div>
        </div>

        {/* Health Factor */}
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            Health factor
            <Info className="h-4 w-4" />
          </div>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-2xl font-semibold text-green-400">{isConnected ? "2.85" : "—"}</span>
            {isConnected && (
              <div className="h-2 w-24 overflow-hidden rounded-full bg-[#1b2030]">
                <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-green-500 to-green-400" />
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
