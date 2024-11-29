import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ContactList from './ContactList';
import ChatView from './ChatView';
import { Contact, Message } from './types';

const Messages = () => {
  const location = useLocation();
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: '1',
      name: 'Emma Watson',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastMessage: 'See you tomorrow at 10 AM!',
      lastMessageTime: '2m ago',
    },
    {
      id: '2',
      name: 'John Smith',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lastMessage: 'Thanks for the session today',
      lastMessageTime: '1h ago',
    },
  ]);

  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showChat, setShowChat] = useState(false);

  // Handle trainer selection from location state
  useEffect(() => {
    const selectedTrainer = location.state?.selectedTrainer;
    if (selectedTrainer) {
      const trainerContact = {
        id: selectedTrainer.id,
        name: selectedTrainer.name,
        image: selectedTrainer.image,
        lastMessage: 'Start a conversation',
        lastMessageTime: 'Now',
      };

      // Add trainer to contacts if not already present
      if (!contacts.find((contact) => contact.id === trainerContact.id)) {
        setContacts((prev) => [trainerContact, ...prev]);
      }

      // Select the trainer's chat
      setSelectedContact(trainerContact);
      setShowChat(true);
    }
  }, [location.state]);

  const handleSelectContact = (contact: Contact) => {
    setSelectedContact(contact);
    setShowChat(true);
  };

  const handleSendMessage = (content: string) => {
    const message: Message = {
      content,
      sent: true,
    };

    setMessages((prev) => [...prev, message]);

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
        <div className="h-full lg:grid lg:grid-cols-3">
          {/* Contact List - Hidden on mobile when chat is shown */}
          <div
            className={`h-full border-r ${
              showChat ? 'hidden lg:block' : 'block'
            }`}
          >
            <ContactList
              contacts={contacts}
              onSelectContact={handleSelectContact}
            />
          </div>

          {/* Chat View - Hidden on mobile when showing contacts */}
          <div
            className={`h-full lg:col-span-2 ${
              showChat ? 'block' : 'hidden lg:block'
            }`}
          >
            {selectedContact ? (
              <ChatView
                contact={selectedContact}
                messages={messages}
                onSendMessage={handleSendMessage}
                onBack={() => setShowChat(false)}
              />
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