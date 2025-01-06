import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Plus, MoreVertical } from 'lucide-react'

type Chat = {
  id: string
  name: string
  avatar: string
  lastMessage: string
  timestamp: string
  unreadCount: number
}

const mockChats: Chat[] = [
  { id: '1', name: 'Alice Johnson', avatar: '/placeholder.svg?height=40&width=40', lastMessage: 'Hey, how are you?', timestamp: '10:30 AM', unreadCount: 2 },
  { id: '2', name: 'Bob Smith', avatar: '/placeholder.svg?height=40&width=40', lastMessage: 'Did you see the game last night?', timestamp: 'Yesterday', unreadCount: 0 },
  { id: '3', name: 'Carol Williams', avatar: '/placeholder.svg?height=40&width=40', lastMessage: 'Can we reschedule our meeting?', timestamp: 'Monday', unreadCount: 1 },
  { id: '4', name: 'David Brown', avatar: '/placeholder.svg?height=40&width=40', lastMessage: 'Thanks for your help!', timestamp: 'Sunday', unreadCount: 0 },
  { id: '5', name: 'Eva Martinez', avatar: '/placeholder.svg?height=40&width=40', lastMessage: 'Looking forward to our catch-up!', timestamp: 'Last week', unreadCount: 0 },
]

interface ChatListProps {
  onSelectChat: (chatId: string) => void
  selectedChat: string | null
}

export default function ChatList({ onSelectChat, selectedChat }: ChatListProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredChats = mockChats.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Chats</h2>
        <div className="relative">
          <Input
            type="text"
            placeholder="Search chats"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2">
          {filteredChats.map((chat) => (
            <Button
              key={chat.id}
              variant="ghost"
              className={`w-full justify-start px-4 py-3 mb-1 ${
                selectedChat === chat.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
              }`}
              onClick={() => onSelectChat(chat.id)}
            >
              <div className="flex items-center w-full">
                <Avatar className="mr-3 h-10 w-10">
                  <AvatarImage src={chat.avatar} alt={chat.name} />
                  <AvatarFallback>{chat.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <span className="font-semibold truncate">{chat.name}</span>
                    <span className="text-xs text-gray-500">{chat.timestamp}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                    {chat.unreadCount > 0 && (
                      <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1 ml-2">
                        {chat.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t border-gray-200 flex justify-between">
        <Button variant="outline" size="icon">
          <Plus className="h-4 w-4" />
          <span className="sr-only">New chat</span>
        </Button>
        <Button variant="outline" size="icon">
          <MoreVertical className="h-4 w-4" />
          <span className="sr-only">More options</span>
        </Button>
      </div>
    </div>
  )
}

