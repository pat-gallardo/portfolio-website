import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Swal from "sweetalert2";

const Contacts = () => {
  const [state, handleSubmit] = useForm("xdknzwoj");

  const showAlert = () => {
    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for reaching out. Your message has been successfully sent, and I will get back to you as soon as possible.",
      icon: "success",
      confirmButtonText: "OK",
      background: "#1a1a2e",
      color: "#fff",
      customClass: {
        confirmButton:
          "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-xl px-6 py-2 border-none",
      },
    });
  };

  if (state.succeeded) {
    showAlert();
    const contactForm = document.getElementById(
      "contact-form"
    ) as HTMLFormElement;
    if (contactForm) {
      contactForm.reset();
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 py-20">
      <div className="max-w-2xl w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase glass text-amber-300 mb-4 border border-amber-500/20">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-indigo-500 rounded-full mx-auto mt-4" />
          <p className="text-white/50 mt-4 max-w-md mx-auto">
            Have a project in mind or just want to say hi? Drop me a message and
            I'll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass-strong rounded-2xl p-6 sm:p-8 border border-white/5">
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label className="text-white/50 text-sm font-medium mb-2 block">
                    Subject
                  </label>
                  <Input
                    id="title"
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-11 
                               focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all duration-300"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label className="text-white/50 text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl h-11 
                               focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email:"
                    errors={state.errors}
                  />
                </div>

                <div>
                  <label className="text-white/50 text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl min-h-[160px] 
                               focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all duration-300 resize-none"
                    placeholder="Type your message here..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message:"
                    errors={state.errors}
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <Button
                    variant="outline"
                    type="submit"
                    disabled={state.submitting}
                    className="px-8 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium 
                               hover:from-indigo-400 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-indigo-500/25 border-none
                               disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacts;