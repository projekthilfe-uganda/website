import { defineConfig } from "tinacms";

import Pages from "./collections/pages";

import { article_with_pictureFields } from "./templates";
import { articleFields } from "./templates";
import { picture_sliderFields } from "./templates";
import { linklistFields } from "./templates";
import { newsFields } from "./templates";
import { pageFields } from "./templates";
import { galleryFields } from "./templates";
import { teaser_blockFields } from "./templates";
import { shop_itemFields } from "./templates";

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
      {
        format: "md",
        label: "Pages Old",
        name: "pages_old",
        path: "content",
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
          ...pageFields(),
        ],
      },
      {
        format: "md",
        label: "Home",
        name: "home",
        path: "content/home",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...articleFields(),
            ],
            label: "article",
            name: "article",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...linklistFields(),
            ],
            label: "links",
            name: "links",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...teaser_blockFields(),
            ],
            label: "picture-teaser",
            name: "picture_teaser",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...galleryFields(),
            ],
            label: "picture-gallery",
            name: "picture_gallery",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...picture_sliderFields(),
            ],
            label: "carousel",
            name: "carousel",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...article_with_pictureFields(),
            ],
            label: "article-with-picture",
            name: "article_with_picture",
          },
        ],
      },
      {
        format: "md",
        label: "Unser Verein",
        name: "unser_verein",
        path: "content/verein",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...articleFields(),
            ],
            label: "article",
            name: "article",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...linklistFields(),
            ],
            label: "links",
            name: "links",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...teaser_blockFields(),
            ],
            label: "picture-teaser",
            name: "picture_teaser",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...galleryFields(),
            ],
            label: "picture-gallery",
            name: "picture_gallery",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...picture_sliderFields(),
            ],
            label: "carousel",
            name: "carousel",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...article_with_pictureFields(),
            ],
            label: "article-with-picture",
            name: "article_with_picture",
          },
        ],
      },
      {
        format: "md",
        label: "Unsere Projekte",
        name: "unsere_projekte",
        path: "content/projekte",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...articleFields(),
            ],
            label: "article",
            name: "article",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...linklistFields(),
            ],
            label: "links",
            name: "links",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...teaser_blockFields(),
            ],
            label: "picture-teaser",
            name: "picture_teaser",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...galleryFields(),
            ],
            label: "picture-gallery",
            name: "picture_gallery",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...picture_sliderFields(),
            ],
            label: "carousel",
            name: "carousel",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...article_with_pictureFields(),
            ],
            label: "article-with-picture",
            name: "article_with_picture",
          },
        ],
      },
      {
        format: "md",
        label: "So können Sie Helfen",
        name: "so_k_nnen_sie_helfen",
        path: "content/helfen",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...articleFields(),
            ],
            label: "article",
            name: "article",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...linklistFields(),
            ],
            label: "links",
            name: "links",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...teaser_blockFields(),
            ],
            label: "picture-teaser",
            name: "picture_teaser",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...galleryFields(),
            ],
            label: "picture-gallery",
            name: "picture_gallery",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...picture_sliderFields(),
            ],
            label: "carousel",
            name: "carousel",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...article_with_pictureFields(),
            ],
            label: "article-with-picture",
            name: "article_with_picture",
          },
        ],
      },
      {
        format: "md",
        label: "Aktuelles",
        name: "aktuelles",
        path: "content/news",
        frontmatterFormat: "toml",
        frontmatterDelimiters: "+++",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...newsFields(),
        ],
      },
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
