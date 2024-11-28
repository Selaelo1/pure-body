/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Send } from "lucide-react";
import { useLocation } from "react-router-dom";

interface Contact {
  id: string;
  name: string;
  image: string;
  lastMessage: string;
  lastMessageTime: string;
}

interface Message {
  content: string;
  sent: boolean;
}

const Messages = () => {
  const location = useLocation();
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: "1",
      name: "Emma Watson",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastMessage: "See you tomorrow at 10 AM!",
      lastMessageTime: "2m ago",
    },
    {
      id: "2",
      name: "John Smith",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastMessage: "Thanks for the session today",
      lastMessageTime: "1h ago",
    },
  ]);

  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");

  // Handle trainer selection from location state
  useEffect(() => {
    const selectedTrainer = location.state?.selectedTrainer;
    if (selectedTrainer) {
      const trainerContact = {
        id: selectedTrainer.id,
        name: selectedTrainer.name,
        image: selectedTrainer.image,
        lastMessage: "Start a conversation",
        lastMessageTime: "Now",
      };

      // Add trainer to contacts if not already present
      if (!contacts.find((contact) => contact.id === trainerContact.id)) {
        setContacts((prev) => [trainerContact, ...prev]);
      }

      // Select the trainer's chat
      setSelectedContact(trainerContact);
    } else {
      setSelectedContact(contacts[0]);
    }
  }, [location.state]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      content: newMessage,
      sent: true,
    };

    setMessages((prev) => [...prev, message]);
    setNewMessage("");

    // Simulate reply after 1 second
    setTimeout(() => {
      const reply: Message = {
        content: "Thanks for reaching out! I'll get back to you soon.",
        sent: false,
      };
      setMessages((prev) => [...prev, reply]);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Messages</h1>

      <div className="bg-white rounded-lg shadow-md h-[calc(100vh-12rem)]">
        <div className="grid grid-cols-3 h-full">
          {/* Contacts List */}
          <div className="border-r">
            <div className="p-4 border-b">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="overflow-y-auto h-[calc(100%-73px)]">
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${
                    selectedContact?.id === contact.id ? "bg-purple-50" : ""
                  }`}
                  onClick={() => setSelectedContact(contact)}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={contact.image}
                      alt={contact.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">{contact.name}</h3>
                        <span className="text-xs text-gray-500">
                          {contact.lastMessageTime}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {contact.lastMessage}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-span-2 flex flex-col">
            {selectedContact ? (
              <>
                <div className="p-4 border-b">
                  <div className="flex items-center space-x-3">
                    <img
                      src={selectedContact.image}
                      alt={selectedContact.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{selectedContact.name}</h3>
                      <p className="text-sm text-gray-500">Active now</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.sent ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[70%] p-3 rounded-lg ${
                          message.sent
                            ? "bg-purple-600 text-white"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} className="p-4 border-t">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                    />
                    <button
                      type="submit"
                      className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                Select a conversation to start messaging
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
