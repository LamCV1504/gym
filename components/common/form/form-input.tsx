"use client";

import {
  FieldValues,
  Path,
  ControllerRenderProps,
  useFormContext,
} from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  placeholder?: string;
  type?: string;
};

export function FormInput<T extends FieldValues>({
  name,
  label,
  placeholder,
  type = "text",
}: Props<T>) {
  const { control } = useFormContext<T>();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }: { field: ControllerRenderProps<T, Path<T>> }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl className="mt-2">
            <Input {...field} placeholder={placeholder} type={type} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
