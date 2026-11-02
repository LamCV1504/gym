import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "@/stores/auth-store";
import { loginApi } from "@/services/api/auth.api";
import { toast } from "sonner";

export function useLogin() {
  const setUser = useAuthStore((s) => s.setUser);

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      const user = data.user;
      setUser(user);
    },
    onError: () => {
      toast.error("Login failed");
    },
  });
}
