"use client";

import { Message } from "@/lib/validations/message";
import { FunctionComponent, useRef, useState } from "react";

interface MessagesProps {
  initialMessages: Message[];
}

const Messages: FunctionComponent<MessagesProps> = ({ initialMessages }) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const scrollDownRef = useRef<HTMLDivElement | null>(null);
  return (
    <div
      id="messages"
      className="flex h-full flex-col-reverse gap-4 p-3 overflow-y-auto scrollbar-w-2 scrollbar-track-blue-lighter scrollbar-thumb-blue scrollbar-thumb-rounded"
    >
      <div ref={scrollDownRef} />
    </div>
  );
};

export default Messages;
