type ActionType = "move" | "convert" | "flow" | "edit" | "write";

type Format = "YUV" | "MP4" | "MP3";

type MediaType = "video" | "image" | "file";

type Params = {
  type: "flow" | "type";
  typeParams: Record<string, string>;
  format: Format;
  formatParams: string;
  mediaType: MediaType;
};

type Graph = {
  name: "string";
  //   params: Params;
  params: {
    actionType: ActionType;
    InParams: Params;
    OutParams: Params;
  };
};

export const graphs: Graph[] = [];
