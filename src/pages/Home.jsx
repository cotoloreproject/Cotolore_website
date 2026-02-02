/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
// Importing necessary dependencies
import { useState } from "react";
import Slider from "react-slick";
import { MapPin, Phone, Mail } from "lucide-react";

// Import Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Home = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Build the request payload
      const payload = {
        subject: formData.subject,
        text:
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Message: ${formData.message}\n`,
      };

      // Make a POST request to your Node.js server
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Email sent:", data);

      // Show success toast
      toast.success("Your message has been sent successfully!", {
        duration: 4000, // Display time (optional)
      });

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);

      // Show error toast
      toast.error("Failed to send email. Please try again later.");
    }
  };

  // Custom Next Arrow
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-blue-900 text-white rounded-full p-2`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

  // Custom Previous Arrow
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} bg-blue-900 text-white rounded-full p-2`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

  // Slider settings for React Slick
  const sliderSettings = {
    dots: true, // Shows navigation dots
    infinite: true, // Enables infinite looping
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll on navigation
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
    arrows: true, // Shows next and previous arrows
    pauseOnHover: true, // Pauses autoplay on hover
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    lazyLoad: "ondemand", // Enables lazy loading
    fade: true, // Optional: fade transition instead of slide
    adaptiveHeight: true, // Adjusts height based on slide content
  };

  // Updated slides data with organic food-related images
  const slides = [
    {
      id: 1,
      title: "Welcome to Cotolore",
      description:
        "Pioneering healthy and organic food solutions for a better tomorrow.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Our Mission",
      description:
        "To provide high-quality organic products that promote health and sustainability.",
      image:
        "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Quality Assurance",
      description:
        "We ensure the best quality through rigorous testing and sustainable sourcing.",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      title: "Join Our Team",
      description:
        "Be a part of a dynamic team committed to making a positive impact.",
      image: "/images/join_our_team.jpeg",
    },
  ];

  return (
    <div className="font-sans overflow-hidden">
      {/* Home Section with Full-Width Carousel and Overlapping Text */}
      <section
        id="home"
        className="bg-gray-100 mt-16 text-blue-900 flex flex-col justify-center items-center w-full"
      >
        <Slider
          {...sliderSettings}
          className="w-full"
          aria-label="Cotolore Home Carousel"
        >
          {slides.map((slide) => (
            <div key={slide.id} className="relative">
              {/* Slide Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay Text Container */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center">
                <div className="max-w-xs sm:max-w-sm md:max-w-lg bg-black bg-opacity-50 p-4 sm:p-6 md:p-12">
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-sm sm:text-lg md:text-2xl text-white">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="bg-gray-100 text-blue-900 py-16 px-4 md:px-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* Image on Left */}
          <img
            src="/images/aboutus.jpeg"
            alt="About Us"
            className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6"
          />
          {/* Text on Right */}
          <div className="w-full md:w-1/2 text-left">
            {" "}
            {/* Changed text alignment */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-400">
              About Us
            </h2>
            <p className="text-lg md:text-xl mb-6">
              Cotolore stands at the forefront of the organic food industry,
              dedicated to transforming the way the world accesses and consumes
              healthy, sustainable products. As the proud parent company of
              Kealthy, we leverage innovative technologies and eco-friendly
              practices to ensure that our customers receive the freshest,
              highest-quality organic food delivered right to their doorstep.
              Our commitment extends beyond mere delivery; we aim to foster a
              community that values environmental stewardship, ethical sourcing,
              and wellness. By partnering with local farmers and sustainable
              suppliers, Cotolore not only supports local economies but also
              ensures that every product meets our rigorous standards for
              quality and sustainability. Join us in our mission to make organic
              living accessible and enjoyable for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions"
        className="bg-white text-blue-900 py-16 px-4 md:px-6"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center">
          {/* Updated Image on Right */}
          <img
            src="/images/solutions.avif"
            alt="Innovative Solutions in Organic Food"
            className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 md:ml-6"
          />
          {/* Text on Left */}
          <div className="w-full md:w-1/2 text-left">
            {" "}
            {/* Changed text alignment */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-400">
              Our Solutions
            </h2>
            <p className="text-lg md:text-xl mb-6">
              At Cotolore, we are committed to delivering innovative food
              solutions that address the evolving needs of our diverse
              clientele. Our comprehensive services encompass organic food
              sourcing and delivery, customizable healthy meal plans tailored to
              individual dietary requirements, eco-friendly packaging solutions
              that minimize environmental impact, and advanced digital food
              ordering platforms designed for seamless user experiences. By
              integrating sustainability with cutting-edge technology, Cotolore
              ensures that our customers enjoy not only the highest quality
              organic products but also the convenience and efficiency they
              deserve. Our dedicated team works tirelessly to uphold our
              standards of excellence, fostering a healthier and more
              sustainable future for all.
            </p>
            <ul className="space-y-4 text-lg md:text-xl list-disc list-inside">
              <li>Organic Food Sourcing and Delivery</li>
              <li>Customizable Healthy Meal Plans</li>
              <li>Eco-Friendly Packaging Solutions</li>
              <li>Digital Food Ordering Platforms</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gray-100 text-blue-900 py-16 px-2 md:px-4" // Reduced padding
      >
        {/* Contact Content */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-orange-400">
            Contact Us
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Contact Information */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              {/* Address Section */}
              <div className="flex items-start mb-6">
                {/* Address Icon */}
                <MapPin className="h-8 w-8 mt-1 mr-4 text-orange-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-1">
                    Address
                  </h3>
                  <p className="text-lg md:text-xl font-bold">
                    15/293-C <br />
                    Muriyankara - Pinarmunda Road Peringala , Ernakulam - 683565
                  </p>
                </div>
              </div>

              {/* Phone Section */}
              <div className="flex items-start mb-6">
                {/* Phone Icon */}
                <Phone className="h-8 w-8 mt-1 mr-4 text-orange-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-1">Phone</h3>
                  <p className="text-lg md:text-xl font-bold">
                    +91 773 676 5198
                  </p>
                </div>
              </div>

              {/* Email Section */}
              <div className="flex items-start">
                {/* Email Icon */}
                <Mail className="h-8 w-8 mt-1 mr-4 text-orange-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-1">Email</h3>
                  <p className="text-lg md:text-xl font-bold">
                    cotoloreenterprisellp@gmail.com , <br />
                    info@cotolore.com
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-1/2 bg-white text-blue-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Subject Field */}
                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Message Field */}
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-orange-400 text-white hover:bg-blue-900 hover:text-white py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps - Full Width */}
        <div className="mt-8 w-full">
          <iframe
            title="Cotolore Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.6740043006544!2d76.38158247479379!3d10.010110890095776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b52139af969%3A0x4c62473d70e72564!2sCotolore%20Enterprises%20LLP!5e1!3m2!1sen!2sin!4v1735299711130!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="bg-gray-100 text-blue-900 py-16">
        {/* Content Container with Padding */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
          {/* Image on Left */}
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Careers at Cotolore - Team Collaboration"
            className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6 object-cover h-64 md:h-auto"
          />
          {/* Text on Right */}
          <div className="w-full md:w-1/2 text-left">
            {" "}
            {/* Ensuring left alignment */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">
              Careers
            </h2>
            <p className="text-xl md:text-2xl mb-6">
              At Cotolore, we're passionate about revolutionizing the organic
              food industry through our innovative platform, Kealthy. As we
              continue to grow, we're seeking dedicated and creative individuals
              who are eager to make a meaningful impact. Whether you're a
              seasoned professional or just starting your career, you'll find
              opportunities to develop, collaborate, and thrive in a supportive
              environment.
            </p>
            <Link
              to="/careers"
              className="mt-6 bg-orange-400 text-white py-3 px-6 md:py-4 md:px-8 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-colors duration-300 inline-block text-center"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
