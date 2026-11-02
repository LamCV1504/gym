"use client";

import {
  FieldValues,
  Path,
  useFormContext,
  ControllerRenderProps,
} from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  mode?: "single" | "multiple" | "range" | undefined;
};

export function FormDatePicker<T extends FieldValues>({
  name,
  label,
  mode,
}: Props<T>) {
  const { control } = useFormContext<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }: { field: ControllerRenderProps<T, Path<T>> }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <Calendar
              mode="single"
              selected={field.value}
              onSelect={field.onChange}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
