import { api } from "@/lib/api";
import { LoginFormValues } from "../schema/login.schema";

// export const loginApi = async (data: { phone: string; password: string }) => {
//   const res = await api.post("/auth/login", data);
//   return res.data;
// };


export async function loginApi(
  data: LoginFormValues
): Promise<any> {
  // 🔥 simulate network delay
  await new Promise((r) => setTimeout(r, 500))

  // 🔥 mock logic
  if (data.phone === "0123456789") {
    return {
      user: { id: "1", role: "admin", phone: "0123456789" },
      accessToken: "admin-token",
    }
  }

  if (data.phone === "0987654321") {
    return {
      user: { id: "2", role: "trainer", phone: "0987654321" },
      accessToken: "trainer-token",
    }
  }

  return {
    user: { id: "3", role: "member", phone: "0868729154" },
    accessToken: "member-token",
  }
}