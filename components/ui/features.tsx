import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Users, Lock, Zap } from 'lucide-react'

const features = [
  { title: "Real-time Messaging", description: "Instant message delivery for smooth conversations", icon: MessageCircle },
  { title: "Group Chats", description: "Create and manage group conversations easily", icon: Users },
  { title: "Secure & Private", description: "End-to-end encryption for all your messages", icon: Lock },
  { title: "Fast & Reliable", description: "Built with cutting-edge technology for speed", icon: Zap },
]

export default function Features() {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {features.map((feature, index) => (
        <Card key={index}>
          <CardHeader>
            <feature.icon className="h-8 w-8 mb-2 text-blue-500" />
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}

