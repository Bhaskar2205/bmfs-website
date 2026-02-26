export default function TrustBar() {
  const items = [
    "Trusted Since 1987",
    "Motilal Oswal Partner",
    "Expert Guidance",
    "Wealth Planning",
  ];

  return (
    <div className="bg-blue-900 text-white py-4 md:py-6">
      <div className="max-w-6xl mx-auto px-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-center">
        {items.map((item, i) => (
          <span key={i} className="opacity-90">
            ✓ {item}
          </span>
        ))}
      </div>
    </div>
  );
}