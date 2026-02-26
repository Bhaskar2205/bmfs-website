export default function Team() {
    const team = [
      { name: "Juhi Jainani", role: "Managing Director" },
      { name: "Vishal Kokal", role: "Market Analyst" },
      { name: "Bhaskar Mamoria", role: "Head of Marketing" },
    ];
  
    return (
      <div className="py-20 bg-slate-50 text-center">
        <h2 className="text-3xl font-bold text-blue-950 mb-12">
          Leadership Team
        </h2>
  
        <div className="flex flex-wrap justify-center gap-10">
          {team.map((member, i) => (
            <div key={i}>
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4" />
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-slate-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }