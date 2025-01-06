import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/register">Sign Up Now</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </section>
  )
}

