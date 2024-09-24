import { useDnD } from "@/context/dnd-context";
import { graphs } from "@/data/data";
import { cn } from "@/utils/utils";

export function RightSidebar() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setType] = useDnD();

  const onDragStart = (event, nodeType) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <aside className="bg-background shadow-md dark:shadow-zinc-800 gap-2 flex flex-col px-5">
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      {graphs.map((graph, index) => (
        <div
          key={index}
          className={cn(
            "dndnode border-2 rounded-md p-2 text-center",
            graph.nodeType === "drawer"
              ? "border-green-500"
              : "border-foreground"
          )}
          onDragStart={(event) => onDragStart(event, graph.name)}
          draggable
        >
          {graph.name}
        </div>
      ))}
    </aside>
  );
}
