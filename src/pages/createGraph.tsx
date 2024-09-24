import { useCallback, useRef } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  Controls,
  useNodesState,
  useEdgesState,
  useReactFlow,
  addEdge,
  Background,
  ColorMode,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

// import "./index.css";
import { DnDProvider, useDnD } from "@/context/dnd-context";
import { RightSidebar } from "@/components/react-flow-tuto/right sidebar/right-sidebar";
import { useTheme } from "@/components/themeProvider/Theme-provider";
import { MenuNode } from "@/components/react-flow-tuto/menuNode";
import { DrawerNode } from "@/components/react-flow-tuto/drawerNode";

const initialNodes = [
  // {
  //   id: "1",
  //   type: "input",
  //   data: { label: "input node" },
  //   position: { x: 250, y: 5 },
  // },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

function CreateGraph() {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const [type] = useDnD();

  const nodeTypes = {
    menu: MenuNode,
    drawer: DrawerNode,
  };

  const { theme } = useTheme();
  const colorMode: ColorMode =
    theme === "dark"
      ? "dark"
      : theme === "light"
      ? "light"
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      if (!type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes, type]
  );

  return (
    <div className="w-full h-full flex ">
      <div className="w-full h-full " ref={reactFlowWrapper}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          fitView
          colorMode={colorMode}
          nodeTypes={nodeTypes}
        >
          <Controls />
          <Background />
        </ReactFlow>
      </div>
      <RightSidebar />
    </div>
  );
}

function CreateGraphWithProvider() {
  return (
    <ReactFlowProvider>
      <CreateGraph />
    </ReactFlowProvider>
  );
}

export default function CreateGraphPage() {
  return (
    <DnDProvider>
      <CreateGraphWithProvider />
    </DnDProvider>
  );
}
