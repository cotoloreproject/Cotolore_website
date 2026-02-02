// Footer.js
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Footer = () => {
  // State for newsletter email
  const [newsletterEmail, setNewsletterEmail] = useState("");

  // Handle newsletter subscription
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to /subscribe with the email
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: newsletterEmail }),
        }
      );

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const data = await response.json();

      // Show success toast
      toast.success(data.message || "Subscription successful!", {
        duration: 4000,
      });

      // Clear the email field on success
      setNewsletterEmail("");
    } catch (error) {
      console.error("Subscription error:", error);

      // Show error toast
      toast.error("Failed to subscribe. Please try again later.");
    }
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Company Info and Navigation */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Cotolore</h2>
            <p className="text-sm">
              Cotolore proudly operates Kealthy, your trusted organic food and
              product delivery platform.
            </p>
            <p className="text-sm mt-2">
              &copy; 2024 Cotolore. All Rights Reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col sm:flex-row">
            <div className="mb-4 sm:mb-0 sm:mr-8">
              <h3 className="text-lg font-semibold mb-2">Company</h3>
              <ul>
                <li className="mb-1">
                  <a href="/#about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-1">
                  <a href="/#solutions" className="hover:underline">
                    Solutions
                  </a>
                </li>
                <li className="mb-1">
                  <a href="/#careers" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Support</h3>
              <ul>
                <li className="mb-1">
                  <a href="/#contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li className="mb-1">
                  <a href="/faq" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li className="mb-1">
                  <a href="/privacy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-1">
                  <a href="/terms" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-blue-700"></div>

        {/* Bottom Section: Social Media and Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex mb-4 md:mb-0">
            <a
              href="https://www.facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-orange-400 mx-2"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-white hover:text-orange-400 mx-2"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-orange-400 mx-2"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-orange-400 mx-2"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.youtube.com/channel/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white hover:text-orange-400 mx-2"
            >
              <Youtube size={20} />
            </a>
          </div>

          {/* Newsletter Signup */}

          <div className="text-center md:text-right">
            <p className="text-sm mb-2">Subscribe to our newsletter</p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row justify-center md:justify-end"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 sm:rounded-l-md focus:outline-none text-gray-800"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button
                type="submit"
                className="mt-2 sm:mt-0 bg-orange-400 text-white p-2 sm:rounded-r-md hover:bg-blue-900 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
