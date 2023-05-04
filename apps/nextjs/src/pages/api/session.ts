import type { NextApiRequest, NextApiResponse } from "next";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

const getSession = async (req: NextApiRequest, res: NextApiResponse) => {
  const supabase = createServerSupabaseClient({ req, res });

  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    res.status(401).json({ error: "Not authenticated" });
    return;
  }

  // The session object should contain the access token
  res.status(200).json({ access_token: session.access_token });
};

export default getSession;
