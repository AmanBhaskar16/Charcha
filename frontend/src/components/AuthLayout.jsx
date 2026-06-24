import { MessageCircle } from "lucide-react";

export const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <div className="relative min-h-screen bg-base-100 flex items-center justify-center p-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.12),transparent_60%)]" />

      <div className="card w-full max-w-md bg-base-200/90 backdrop-blur-xl border border-primary/20 shadow-2xl">
        <div className="card-body">
          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="bg-primary/20 p-4 rounded-2xl">
              <MessageCircle className="size-8 text-primary" />
            </div>

            <h1 className="text-3xl font-bold text-center">
              {title}
            </h1>

            <p className="text-base-content/60 text-center">
              {subtitle}
            </p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};