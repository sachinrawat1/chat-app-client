import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Users, Lock, Zap, Globe, Video, Smartphone, Cloud } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
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
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Button asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Connect Globally with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Nexus Chat</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Experience seamless communication across borders. Join millions in the next generation of instant messaging.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" asChild>
              <Link href="/register">Get Started for Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </section>

        <section id="features" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Millions Choose Nexus Chat</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Global Reach", description: "Connect with anyone, anywhere in the world", icon: Globe },
              { title: "Instant Messaging", description: "Real-time communication with zero lag", icon: Zap },
              { title: "Secure Encryption", description: "End-to-end encryption for all messages", icon: Lock },
              { title: "Group Collaboration", description: "Create and manage large group chats effortlessly", icon: Users },
              { title: "Video Calls", description: "Crystal clear video conferencing", icon: Video },
              { title: "Mobile Friendly", description: "Seamless experience across all devices", icon: Smartphone },
              { title: "Cloud Sync", description: "Access your chats from any device, anytime", icon: Cloud },
              { title: "Smart Notifications", description: "Stay updated without being overwhelmed", icon: MessageCircle },
            ].map((feature, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <feature.icon className="h-8 w-8 mb-2 text-indigo-500" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="testimonials" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex Johnson", role: "CEO, TechCorp", quote: "Nexus Chat has revolutionized our team communication. It's fast, reliable, and secure." },
              { name: "Samantha Lee", role: "Digital Nomad", quote: "I can stay connected with my clients from anywhere in the world. Nexus Chat is a game-changer!" },
              { name: "Mohammed Al-Fayed", role: "University Student", quote: "Group projects have never been easier. Nexus Chat's collaboration features are unmatched." },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <p className="text-gray-600 italic mb-4">&quot;{testimonial.quote}&quot;</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* <section id="pricing" className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Simple, Transparent Pricing</h2>
          <div className="flex justify-center space-x-8">
            <Card className="w-72">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <CardDescription>For personal use</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold mb-4">$0<span className="text-lg font-normal">/month</span></p>
                <ul className="text-left space-y-2">
                  <li>✓ Unlimited messages</li>
                  <li>✓ Group chats up to 100 people</li>
                  <li>✓ 1GB file storage</li>
                </ul>
              </CardContent>
              <Button className="mt-4 w-full">Get Started</Button>
            </Card>
            <Card className="w-72 border-indigo-500 border-2">
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>For teams and businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold mb-4">$9.99<span className="text-lg font-normal">/month</span></p>
                <ul className="text-left space-y-2">
                  <li>✓ Everything in Free</li>
                  <li>✓ Unlimited group size</li>
                  <li>✓ 100GB file storage</li>
                  <li>✓ Advanced admin controls</li>
                </ul>
              </CardContent>
              <Button className="mt-4 w-full">Upgrade to Pro</Button>
            </Card>
          </div>
        </section> */}

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to connect with the world?</h2>
          <Button size="lg" asChild>
            <Link href="/register">Join Nexus Chat Now</Link>
          </Button>
        </section>
      </main>

      <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Nexus Chat</span>
          </div>
          <nav className="flex flex-wrap gap-4 mt-4 sm:mt-0">
            <Link href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
          </nav>
          <p className="w-full sm:w-auto mt-4 sm:mt-0 text-center sm:text-left text-gray-500">
            &copy; 2023 Nexus Chat. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

