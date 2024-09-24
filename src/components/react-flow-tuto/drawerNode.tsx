import { useState } from "react";
import { Drawer, DrawerContent, DrawerClose } from "@/components/ui/drawer";

export function DrawerNode({ id, data }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleNodeClick = () => {
    setIsDrawerOpen(true);
  };

  return (
    <div onClick={handleNodeClick}>
      <div>drawer node</div>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent>
          <DrawerClose />
          <div className="p-4">
            <h2 className="text-lg font-semibold">Node Details</h2>
            <p>ID: {id}</p>
            <p>Label: {data.label}</p>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
