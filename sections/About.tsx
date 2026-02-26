import Container from "@/components/Container";

export default function About() {
  const handleClick = () => {
    window.open("https://wa.link/fcw2ig", "_blank");
  };

  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* TEXT */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-4 leading-snug">
              Trusted Financial Expertise Since 1987
            </h2>

            <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto md:mx-0">
              Bharat Money Financial Services helps individuals learn investing,
              build careers in stock markets, and grow financially with expert guidance.
            </p>
          </div>

          {/* COURSE CARD */}
          <div
            onClick={handleClick}
            className="bg-blue-900 text-white p-8 md:p-10 rounded-3xl cursor-pointer
                       active:scale-95 md:hover:scale-105 transition duration-300
                       shadow-lg hover:shadow-2xl text-center md:text-left"
          >
            <h3 className="text-xl md:text-2xl font-semibold">
              10 Days Course
            </h3>

            <p className="mt-2 opacity-90 text-sm md:text-base">
              Live Market Sessions & Practical Training
            </p>

            <p className="mt-4 text-xs opacity-70">
              Tap to join via WhatsApp →
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}