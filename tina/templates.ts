import type { TinaField } from "tinacms";
export function article_with_pictureFields() {
  return [
    {
      type: "string",
      name: "type",
      label: "Type",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "image",
      name: "picture",
      label: "Picture",
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
      options: ["pic-right", "pic-left"],
      required: true,
    },
    {
      type: "number",
      name: "order",
      label: "order",
      required: true,
    },
  ] as TinaField[];
}
export function articleFields() {
  return [
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
  ] as TinaField[];
}
export function picture_sliderFields() {
  return [
    {
      type: "string",
      name: "type",
      label: "Type",
    },
    {
      type: "string",
      name: "name",
      label: "Name",
    },
    {
      type: "number",
      name: "order",
      label: "order",
      required: true,
    },
    {
      type: "object",
      name: "slides",
      label: "Slides",
      list: true,
      fields: [
        {
          type: "image",
          name: "picture",
          label: "Picture",
        },
        {
          type: "string",
          name: "text",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ] as TinaField[];
}
export function linklistFields() {
  return [
    {
      type: "string",
      name: "header",
      label: "header",
    },
    {
      type: "number",
      name: "order",
      label: "order",
      required: true,
    },
    {
      type: "string",
      name: "type",
      label: "type",
    },
    {
      type: "object",
      name: "links",
      label: "Links",
      list: true,
      fields: [
        {
          type: "string",
          name: "link",
          label: "Link",
        },
        {
          type: "string",
          name: "text",
          label: "Text",
        },
        {
          type: "boolean",
          name: "open_in_new_tab",
          label: "open in new tab",
        },
      ],
    },
  ] as TinaField[];
}
export function newsFields() {
  return [
    {
      type: "string",
      name: "type",
      label: "Type",
    },
    {
      type: "string",
      name: "internal_name",
      label: "Internal Name",
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
  ] as TinaField[];
}
export function pageFields() {
  return [] as TinaField[];
}
export function galleryFields() {
  return [
    {
      type: "string",
      name: "type",
      label: "Type",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Gallery Title",
    },
    {
      type: "number",
      name: "order",
      label: "Order",
      required: true,
    },
    {
      type: "object",
      name: "pictures",
      label: "Pictures",
      list: true,
      fields: [
        {
          type: "image",
          name: "picture",
          label: "Picture",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "alt",
          label: "Alt Tag",
        },
      ],
    },
  ] as TinaField[];
}
export function teaser_blockFields() {
  return [
    {
      type: "string",
      name: "type",
      label: "Type",
    },
    {
      type: "string",
      name: "title",
      label: "Name",
    },
    {
      type: "number",
      name: "order",
      label: "order",
      required: true,
    },
    {
      type: "object",
      name: "teaser",
      label: "Teaser",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "text",
          label: "Text",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "picture",
          label: "Picture",
        },
      ],
    },
  ] as TinaField[];
}
export function shop_itemFields() {
  return [
    {
      type: "string",
      name: "type",
      label: "Type",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "identifier",
      label: "Identifier",
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
      type: "number",
      name: "order",
      label: "order",
      required: true,
    },
  ] as TinaField[];
}
export function shop_projectFields() {
  return [
    {
      type: "string",
      name: "type",
      label: "Type",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "identifier",
      label: "Identifier",
      required: true,
    },
    {
      type: "image",
      name: "picture",
      label: "Picture",
    },
    {
      type: "number",
      name: "order",
      label: "Order",
    },
  ] as TinaField[];
}
