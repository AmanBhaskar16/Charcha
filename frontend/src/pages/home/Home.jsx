import EmptyChat from "../../components/EmptyChat";
import MessageContainer from "../../components/MessageContainer";
import UserSidebar from "../../components/UserSidebar";



const Home = () => {
  const selectedUser = true;

  return (
    <div className="flex h-screen bg-base-100">
      <UserSidebar />

      <main className="flex-1">
        {selectedUser ? (
          <MessageContainer />
        ) : (
          <EmptyChat/>
        )}
      </main>
    </div>
  );
};

export default Home;