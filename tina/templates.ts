import type {Template, TinaField} from "tinacms";

export function shop_item() {
  return {
    name: 'shop_item',
    label: 'Shop Item',
    fields: shop_itemFields(),
  } as Template;
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
