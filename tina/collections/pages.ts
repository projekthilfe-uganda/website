import { Collection } from "tinacms";
import { blockTemplates } from "../templates/templates";

const Pages: Collection = {
  name: "page",
  label: "Pages",
  path: "content/pages",
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
          // fields: [
          //   {
          //     type: "reference",
          //     label: "Block",
          //     name: "block",
          //     collections: ["block"],
          //   },
          // ],
          templates: blockTemplates(),
        }
      ],
    },
  ],
};

export default Pages;
