"use client";

import { UseFormReturn, FieldValues, FormProvider } from "react-hook-form";

type Props<T extends FieldValues> = {
  form: UseFormReturn<T>;
  onSubmit: (data: T) => void;
  children: React.ReactNode;
  className?: string;
};

export function Form<T extends FieldValues>({
  form,
  onSubmit,
  children,
  className,
}: Props<T>) {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
}
