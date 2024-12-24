'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, CheckCircle, XCircle } from 'lucide-react'
import Link from 'next/link'

export default function RegistrationConfirmationPage() {
  const [isResending, setIsResending] = useState(false)
  const [resendStatus, setResendStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // In a real application, you'd get this from the registration process or URL parameters
  const userEmail = "user@example.com"

  const handleResendEmail = async () => {
    setIsResending(true)
    setResendStatus('idle')

    try {
      // Simulate API call to resend verification email
      await new Promise(resolve => setTimeout(resolve, 2000))
      setResendStatus('success')
    } catch (error) {
        console.log(error)
      setResendStatus('error')
    } finally {
      setIsResending(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Check Your Email</CardTitle>
          <CardDescription>
            We&apos;ve sent a verification email to your registered address.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertDescription>
              An email has been sent to <strong>{userEmail}</strong>. Please check your inbox and click on the verification link to complete your registration.
            </AlertDescription>
          </Alert>
          {resendStatus === 'success' && (
            <Alert>
              <CheckCircle className="h-4 w-4 mr-2" />
              <AlertDescription>Verification email resent successfully.</AlertDescription>
            </Alert>
          )}
          {resendStatus === 'error' && (
            <Alert variant="destructive">
              <XCircle className="h-4 w-4 mr-2" />
              <AlertDescription>Failed to resend verification email. Please try again.</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button 
            onClick={handleResendEmail} 
            disabled={isResending}
            className="w-full"
          >
            {isResending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Resending...
              </>
            ) : (
              'Resend Verification Email'
            )}
          </Button>
          <div className="text-sm text-center">
            <Link href="/login" className="text-blue-600 hover:underline">
              Back to Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

