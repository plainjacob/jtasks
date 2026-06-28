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
import EditTaskDialog from "./EditTaskDialog";

export default function TaskCard({
  _id: taskId,
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
              onClick={() => completeTaskAction(taskId)}
            >
              <Check />
            </Button>
            <Button
              className={buttonVariants({ variant: "secondary" })}
              onClick={() => deleteTaskAction(taskId)}
            >
              <X />
            </Button>
            <EditTaskDialog taskId={taskId} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
