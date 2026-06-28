"use client";

import { Doc } from "@/convex/_generated/dataModel";
import { Card, CardContent } from "../ui/card";
import { Check, Trash } from "lucide-react";
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
      <CardContent className="flex justify-between">
        <div>
          <h1 className="text-lg font-semibold">{title}</h1>
          <p>{description}</p>
        </div>
        {!completed && (
          <div className="flex gap-1">
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
              <Trash />
            </Button>
            <EditTaskDialog taskId={taskId} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
