import { useForm, ValidationError } from "@formspree/react"
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import Swal from 'sweetalert2';

const Contacts = () => {
    const [state, handleSubmit] = useForm("xdknzwoj");
    
    const showAlert = () => {
      Swal.fire({
        title: 'Message Sent!',
        text: 'Thank you for reaching out. Your message has been successfully sent, and I will get back to you as soon as possible.',
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
      confirmButton: 'bg-blue-500 text-white rounded px-4 py-2'
    }
      });
    };

    if (state.succeeded) {
      showAlert();

      const contactForm = document.getElementById("contact-form") as HTMLFormElement
      if (contactForm){
        contactForm.reset();
      }
    }

    return (<>
    <div id="contact" className="flex justify-center pt-20 pb-20 h-[100%] gap-4 2xl:pr-[20rem] 2xl:pl-[20rem]">
        <Card className="w-[75%] rounded bg-white text-white">
      <CardHeader>
        <CardTitle className="text-[#023047]">Do you have questions or inquiries ?</CardTitle>
        <CardDescription className="text-[#023047]">Let me know by sending an email, I'll get in to you in a bit.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="grid w-full items-center">
            <div className="flex flex-col space-y-1.5 gap-4">
              <Input id="title" className="text-[#023047]" placeholder="Subject" required/>
              <Input id="email" type="email" name="email" className="text-[#023047]" placeholder="Email" required/>
              <ValidationError 
                prefix="Email" 
                field="email:"
                errors={state.errors}
              />
              <Textarea id='message' name='message' className="text-[#023047] w-[100%] h-64 rounded resize-none" placeholder="Type your message here."/>
              <ValidationError 
                prefix="Message" 
                field="message:"
                errors={state.errors}
              />
            </div>
          </div> 
          <div className="flex justify-end pt-4">         
        <Button variant="outline" type="submit" disabled={state.submitting} className="rounded text-[#023047] flex ">Submit</Button>
          </div>
        </form>
      </CardContent>
    </Card></div>
    </>)
}

export default Contacts;