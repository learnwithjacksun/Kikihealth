import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="bg-secondary  py-10">
      <div className="layout space-y-10 ">
        <h1 className="text-4xl main text-center text-green-800 font-bold">
          Contact Us
        </h1>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm text-muted">
                Fill out the form and we'll get back to you shortly.
              </p>
            </div>
            <form className="space-y-4 bg-white p-4 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="input" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="input w-full"
              />
              <textarea
                placeholder="Your Message"
                className="message h-32 w-full"
              ></textarea>
              <button
                type="submit"
                className="btn btn-primary rounded-md w-full h-10"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm text-muted">
                Reach out to us through any of these channels.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 center bg-green-800/10 rounded-md">
                  <Phone size={20} className="text-green-800" />
                </div>
                <div>
                  <h4 className="font-sora font-bold">Phone</h4>
                  <p className="text-sm text-muted">+234 903 383 4972</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 center bg-green-800/10 rounded-md">
                  <Mail size={20} className="text-green-800" />
                </div>
                <div>
                  <h4 className="font-sora font-bold">Email</h4>
                  <p className="text-sm text-muted">admin@kikihealth.ca</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 center bg-green-800/10 rounded-md">
                  <MapPin size={20} className="text-green-800" />
                </div>
                <div>
                  <h4 className="font-sora font-bold">Office</h4>
                  <p className="text-sm text-muted">
                    24 Safari Close, Northern Forshore estate Chevron drive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
