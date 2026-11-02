"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormInput } from "@/components/common/form/form-input";
import { Form } from "@/components/common/form/form";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth-store";
import { useLogin } from "../hooks/use-login";
import { Button } from "@/components/ui/button";
import { LoginFormValues, loginSchema } from "@/services/schema/login.schema";

export function LoginForm() {
  const form = useForm<LoginFormValues>({
    defaultValues: { phone: "", password: "" },
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  const { mutateAsync, isPending } = useLogin();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await mutateAsync(data);

      setUser(res.user);

      document.cookie = `accessToken=${res.accessToken}; path=/`;
      document.cookie = `role=${res.user.role}; path=/`;

      router.push("/home");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Form form={form} onSubmit={onSubmit} className="flex flex-col gap-6">
      <FormInput name="phone" label="Phone" placeholder="Type your phone" />

      <FormInput
        name="password"
        label="Password"
        type="password"
        placeholder="Type your password"
      />

      <Button
        variant="gradient"
        type="submit"
        disabled={isPending}
        className="mt-4 w-full"
      >
        {isPending ? "Logging in..." : "Login"}
      </Button>
    </Form>
  );
}
