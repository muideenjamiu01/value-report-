import React, { useState } from 'react';
import Logo from "../assets/logos/image.png";
const ResultsPage = () => {
  const [resultData, setResultData] = useState({
    Recommendations: [
      {
        value: "Develop a Flexible Leadership Style",
        description:
          " Recognize that leadership is about influence, not control. Adapt to different leadership dynamics, whether hierarchical or team-driven.",
      },
      {
        value: "Balance Health Priorities with Workplace Expectations:",
        description:
          "Advocate for health-conscious workplace initiatives while managing your workload effectively to avoid burnout and support workplace wellness initiatives.",
      },
      {
        value: "Align Spiritual Values with Ethical Professionalism:",
        description:
          "Ensure your actions reflect integrity and ethical decision-making in business scenarios. Promote ethical leadership without disengaging from necessary business realities.",
      },
      {
        value: "Strengthen Work-Life Balance Strategies:",
        description:
          "Set clear priorities and boundaries to ensure family commitments are respected while meeting work responsibilities. Use time management techniques to manage professional and personal obligations.",
      },
      {
        value: "Adapt Humour to Workplace Culture.",
        description:
          "Be mindful of when and how humour is used, ensuring it enhances workplace interactions rather than creating misunderstandings. Use humour as a tool for building relationships and diffusing tension while maintaining professionalism.",
      },
    ],
  });
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-white rounded-lg shadow-lg p-8">
     <div className="flex justify-between">
     <h1 className="text-[40px] font-bold text-[#2e2178] uppercase mb-8">Results</h1>
      <div className="relative">
            <img
              src={Logo}
              alt="Bariumtech logo"
              width={100}
              height={200}
              className="object-contain"
            />
          </div>
     </div>
      
      <div className="space-y-8">
        <div>
          <p className="text-xl text-gray-700 mb-4">
          As an employee who values <span className='font-bold text-black'>leadership, spirituality, family, and humour,</span>  your values shape how you approach work, collaborate with colleagues, and contribute to organizational goals. 
         
          </p>
          <p className="text-xl text-gray-700 max-w-7xl">

          However, in a corporate environment, there may be blind spots and potential value conflicts that require self-awareness and adaptability. By recognizing these challenges, you can ensure your approach remains effective while staying true to your personal values.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4 text-indigo-900">Recommendations</h2>
          <ul className="list-disc pl-6 space-y-4">

          {resultData.Recommendations.map((spot, index) => (
                <li key={index}>
                  <span className="font-bold text-base text-gray-700">{spot.value}</span>:{" "}
                  <span className='text-lg'>{spot.description}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;





 
 