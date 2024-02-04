import {Collection} from "tinacms";

const Shop: Collection = {
  format: "md",
  label: "Shop",
  name: "shop",
  path: "content",
  match: {
    include: "spenden.md"
  },
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
};

export default Shop;
