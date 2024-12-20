"use client"

import {
    Calendar 
  } from "@/app/chesty/components/calendar";
  import LayoutWithCard from "../_components/LayoutWithCard";
import { useState } from "react";
  export default function Page() {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
      <LayoutWithCard title="Breadcrumb">
        <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
      </LayoutWithCard>
    );
  }
  