import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Globe2, Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png"; // adjust path to where you place the logo


const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Join as Delegate", to: "/join/delegate" },
  { label: "Join Our Team", to: "/join/team" },
];

const SOCIALS = [
  { icon: FaFacebook, href: "https://www.facebook.com/61578016430964/posts/united-by-diplomacy-driven-by-vision-dotmun-nawabshah-is-proud-to-announce-our-a/122188584050933881/", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/dotmun__official/", label: "Instagram" },
  { icon: FaTwitter, href: "https://twitter.com/DOTMUNOfficial", label: "Twitter" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/dotmun", label: "LinkedIn" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Enter a valid email to subscribe");
      return;
    }
    toast.success("Subscribed! Watch your inbox.");
    setEmail("");
  };

  return (
    <footer className="bg-forest-950 border-t border-gold-500/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img
              src={logo}
              alt="Diplomats of Tomorrow logo"
              className="h-20 w-20 md:h-14 md:w-14 object-contain"
            />
            <span className="font-serif text-lg text-offwhite">
              Diplomats <span className="text-gold-400">of Tomorrow</span>
            </span>
          </Link>
          <p className="text-sm text-offwhite/60 leading-relaxed mb-6">
            Cultivating the next generation of negotiators, leaders, and changemakers — one
            committee session at a time.
          </p>
          <div className="flex gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center border border-gold-500/20 text-offwhite/60 hover:text-gold-400 hover:border-gold-400 transition-colors duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-offwhite font-medium mb-4 tracking-wide">Quick Links</h4>
          <ul className="space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-offwhite/60 hover:text-gold-400 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-offwhite font-medium mb-4 tracking-wide">Contact</h4>
          <ul className="space-y-3 text-sm text-offwhite/60">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-gold-400 mt-0.5 shrink-0" />
              Sindh, Pakistan
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-gold-400 shrink-0" />
              diplomatsoftomorrowofficial@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-gold-400 shrink-0" />
              +92 3702745532
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-offwhite font-medium mb-4 tracking-wide">Stay Updated</h4>
          <p className="text-sm text-offwhite/60 mb-4">
            Conference announcements, delegate spotlights, and more — straight to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 min-w-0 px-3 py-2.5 rounded-lg bg-white/5 border border-gold-500/20 text-sm text-offwhite placeholder:text-offwhite/30 outline-none focus:border-gold-400 transition-colors duration-300"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-lg bg-gold-500 text-forest-950 text-sm font-medium hover:bg-gold-400 transition-colors duration-300 shrink-0"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gold-500/10 text-center text-xs text-offwhite/40">
        © {new Date().getFullYear()} Diplomats of Tomorrow. All rights reserved.
      </div>
    </footer>
    
  );
}