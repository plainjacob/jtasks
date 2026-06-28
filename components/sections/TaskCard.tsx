"use client";

import { Doc } from "@/convex/_generated/dataModel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Check, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { completeTaskAction, deleteTaskAction } from "@/app/actions";

export default function TaskCard({
  _id,
  title,
  description,
  completed,
}: Doc<"tasks">) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        {!completed && (
          <div>
            <Button
              className={buttonVariants({ variant: "secondary" })}
              onClick={() => completeTaskAction(_id)}
            >
              <Check />
            </Button>
            <Button
              className={buttonVariants({ variant: "secondary" })}
              onClick={() => deleteTaskAction(_id)}
            >
              <X />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
