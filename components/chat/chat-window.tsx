import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Message {
  id: string
  senderId: string
  text: string
  timestamp: string
}

interface ChatWindowProps {
  chatId: string
}

const mockMessages: Message[] = [
  { id: '1', senderId: 'user', text: 'Hey, how are you?', timestamp: '10:00 AM' },
  { id: '2', senderId: 'other', text: 'I\'m good, thanks! How about you?', timestamp: '10:02 AM' },
  { id: '3', senderId: 'user', text: 'Doing well! Did you finish the project?', timestamp: '10:05 AM' },
  { id: '4', senderId: 'other', text: 'Yes, I just submitted it. Can you review it?', timestamp: '10:08 AM' },
]

export default function ChatWindow({ chatId }: ChatWindowProps) {
    console.log(chatId)
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {mockMessages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.senderId === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div className={`flex ${message.senderId === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end`}>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt={message.senderId} />
              <AvatarFallback>{message.senderId[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div
              className={`mx-2 px-4 py-2 rounded-lg ${
                message.senderId === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              <p>{message.text}</p>
              <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

