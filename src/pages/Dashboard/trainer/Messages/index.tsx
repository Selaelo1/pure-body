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
  const [isChatVisible, setIsChatVisible] = useState(false);

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

      if (!contacts.find((contact) => contact.id === trainerContact.id)) {
        setContacts((prev) => [trainerContact, ...prev]);
      }

      setSelectedContact(trainerContact);
      setIsChatVisible(true);
    }
  }, [location.state]);

  const handleSelectContact = (contact: Contact) => {
    setSelectedContact(contact);
    setIsChatVisible(true);
  };

  const handleBackToContacts = () => {
    setIsChatVisible(false);
  };

  const handleSendMessage = (content: string) => {
    const message: Message = {
      content,
      sent: true,
    };

    setMessages((prev) => [...prev, message]);

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
        <div className="h-full flex">
          <div
            className={`h-full ${
              isChatVisible ? 'hidden lg:block lg:w-1/3' : 'w-full'
            } border-r`}
          >
            <ContactList
              contacts={contacts}
              selectedContactId={selectedContact?.id}
              onSelectContact={handleSelectContact}
            />
          </div>

          <div
            className={`h-full ${
              isChatVisible ? 'flex-1' : 'hidden lg:block lg:w-2/3'
            }`}
          >
            {selectedContact ? (
              <ChatView
                contact={selectedContact}
                messages={messages}
                onSendMessage={handleSendMessage}
                onBack={handleBackToContacts}
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