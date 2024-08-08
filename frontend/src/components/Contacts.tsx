import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const Contacts = () => {
    return (<>
    <div id="contact" className="flex justify-center pt-20 pb-20">
        <Card className="w-[75%] rounded bg-white">
      <CardHeader>
        <CardTitle>Do you have questions or inquiries ?</CardTitle>
        <CardDescription>Let me know by sending an email, I'll get in to you in a bit.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" className="rounded" placeholder="Name of your project" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" className="rounded">Cancel</Button>
        <Button variant="outline" className="rounded" >Deploy</Button>
      </CardFooter>
    </Card></div>
    </>)
}

export default Contacts;