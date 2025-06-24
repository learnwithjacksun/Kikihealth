import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="main py-20">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="space-y-4">
          <a href="/" className="flex items-center gap-2">
            <p className="text-white text-2xl font-bold">Simple Eats</p>
          </a>
            <p className="text-sm text-white/80">
              Our main focus is to provide the public with detailed and well researched health information surrounding nutritional food benefits, illness prevention and other health related topics.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="h-10 w-10 center bg-white/10 hover:bg-white/20 rounded-full">
                <Facebook size={20} />
              </a>
              <a href="#" className="h-10 w-10 center bg-white/10 hover:bg-white/20 rounded-full">
                <Instagram size={20} />
              </a>
              <a href="#" className="h-10 w-10 center bg-white/10 hover:bg-white/20 rounded-full">
                <Twitter size={20} />
              </a>
              <a href="#" className="h-10 w-10 center bg-white/10 hover:bg-white/20 rounded-full">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-sora font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-white/80 hover:text-white">Home</a></li>
              <li><a href="/#about" className="text-sm text-white/80 hover:text-white">About Us</a></li>
              <li><a href="/#agent" className="text-sm text-white/80 hover:text-white">Services</a></li>
              <li><a href="/#contact" className="text-sm text-white/80 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-sora font-bold">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white/80 hover:text-white">Meal Planning</a></li>
              <li><a href="#" className="text-sm text-white/80 hover:text-white">Maternal Care</a></li>
              <li><a href="#" className="text-sm text-white/80 hover:text-white">Corporate Food and Industry</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-sora font-bold">Newsletter</h3>
            <p className="text-sm text-white/80">
              Subscribe to our newsletter for the latest updates and property listings.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-2 w-full bg-white/10 text-white placeholder:text-white/60"
              />
              <button type="submit" className="btn bg-white text-primary w-full h-10 rounded-md">
                Subscribe
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm text-white/80">11680 Seaton Road</p>
            <p className="text-sm text-white/80">Richmond, BC</p>
            <p className="text-sm text-white/80">Canada</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Kikihealth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 