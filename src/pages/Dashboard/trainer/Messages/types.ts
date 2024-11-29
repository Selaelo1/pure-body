export interface Contact {
  id: string;
  name: string;
  image: string;
  lastMessage: string;
  lastMessageTime: string;
}

export interface Message {
  content: string;
  sent: boolean;
}