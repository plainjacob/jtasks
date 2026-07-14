"use client";

import { Card, CardContent } from "../ui/card";
import { Check, Trash } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import EditTaskDialog from "./EditTaskDialog";
import { completeTaskAction, deleteTaskAction } from "@/app/actions/task";
import { Tables } from "@/lib/supabase";
import { Badge } from "../ui/badge";

export default function TaskCard(task: Tables<"tasks">) {
  return (
    <Card>
      <CardContent className="flex justify-between">
        <div>
          <h1 className="text-lg font-semibold">{task.title}</h1>
          <p>{task.description}</p>
          {task.difficulty && (
            <Badge
              className={`${task.difficulty === "easy" ? "bg-green-500" : task.difficulty === "medium" ? "bg-amber-500" : "bg-red-600"} text-white`}
            >
              {task.difficulty!.charAt(0).toUpperCase() +
                task.difficulty!.slice(1)}
            </Badge>
          )}
        </div>

        {!task.archived_at && (
          <div className="flex gap-1">
            {!task.completed && (
              <>
                <Button
                  className={buttonVariants({ variant: "secondary" })}
                  onClick={() => completeTaskAction(task.id)}
                >
                  <Check />
                </Button>
                <EditTaskDialog {...task} />
              </>
            )}
            <Button
              className={buttonVariants({ variant: "secondary" })}
              onClick={() => deleteTaskAction(task.id)}
            >
              <Trash />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
