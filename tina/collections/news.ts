import {Collection} from "tinacms";
import {blockTemplates} from "../templates/templates";

const News: Collection = {
  format: "md",
  label: "Aktuelles",
  name: "aktuelles",
  path: "content/news",
  templates: [
    {
      name: 'article',
      label: 'Header Article',
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
      ],
    },
    {
      name: 'news',
      label: 'News Article',
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
        {
          type: "object",
          name: "blocks",
          label: "News Blocks",
          list: true,
          templates: blockTemplates(),
        },
      ],
    },
  ],
};

export default News;
