import { authRouter } from "./router/auth";
import { exampleRouter } from "./router/example";
import { postRouter } from "./router/post";
import { topicRouter } from "./router/topic";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  post: postRouter,
  auth: authRouter,
  example: exampleRouter,
  topic: topicRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
