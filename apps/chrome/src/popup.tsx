import { TRPCProvider, api } from "./utils/api";
import { AuthProvider, signIn, signOut, useSession } from "./utils/auth";

function App() {
  const session = useSession();
  const { data: posts } = api.post.all.useQuery();

  return (
    <div>
      <div>
        <h1>Next.js + Chrome Extension</h1>
        {session?.token ? (
          <div>
            <p>Welcome {session.token}</p>
            <button onClick={signOut}>Sign out</button>
          </div>
        ) : (
          <button onClick={signIn}>Sign in</button>
        )}
      </div>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title} {post.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <AuthProvider>
      <TRPCProvider>
        <App />
      </TRPCProvider>
    </AuthProvider>
  );
}
