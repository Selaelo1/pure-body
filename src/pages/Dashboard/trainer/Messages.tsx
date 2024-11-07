import { motion } from "framer-motion";
import { Search, Send } from "lucide-react";

const Messages = () => {
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
                    index === 0 ? "bg-purple-50" : ""
                  }`}
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
            <div className="p-4 border-b">
              <div className="flex items-center space-x-3">
                <img
                  src={contacts[0].image}
                  alt={contacts[0].name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{contacts[0].name}</h3>
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

            <div className="p-4 border-t">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                />
                <button className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const contacts = [
  {
    id: 1,
    name: "Emma Watson",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastMessage: "See you tomorrow at 10 AM!",
    lastMessageTime: "2m ago",
  },
  {
    id: 2,
    name: "John Smith",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastMessage: "Thanks for the session today",
    lastMessageTime: "1h ago",
  },
];

const messages = [
  {
    content: "Hi Sarah, just confirming our session tomorrow at 10 AM?",
    sent: false,
  },
  {
    content: "Yes, I'll be there! Don't forget to bring your workout mat.",
    sent: true,
  },
  {
    content: "Perfect, thanks! Should I warm up before the session?",
    sent: false,
  },
  {
    content: "A light 5-minute cardio would be great. See you tomorrow!",
    sent: true,
  },
];

export default Messages;
