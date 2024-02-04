import { defineConfig } from "tinacms";

import Pages from "./collections/pages";

import { shop_itemFields } from "./templates";
import News from "./collections/news";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch: branch,

  // TODO: setup env variables on production? Needed?
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
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
      {
        format: "md",
        label: "Shop Intro",
        name: "shop_intro",
        path: "content/spenden",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "shop",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "type",
            label: "Type",
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "h1",
            label: "h1",
          },
          {
            type: "string",
            name: "h2",
            label: "h2",
          },
          {
            type: "string",
            name: "h3",
            label: "h3",
          },
          {
            type: "number",
            name: "order",
            label: "order",
            required: true,
          },
        ],
      },
      {
        format: "md",
        label: "Shop Items",
        name: "shop_items",
        path: "content/spenden/items",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...shop_itemFields(),
        ],
      },
    ],
  },
});
