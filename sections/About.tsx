import Container from "@/components/Container";

export default function About() {
  return (
    <div className="py-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-4">
              Trusted Financial Expertise Since 1987
            </h2>
            <p className="text-slate-600">
              Bharat Money Financial Services helps individuals learn investing,
              build careers in stock markets, and grow financially with expert guidance.
            </p>
          </div>

          <div className="bg-blue-900 text-white p-10 rounded-3xl">
            <h3 className="text-2xl font-semibold">10 Days Course</h3>
            <p className="mt-2 opacity-90">Live Market Sessions & Practical Training</p>
          </div>
        </div>
      </Container>
    </div>
  );
}