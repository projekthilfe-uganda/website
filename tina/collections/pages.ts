import { Collection } from "tinacms";
import { blockTemplates } from "../templates/templates";

const Pages: Collection = {
  name: "page",
  label: "Pages",
  path: "content",
  match: {
    exclude: "(news/**|spenden/**)",
  },
  templates: [
    {
      name: 'simple_page',
      label: 'Simple Page',
      fields: [
        {
          type: "rich-text",
          name: "body",
          label: "Body",
        },
      ]
    },
    {
      name: 'block_page',
      label: 'Block Page',
      fields: [
        {
          type: "object",
          name: "blocks",
          label: "Page Blocks",
          list: true,
          templates: blockTemplates(),
        }
      ],
    },
    {
      name: 'shop',
      label: 'Shop',
      fields: [
        {
          type: "string",
          name: "h1",
          label: "H1",
        },
        {
          type: "string",
          name: "h2",
          label: "H2",
        },
        {
          type: "string",
          name: "h3",
          label: "H3",
        },
        {
          type: "rich-text",
          name: "body",
        },
        {
          type: "object",
          name: "shopitems",
          label: "Shop Items",
          ui: {
            itemProps: (item) => {
              return {label: item?.title};
            }
          },
          list: true,
          fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
            },
            {
              type: "string",
              name: "identifier",
              label: "Identifier",
              description: "A unique identifier for technical use. Only use lowercase and underscore.",
              required: true,
            },
            {
              type: "image",
              name: "picture",
              label: "Picture",
            },
            {
              type: "number",
              name: "price",
              label: "Price",
              required: true,
            },
            {
              type: "rich-text",
              name: "description",
              label: "Description",
            },
          ],
        },
      ],
    },
  ],
};

export default Pages;
