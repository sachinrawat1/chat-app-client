
import CallToAction from '@/components/ui/call-to-action'
import Features from '@/components/ui/features'
import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'
import Hero from '@/components/ui/hero'

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <Header  />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

