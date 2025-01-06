import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { XIcon } from "lucide-react";

export default function Modal({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: (isOpen: boolean) => void}) {
  return (
    <div className={isOpen ? `absolute w-full h-full top-0 left-0 flex items-center justify-center overflow-hidden z-40 backdrop-blur-xl transition-all duration-300 ease-in` : 'hidden'}>
      <Button className="absolute z-50 top-12 right-0" size={"icon"} onClick={() => setIsOpen(false)}>
        <XIcon />
      </Button>

      <Card className="z-50">
        <CardHeader>
          <CardTitle>Create a new routine</CardTitle>
          <CardDescription>Start</CardDescription>
        </CardHeader> 
        <CardContent>
          <p>sdhashdkjashdkjashkjdhaskjhdkjashdkjashkdhakshdaksjhdkajsh</p>
        </CardContent>
      </Card>
    </div>
  )
}