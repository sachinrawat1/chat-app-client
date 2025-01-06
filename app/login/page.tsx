'use client'

import {  useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginFormSchema } from '@/lib/schema'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'
import { loginApi } from '../api'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { setToken } from '../slices/authSlice'

type IFormInputs = z.infer<typeof loginFormSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter();
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: loginApi,
    onSuccess:(data)=>{
        toast.success(data.message)
        dispatch(setToken(data.token))
        router.push("/")
    },
    onError:(data)=>{
        toast.error(data.message)
    }
  })

  const {register , handleSubmit , formState:{errors}} = useForm<IFormInputs>({
    resolver:zodResolver(loginFormSchema)
  })

  const handleLogin: SubmitHandler<IFormInputs> = (data:IFormInputs) => {
    mutation.mutate(data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login to your account</CardTitle>
          <CardDescription>Enter your email or username and password to login</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(handleLogin)} >
          <CardContent className="space-y-4">
            <div className="space-y-2">
            <Label htmlFor="emailOrUsername">Email or Username</Label>
              <Input
                id="emailOrUsername"
                type="emailOrUsername"
                placeholder="john@example.com or johndoe"
                {...register("emailOrUsername")}
                autoComplete='username'
                 aria-hidden="true"
              />
               {errors.emailOrUsername && (
                <p className="text-red-500 text-sm">{errors.emailOrUsername.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                    autoComplete="current-password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </Button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" checked={rememberMe} onCheckedChange={(checked) => setRememberMe(checked as boolean)} />
              <Label htmlFor="remember" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Remember me
              </Label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full">Login</Button>
            <div className="flex justify-between w-full text-sm">
              <Link href="/forgot-password" className="text-blue-600 hover:underline">
                Forgot password?
              </Link>
              <Link href="/register" className="text-blue-600 hover:underline">
                Create an account
              </Link>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
