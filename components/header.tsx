"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Settings, MoreHorizontal } from "lucide-react"

interface HeaderProps {
  isConnected: boolean
  onConnectClick: () => void
}

export function Header({ isConnected, onConnectClick }: HeaderProps) {
  return (
    <header className="border-b border-[#2d3348] bg-[#1b2030]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center">
              <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none">
                <circle cx="16" cy="16" r="16" fill="url(#aave-gradient)" />
                <path d="M22.5 22H20.3L16 12.5L11.7 22H9.5L15 10H17L22.5 22Z" fill="white" />
                <defs>
                  <linearGradient id="aave-gradient" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="#B6509E" />
                    <stop offset="1" stopColor="#2EBAC6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-lg font-semibold text-white">Aave</span>
          </div>

          {/* Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            <Button variant="ghost" className="text-white hover:bg-[#2d3348]">
              Dashboard
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-400 hover:bg-[#2d3348] hover:text-white">
                  Markets <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border-[#2d3348] bg-[#2d3348]">
                <DropdownMenuItem className="text-white hover:bg-[#3d4358]">Ethereum</DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-[#3d4358]">Polygon</DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-[#3d4358]">Arbitrum</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" className="text-gray-400 hover:bg-[#2d3348] hover:text-white">
              Stake
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:bg-[#2d3348] hover:text-white">
              Governance
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-400 hover:bg-[#2d3348] hover:text-white">
                  More <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border-[#2d3348] bg-[#2d3348]">
                <DropdownMenuItem className="text-white hover:bg-[#3d4358]">FAQ</DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-[#3d4358]">Developers</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {/* Network Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-[#2d3348] bg-transparent text-white hover:bg-[#2d3348]">
                <div className="mr-2 h-5 w-5 rounded-full bg-[#627eea]" />
                Ethereum
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-[#2d3348] bg-[#2d3348]">
              <DropdownMenuItem className="text-white hover:bg-[#3d4358]">
                <div className="mr-2 h-5 w-5 rounded-full bg-[#627eea]" />
                Ethereum
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-[#3d4358]">
                <div className="mr-2 h-5 w-5 rounded-full bg-[#8247e5]" />
                Polygon
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white hover:bg-[#3d4358]">
                <div className="mr-2 h-5 w-5 rounded-full bg-[#28a0f0]" />
                Arbitrum
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Connect Wallet Button */}
          {isConnected ? (
            <Button className="bg-gradient-to-r from-[#B6509E] to-[#2EBAC6] text-white hover:opacity-90">
              0x1234...5678
            </Button>
          ) : (
            <Button
              onClick={onConnectClick}
              className="bg-gradient-to-r from-[#B6509E] to-[#2EBAC6] text-white hover:opacity-90"
            >
              Connect Wallet
            </Button>
          )}

          {/* Settings */}
          <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-[#2d3348] hover:text-white">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:bg-[#2d3348] hover:text-white md:hidden">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
