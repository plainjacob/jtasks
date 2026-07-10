"use client";

import { useState, useEffect } from "react";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema } from "@/app/schemas/task";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "../ui/button";
import { SquarePen } from "lucide-react";
import { Tables } from "@/lib/supabase";
import { getTaskById, updateTaskAction } from "@/app/actions";

type EditTaskDialogProps = {
  taskId: Tables<"tasks">["id"];
};

export default function EditTaskDialog({ taskId }: EditTaskDialogProps) {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    async function fetchTask() {
      const task = await getTaskById(taskId);

      form.reset({
        title: task?.title ?? "",
        description: task?.description ?? "",
      });
    }

    fetchTask();
  }, [form, taskId]);

  async function onSubmit(data: z.infer<typeof taskSchema>) {
    setOpen(false);
    updateTaskAction(taskId, data);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={buttonVariants({ variant: "secondary" })}>
        <SquarePen />
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="title">Title</FieldLabel>
                  <Input
                    {...field}
                    id="title"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="description">Description</FieldLabel>
                  <Textarea
                    {...field}
                    id="description"
                    rows={6}
                    className="min-h-24 resize-none"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Field orientation="horizontal">
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
              >
                Reset
              </Button>
              <Button type="submit">Edit</Button>
            </Field>
          </form>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
