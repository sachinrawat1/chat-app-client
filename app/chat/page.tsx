'use client'

import { useState } from 'react'
import ChatList from '@/components/chat/chat-list'
import ChatWindow from '@/components/chat/chat-window'
import ChatInput from '@/components/chat/chat-input'

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null)

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/3 max-w-sm border-r border-gray-200">
        <ChatList onSelectChat={setSelectedChat} selectedChat={selectedChat} />
      </div>
      <div className="flex flex-col flex-1">
        {selectedChat ? (
          <>
            <ChatWindow chatId={selectedChat} />
            <ChatInput chatId={selectedChat} />
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  )
}

