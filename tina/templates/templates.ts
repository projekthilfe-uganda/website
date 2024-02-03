import type {Template, TinaField} from "tinacms";

export function blockTemplates() {
  return [
    articleTempl(),
    articleWithPictureTempl(),
    linklistTempl(),
    teaserBlockTempl(),
    galleryTempl(),
    pictureSliderTempl(),
  ] as Template[];
}

function articleTempl() {
  return {
    name: 'article',
    label: 'Article',
    ui: {
      itemProps: (item) => {
        return {label: item?.h1 != '' ? item?.h1 : (item?.h2 != '' ? item?.h2 : item?.h3)}
      },
    },
    fields: [
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
        type: "rich-text",
        name: "body",
        isBody: true,
      }
    ] as TinaField[],
  } as Template;
}

function articleWithPictureTempl() {
  return {
    name: 'picarticle',
    label: 'Article with Picture',
    ui: {
      itemProps: (item) => {
        return {label: item?.name}
      },
    },
    fields: [
      {
        type: "string",
        name: "name",
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
        type: "rich-text",
        name: "body",
      }
    ] as TinaField[],
  } as Template;
}

function pictureSliderTempl() {
  return {
    name: 'picture_slider',
    label: 'Picture Slider',
    ui: {
      itemProps: (item) => {
        return {label: item?.name}
      },
    },
    fields: [
      {
        type: "string",
        name: "name",
        label: "Name",
      },
      {
        type: "object",
        name: "slides",
        label: "Slides",
        ui: {
          itemProps: (item) => {
            return {label: item?.name}
          },
        },
        list: true,
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
          },
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
    ] as TinaField[],
  } as Template;
}

function linklistTempl() {
  return {
    name: 'linklist',
    label: 'Link List',
    ui: {
      itemProps: (item) => {
        return {label: item?.title}
      },
    },
    fields: [
      {
        type: "string",
        name: "title",
        label: "Title",
      },
      {
        type: "object",
        name: "links",
        label: "Links",
        ui: {
          itemProps: (item) => {
            return {label: item?.text}
          },
        },
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
    ] as TinaField[],
  } as Template;
}

function galleryTempl() {
  return {
    name: 'gallery',
    label: 'Gallery',
    ui: {
      itemProps: (item) => {
        return {label: item?.title}
      },
    },
    fields: [
      {
        type: "string",
        name: "title",
        label: "Gallery Title",
      },
      {
        type: "object",
        name: "pictures",
        label: "Pictures",
        ui: {
          itemProps: (item) => {
            return {label: item?.title}
          },
        },
        list: true,
        fields: [
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
            name: "alt",
            label: "Alt Tag",
          },
        ],
      },
    ] as TinaField[],
  } as Template;
}

function teaserBlockTempl() {
  return {
    name: 'teaserblock',
    label: 'Teaser Block',
    ui: {
      itemProps: (item) => {
        return {label: item?.name}
      },
    },
    fields: [
      {
        type: "string",
        name: "name",
        label: "Name",
      },
      {
        type: "object",
        name: "teaser",
        label: "Teaser",
        ui: {
          itemProps: (item) => {
            return {label: item?.name}
          },
        },
        list: true,
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
          },
          {
            type: "rich-text",
            name: "text",
            label: "Text",
          },
          {
            type: "image",
            name: "picture",
            label: "Picture",
          },
        ],
      },
    ] as TinaField[],
  } as Template;
}

function newsTempl() {
  return {
    name: 'news',
    label: 'News',
    fields: [
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
    ] as TinaField[],
  } as Template;
}

function shopItemTempl() {
  return {
    name: 'shop_item',
    label: 'Shop Item',
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
    ] as TinaField[],
  } as Template;
}

function shopProjectTempl() {
  return {
    name: 'shop_project',
    label: 'Shop Project',
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
        required: true,
      },
      {
        type: "image",
        name: "picture",
        label: "Picture",
      },
    ] as TinaField[],
  } as Template;
}

