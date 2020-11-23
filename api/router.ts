import {
  createRouter,
  contentTypeFilter,
} from "https://servestjs.org/@v1.1.6/mod.ts";
import {
  getAllPosts,
} from "./controllers/postsController.ts";

export const routes = () => {
  const router = createRouter();

  router.get("posts", getAllPosts);

  return router;
};
