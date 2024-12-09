import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlayIcon } from "lucide-react"

const routineList = [
  {
    id: 1,
    name: "🌞 Morning Routine",
    description: "A routine to start your day",
  },
  {
    id: 2,
    name: "🌚 Evening Routine",
    description: "A routine to end your day",
  },
  {
    id: 3,
    name: "💪 Workout Routine",
    description: "A routine to keep you fit",
  }
]

export default function RoutineList() {
  return (
    <div className="grid grid-cols-1 gap-4 w-full">
      {routineList.map(routine => (
        <Card className="flex flex-row items-center justify-between" key={routine.id}>
          <CardHeader>
            <CardTitle>{routine.name}</CardTitle>
            <CardDescription>{routine.description}</CardDescription>
          </CardHeader>
          <Button className="m-6" variant={"secondary"} size={"icon"}>
            <PlayIcon />
          </Button>
        </Card>
      ))}
    </div>
  )
}