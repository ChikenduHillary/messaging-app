import { FunctionComponent } from "react";
import Button from "@/component/ui/Button";

interface PageProps {}
 
const Page: FunctionComponent<PageProps> = () => {
    return <Button isLoading={false}>Hello</Button>;
}
 
export default Page;