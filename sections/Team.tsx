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
    {
      name: "Rahul Subnani",
      role: "Referral Associate",
      image: "/team/rahul.jpeg",
    },
    {
      name: "Wasim Khan",
      role: "Wealth Manager",
      image: "/team/wasim.jpeg",
    },
    {
      name: "Guddu Saini",
      role: "Business development Manager",
      image: "/team/guddu.jpeg",
    },
    {
      name: "Chirag Sharma ",
      role: "Referral Associate ",
      image: "/team/chirag.jpeg",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5 text-center">

        {/* TITLE */}
        <h2 className="text-2xl md:text-4xl font-bold text-blue-950 mb-12">
          Leadership Team
        </h2>

        {/* GRID */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-8 
          place-items-center
        ">
          {team.map((member, i) => (
            <div
              key={i}
              className="w-full max-w-xs group bg-white/80 backdrop-blur-lg
                         border border-slate-200 rounded-2xl
                         p-8 text-center shadow-sm
                         hover:shadow-2xl hover:-translate-y-2
                         transition duration-300"
            >
              {/* IMAGE */}
              <div className="relative w-28 h-28 mx-auto mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full
                             border-4 border-white shadow-md"
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