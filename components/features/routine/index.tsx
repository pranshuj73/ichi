"use client"

import Link from "next/link";
import { Button } from "../../ui/button";
import Container from "../../ui/container";
import { PlusIcon } from "lucide-react";
import { Card, CardContent, CardTitle } from "../../ui/card";
import { useState } from "react";
import Nav from "@/components/nav";
import RoutineList from "./list";


export default function Routine() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Container className="flex flex-col items-center">
      <h1 className="text-3xl mb-12">🌟 Ichi</h1>
      <RoutineList />

      <Nav />
    </Container>
  )
}