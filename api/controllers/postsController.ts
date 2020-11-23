import {
  ServerRequest,
} from "https://servestjs.org/@v1.1.6/mod.ts";

type PostPayload = {
  id: string;
  title: string;
  content: string;
};

export const getAllPosts = async (req: ServerRequest) => {
  await req.respond({
    status: 200,
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify(`{{ "id": "1", "title":"title", "content":"content" },}`),
  });
};
