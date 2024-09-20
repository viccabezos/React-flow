type ActionType = "move" | "convert" | "flow" | "edit" | "write";

type Params = {
  type: "flow" | "type";
  typeParams: Record<string, string>;
  format: string;
  formatParams: string;
  mediaType: string;
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
