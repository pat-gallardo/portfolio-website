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
import { Textarea } from "./ui/textarea"

const Contacts = () => {
    return (<>
    <div id="contact" className="flex justify-center pt-20 pb-20 h-[700px]">
        <Card className="w-[75%] rounded bg-white text-white">
      <CardHeader>
        <CardTitle className="text-[#023047]">Do you have questions or inquiries ?</CardTitle>
        <CardDescription className="text-[#023047]">Let me know by sending an email, I'll get in to you in a bit.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input id="title" className="text-[#023047]" placeholder="Subject" />
              <Input id="email" className="text-[#023047]" placeholder="Email" />
              <Textarea id='content' className="text-[#023047] w-[100%] h-64 rounded resize-none" placeholder="Type your message here." />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button variant="outline" className="rounded text-[#023047] flex ">Send</Button>
      </CardFooter>
    </Card></div>
    </>)
}

export default Contacts;