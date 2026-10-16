import {Collection} from "tinacms";

const Menu: Collection = {
  format: "yaml",
  label: "Menu",
  name: "menu",
  path: "data",
  match: {
    include: "menu",
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      type: "object",
      name: "items",
      label: "Menu Items",
      list: true,
      ui: {
        itemProps: (item) => {
          return {label: item?.name || item?.url};
        }
      },
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "string",
          name: "icon",
          label: "Icon",
          description: "Font Awesome icon class, e.g. fa-home",
        },
        {
          type: "string",
          name: "url",
          label: "URL",
          required: true,
        },
        {
          type: "object",
          name: "children",
          label: "Submenu",
          list: true,
          ui: {
            itemProps: (item) => {
              return {label: item?.name};
            }
          },
          fields: [
            {
              type: "string",
              name: "name",
              label: "Name",
            },
            {
              type: "string",
              name: "url",
              label: "URL",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default Menu;
