import { defineConfig, TinaMediaStore } from "tinacms";

import Pages from "./collections/pages";
import News from "./collections/news";
import Menu from "./collections/menu";

// Tina Cloud lists media with CDN urls as src, which the media manager shows as copy link.
// Point them at the site's /uploads path instead (thumbnails stay on the CDN).
const list = TinaMediaStore.prototype.list;
TinaMediaStore.prototype.list = async function (options) {
  const res = await list.call(this, options);
  for (const item of res.items) {
    if (item.src) item.src = item.src.replace(/^https:\/\/assets\.tina\.io\/[^/]+\//, "/uploads/");
  }
  return res;
};

export default defineConfig({
  branch: "master",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      Pages,
      News,
      Menu,
    ],
  },
});
