import {
  Phone,
  Video,
  MoreVertical,
  Smile,
  SendHorizontal,
  Paperclip,
} from "lucide-react";

const messages = [
  {
    id: 1,
    sender: "other",
    text: "Hey! How are you?",
    time: "10:15 AM",
  },
  {
    id: 2,
    sender: "me",
    text: "I'm good. Working on Charcha 😎",
    time: "10:16 AM",
  },
  {
    id: 3,
    sender: "other",
    text: "Looks awesome!",
    time: "10:17 AM",
  },
];

const MessageContainer = () => {
  return (
    <div className="flex-1 flex flex-col h-screen bg-base-100">
      {/* Header */}
      <div className="h-18 px-6 border-b border-base-300 flex items-center justify-between bg-base-200">
        <div className="flex items-center gap-3">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img
                src="https://i.pravatar.cc/150?img=3"
                alt="user"
              />
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-lg">
              Priya Sharma
            </h2>

            <p className="text-sm text-green-500">
              Online
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="btn btn-ghost btn-circle">
            <Phone size={20} />
          </button>

          <button className="btn btn-ghost btn-circle">
            <Video size={20} />
          </button>

          <button className="btn btn-ghost btn-circle">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat ${
              message.sender === "me"
                ? "chat-end"
                : "chat-start"
            }`}
          >
            <div className="chat-bubble">
              {message.text}
            </div>

            <div className="chat-footer opacity-60 text-xs mt-1">
              {message.time}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-base-300 bg-base-200">
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost btn-circle">
            <Smile size={20} />
          </button>

          <button className="btn btn-ghost btn-circle">
            <Paperclip size={20} />
          </button>

          <input
            type="text"
            placeholder="Type a message..."
            className="input input-bordered flex-1"
          />

          <button className="btn btn-primary btn-circle">
            <SendHorizontal size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;