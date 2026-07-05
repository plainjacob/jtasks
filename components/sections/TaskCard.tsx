"use client";

import { Card, CardContent } from "../ui/card";
import { Check, Trash } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import EditTaskDialog from "./EditTaskDialog";
import { completeTaskAction, deleteTaskAction } from "@/app/actions";
import { Tables } from "@/lib/supabase";

export default function TaskCard({
  id: taskId,
  title,
  description,
  completed,
  archived_at,
}: Tables<"tasks">) {
  return (
    <Card>
      <CardContent className="flex justify-between">
        <div>
          <h1 className="text-lg font-semibold">{title}</h1>
          <p>{description}</p>
        </div>

        {!archived_at && (
          <div className="flex gap-1">
            {!completed && (
              <>
                <Button
                  className={buttonVariants({ variant: "secondary" })}
                  onClick={() => completeTaskAction(taskId)}
                >
                  <Check />
                </Button>
                <EditTaskDialog taskId={taskId} />
              </>
            )}
            <Button
              className={buttonVariants({ variant: "secondary" })}
              onClick={() => deleteTaskAction(taskId)}
            >
              <Trash />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
