"use client";

import Button from "@/component/ui/Button";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

import { FunctionComponent, useState } from "react";

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loginWithGoogle() {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center max-w-md space-y-8">
          <div className="flex flex-col items-center gap-8">
            logo
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <Button
            className="max-w-sm flex items-center justify-center gap-3 mx-auto w-full"
            isLoading={isLoading}
            variant={"default"}
            type="button"
            onClick={loginWithGoogle}
          >
            <FcGoogle />
            Google
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page;
