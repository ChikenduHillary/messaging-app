import { FunctionComponent } from "react";
import Button from "@/component/ui/Button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

interface PageProps {}

const Page: FunctionComponent<PageProps> = async () => {
  const session = await getServerSession(authOptions);

  return <pre>{JSON.stringify(session)}</pre>;
};

export default Page;
