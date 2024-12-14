import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/chesty/components/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/chesty/components/breadcrumb";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/chesty/components/tabs";

import { Label } from "./chesty/components/label";
import { CodeBlock } from "./chesty/components/code-block";
export default function Home() {
  return (
    <div className="w-full flex flex-col p-6">
      <div className="flex flex-col gap-0.5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl font-bold">Breadcrumb</h1>
        <Label className="mt-1">Name</Label>
      </div>

      <Tabs defaultValue="account" className="mt-4 ">
        <TabsList className="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="account"
            className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Account
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Password
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card className="flex flex-col gap-0.5">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
            </CardHeader>
            <CardDescription>Card Description</CardDescription>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <CodeBlock code={`<h1>Hello world</h1>`} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
