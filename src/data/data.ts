import { faker } from "@faker-js/faker";
import { Graph, ActionType, Format, MediaType } from "./typesGraphs";

// Define arrays with exact type values
const actionTypes: ActionType[] = ["move", "convert", "flow", "edit", "write"];
const formats: Format[] = ["YUV", "MP4", "MP3"];
const mediaTypes: MediaType[] = ["video", "image", "file"];

export const graphs: Graph[] = Array.from(
  { length: 10 },
  (): Graph => ({
    name: faker.word.noun(),
    params: {
      actionType: faker.helpers.arrayElement(actionTypes), // Ensures a valid ActionType
      InParams: {
        type: faker.helpers.arrayElement(["flow", "type"]),
        typeParams: {
          [faker.word.noun()]: faker.word.adjective(),
          [faker.word.noun()]: faker.word.adjective(),
        },
        format: faker.helpers.arrayElement(formats), // Ensures a valid Format
        formatParams: faker.lorem.word(),
        mediaType: faker.helpers.arrayElement(mediaTypes), // Ensures a valid MediaType
      },
      OutParams: {
        type: faker.helpers.arrayElement(["flow", "type"]),
        typeParams: {
          [faker.word.noun()]: faker.word.adjective(),
          [faker.word.noun()]: faker.word.adjective(),
        },
        format: faker.helpers.arrayElement(formats), // Ensures a valid Format
        formatParams: faker.lorem.word(),
        mediaType: faker.helpers.arrayElement(mediaTypes), // Ensures a valid MediaType
      },
    },
  })
);
