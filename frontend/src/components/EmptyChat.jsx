import { MessageCircleMore } from "lucide-react";

const EmptyChat = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-base-100">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="p-6 rounded-full bg-primary/10 border border-primary/20">
            <MessageCircleMore
              size={64}
              className="text-primary"
            />
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-3">
          Welcome to Charcha
        </h1>

        <p className="text-base-content/60">
          Select a conversation from the sidebar and start chatting instantly.
        </p>

        <div className="mt-8 flex justify-center gap-2">
          <div className="badge badge-primary">Real-time</div>
          <div className="badge badge-outline">Secure</div>
          <div className="badge badge-secondary">Fast</div>
        </div>
      </div>
    </div>
  );
};

export default EmptyChat;