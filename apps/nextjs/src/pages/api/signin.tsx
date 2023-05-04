import { useEffect, useState } from "react";

interface SessionResponse {
  access_token: string;
}

//{ accessToken }: { accessToken: string }

export default function AuthRedirect() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/session", {
          method: "GET",
          credentials: "include", // Include cookies
        });
        const data = (await response.json()) as SessionResponse;
        setAccessToken(data.access_token);
      } catch (error) {
        console.error(error);
      }
    };

    void fetchSession();
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        {accessToken ? (
          <div>SignIn success, you can open the extension</div>
        ) : (
          <div>What are you doing here?</div>
        )}
      </div>
    </div>
  );
}
