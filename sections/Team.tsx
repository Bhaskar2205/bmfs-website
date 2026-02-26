export default function Team() {
  const team = [
    {
      name: "Juhi Jainani",
      role: "Managing Director",
      image: "/team/juhi.jpeg",
    },
    {
      name: "Bhaskar Mamoria",
      role: "Technical Consultant",
      image: "/team/bhaskar.jpeg",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5 text-center">

        {/* TITLE */}
        <h2 className="text-2xl md:text-4xl font-bold text-blue-950 mb-10 md:mb-14">
          Leadership Team
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 justify-center">
          {team.map((member, i) => (
            <div
              key={i}
              className="group bg-white/70 backdrop-blur-lg border border-slate-200
                         rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-2xl
                         hover:-translate-y-2 transition duration-300"
            >
              {/* IMAGE */}
              <div className="relative w-28 h-28 mx-auto mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                />
              </div>

              {/* NAME */}
              <h3 className="font-semibold text-blue-950 text-lg">
                {member.name}
              </h3>

              {/* ROLE */}
              <p className="text-sm text-slate-500 mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}