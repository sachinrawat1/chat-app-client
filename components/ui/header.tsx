'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { MessageCircle, User, LogOut } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from 'react'



export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = localStorage.getItem('token')
      if(token){
        setIsLoggedIn(true)
      }
    }

    checkLoginStatus()
  }, [])

  const onLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
  }
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <MessageCircle className="h-8 w-8 text-indigo-600" />
          <span className="text-2xl font-bold text-gray-900">Nexus Chat</span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</Link>
          <Link href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
        </nav>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative w-8 h-8 rounded-full">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User avatar" />
                    <AvatarFallback><User size={16} /></AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                Login
              </Link>
              <Button asChild>
                <Link href="/register">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

