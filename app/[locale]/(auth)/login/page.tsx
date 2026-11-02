import Image from "next/image";
import Background from "@/public/log-in-background.jpg";
import { Button } from "@/components/ui/button";
import { LoginForm } from "./components/login-form";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen overflow-hidden">
      <Image
        src={Background}
        alt="background"
        fill
        className="object-cover scale-105"
      />

      <div className="relative flex w-full items-center justify-end px-8 ">
        <div
          className="relative w-full max-w-lg p-10 rounded-[15px]
          backdrop-blur-[13px]
          text-white
          shadow-[0_20px_40px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.25)]
        "
        >
          <div className="absolute inset-0 rounded-2xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex flex-col w-full justify-center">
              <h1 className="text-3xl font-semibold mb-1">Welcome back</h1>

              <p className="text-base opacity-70 mb-15">
                Please enter your details to log in to your account.
              </p>
            </div>

            <LoginForm />

            <p className="text-sm text-center mt-6 opacity-70">
              {`Don't have an account?`}
              <Button variant="link" className="text-primary">
                Sign up
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
