import { MessageCircle, MessageCircleMore, Search } from "lucide-react";
import { useMemo, useState } from "react";

const dummyUsers = [
  {
    id: 1,
    name: "Aman",
    avatar: "https://i.pravatar.cc/150?img=1",
    online: true,
  },
  {
    id: 2,
    name: "Rahul",
    avatar: "https://i.pravatar.cc/150?img=2",
    online: false,
  },
  {
    id: 3,
    name: "Priya",
    avatar: "https://i.pravatar.cc/150?img=3",
    online: true,
  },
  {
    id: 4,
    name: "Neha",
    avatar: "https://i.pravatar.cc/150?img=4",
    online: false,
  },
];

const UserSidebar = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    return dummyUsers.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <aside className="w-80 h-screen bg-base-200 border-r border-base-300 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-base-300">
        <h2 className="text-xl font-bold text-primary flex items-center gap-2">
        <MessageCircleMore className="size-8 text-primary" />
          Charcha
        </h2>

        <label className="input input-bordered w-full mt-4">
          <Search size={18} />
          <input
            type="text"
            className="grow"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      {/* Users List */}
      <div className="flex-1 overflow-y-auto p-2 relative">
        {filteredUsers.map((user) => (
          <button
            key={user.id}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-base-300 transition text-left"
          >
            {/* Avatar */}
            <div className="avatar">
              <div className="w-12 rounded-full ">
                <img
                  src={user.avatar}
                  alt={user.name}
                />

                {user.online && (
                  <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-blackshadow-[0_0_10px_rgba(34,197,94,0.8)]"/>
                )}
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h3 className="font-medium">
                {user.name}
              </h3>

              <p className="text-sm text-base-content/60">
                {user.online ? "Online" : "Offline"}
              </p>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default UserSidebar;