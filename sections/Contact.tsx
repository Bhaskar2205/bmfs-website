export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-20 bg-blue-950 text-white"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Contact Us
        </h2>

        {/* CONTACT DETAILS */}
        <div className="space-y-4 text-sm md:text-base text-blue-100">

          <a
            href="tel:+918875729292"
            className="block hover:text-white transition"
          >
            📞 +91 88757 29292
          </a>

          <a
            href="mailto:bharatmoneymofsl@gmail.com"
            className="block hover:text-white transition break-all"
          >
            📧 bharatmoneymofsl@gmail.com
          </a>

          <a
            href="https://maps.google.com/?q=Patel+Marg+Mansarovar+Jaipur"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-white transition"
          >
            📍 Patel Marg, Mansarovar, Jaipur
          </a>
        </div>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.link/fcw2ig"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-white text-blue-900 px-8 py-3 rounded-full
                     font-semibold shadow-md hover:shadow-xl hover:scale-105
                     active:scale-95 transition"
        >
          WhatsApp Now
        </a>

      </div>
    </section>
  );
}