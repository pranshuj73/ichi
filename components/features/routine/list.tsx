import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayIcon } from "lucide-react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  rectSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

const initialRoutineList = [
  {
    id: "1",
    name: "🌞 Morning Routine",
    description: "A routine to start your day",
  },
  {
    id: "2",
    name: "🌚 Evening Routine",
    description: "A routine to end your day",
  },
  {
    id: "3",
    name: "💪 Workout Routine",
    description: "A routine to keep you fit",
  },
];

type Routine = {
  id: string;
  name: string;
  description: string;
};

// Sortable Item Component
function SortableCard({ routine }: { routine: Routine }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: routine.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card className="flex flex-row items-center justify-between" ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <CardHeader>
        <CardTitle>{routine.name}</CardTitle>
        <CardDescription>{routine.description}</CardDescription>
      </CardHeader>
      <Button className="m-6" variant={"secondary"} size={"icon"}>
        <PlayIcon />
      </Button>
    </Card>
  );
}

// Main Component
export default function RoutineList() {
  const [routineList, setRoutineList] = useState(initialRoutineList);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = routineList.findIndex((item) => item.id === active.id);
    const newIndex = routineList.findIndex((item) => item.id === over.id);

    setRoutineList((items) => arrayMove(items, oldIndex, newIndex));
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={routineList} strategy={rectSortingStrategy}>
        {routineList.map((routine) => (
          <SortableCard key={routine.id} routine={routine} />
        ))}
      </SortableContext>
    </DndContext>
  );
}