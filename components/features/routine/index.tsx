"use client"

import Link from "next/link";
import { Button } from "../../ui/button";
import Container from "../../ui/container";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import Nav from "@/components/nav";
import RoutineList from "./list";
import Modal from "@/components/commons/modal";


export default function Routine() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <Container className="flex flex-col items-center">
      <h1 className="text-3xl mb-12">🌟 Ichi</h1>
      <div className="grid grid-cols-1 w-full gap-4" suppressHydrationWarning>
        <RoutineList />
      </div>

      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>




      <Nav midBtnFunc={() => setIsModalOpen(true)} />
    </Container>
  )
}