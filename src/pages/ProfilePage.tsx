import SpeedometerComponent from "@/components/SpeedometerComponent";
import { useState } from "react";
import Logo from "../assets/logos/image.png";
import bagImg from "../assets/images/bag.png";
import earthImg from "../assets/images/earth.png";
import homeImg from "../assets/images/home.png";
import thinkImg from "../assets/images/thinking.png";

// Define types for our data structure
type PersonData = {
  name: string;
  company: string;
  country: string;
  position: string;
  alignmentScore: number;
  topValues: string[];
  organisationalValues: {
    name: string;
    aligned: boolean;
  }[];
  blindSpots: {
    value: string;
    description: string;
  }[];
  conflicts: string[];
};

export default function ValuesProfile({ report }: any) {
  // This would typically come from an API or props
  const [personData, setPersonData] = useState<PersonData>({
    name: "Abayomi Amao",
    company: "Access Bank",
    country: "NIGERIA",
    position: "AM",
    alignmentScore: 16.67,
    topValues: ["Leadership", "Health", "Spirituality", "Family", "Humor"],
    organisationalValues: [
      { name: "Empowered Employees", aligned: false },
      { name: "Excellence", aligned: false },
      { name: "Innovation", aligned: false },
      { name: "Leadership", aligned: true },
      { name: "Passion for Customers", aligned: false },
      { name: "Professionalism", aligned: false },
    ],
    blindSpots: [
      {
        value: "Leadership",
        description:
          "Your beliefs may cause you to assume responsibility for situations where collaboration is more effective, or feel frustrated when working with managers who do not exhibit strong leadership traits.",
      },
      {
        value: "Health",
        description:
          "Your commitment to health may cause you to become frustrated when workplace policies do not support mental and physical well-being.",
      },
      {
        value: "Spirituality",
        description:
          "Your spiritual values may sometimes cause you to struggle when business pragmatism is prioritized over ethical or moral considerations.",
      },
      {
        value: "Family",
        description:
          "Your family commitment may cause you to struggle with work demands that require overtime, or urgent deadlines.",
      },
      {
        value: "Humour",
        description:
          "Your appreciation for humour may sometimes cause you to use levity in situations that require seriousness or professionalism.",
      },
    ],
    conflicts: [
      "Your preference for direct, strong leadership may make it difficult to adapt to an empowered workplace where decision-making is more decentralized and collaborative.",
      "Your commitment to health and well-being may create tension when the workplace demands long hours and prioritizes results over individual well-being.",
      "Your spiritual values may sometimes clash with corporate strategies that focus on business growth, profit, and competition.",
      "Your prioritization of family commitments may be challenged by workplace expectations that require flexibility, extended work hours, for customer service and project deadlines.",
      "Your use of humour as a coping mechanism or social tool may not always align with a corporate culture that values professionalism and formality.",
    ],
  });

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-white">
      {/* Left Panel */}
      <div className="w-full md:w-2/5 bg-[#2e2178] text-white p-6 flex flex-col items-center">
        <div className="relative w-64 h-64 mb-8">
          <img
            src={thinkImg}
            alt="Head silhouette with question mark"
            width={256}
            height={256}
            className="object-contain"
          />
        </div>

        <h2 className="text-xl font-bold text-center mb-8">
          SELECTED TOP 5
          <br />
          VALUES
        </h2>

        <div className="w-full max-w-xs space-y-4">
          {[
            ...(report?.values || []),
            ...Array(5 - (report?.values?.length || 0)).fill({ value: "N/A" }),
          ]
            .slice(0, 5)
            .map((value: any, index: number) => (
              <div key={index} className="relative h-[52px]">
                {/* Purple backdrop extending to the right */}
                <div className="absolute inset-0 translate-x-[10px] bg-[#432c91] rounded-[30px] z-0" />

                {/* Main dark blue pill box */}
                <div className="relative z-10 bg-[#1d3571] rounded-[30px] h-full flex items-center px-6 text-white text-left text-[18px] font-normal">
                  {value.value}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-4/5 p-6 flex flex-col">
        <div className="flex justify-end  mb-4">
          <div className="w-24 h-12 relative">
            <img
              src={Logo}
              alt="Bariumtech logo"
              width={96}
              height={48}
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex justify-between max-w-lg my-10">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-[#2e2178] mb-4">
              Values Profile
            </h1>
            <h2 className="text-2xl font-bold text-[#2e2178]">
              {report?.user?.name}
            </h2>
          </div>

          <div className="">
            {/* Gauge */}
            <div className="relative   mb-20">
              <div className="absolute  top-0 left-20 h-5 w-5">
                <SpeedometerComponent report={report} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="flex items-center gap-5 ">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src={homeImg}
                  alt="Building icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="text-base text-purple-600 font-bold">
                {report?.user?.business_entity}
              </div>
            </div>

            <div className="flex items-center gap-5 ">
              <div className="w-10 h-10 flex  justify-center">
                <img
                  src={earthImg}
                  alt="Globe icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="text-base text-purple-600 font-bold">
                {report?.user?.country}
              </div>
            </div>

            <div className=" flex items-center gap-5">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src={bagImg}
                  alt="Briefcase icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="text-base text-purple-600 font-bold">
                {report?.user?.grade}
              </div>
            </div>
          </div>

          <div>
            {/* Organizational Alignment */}
            <div className="mb-2 ">
              <h3 className="text-base tracking-widest text-center font-bold text-[#2e2178] mb-2">
                ORGANIZATIONAL ALIGNMENT
              </h3>
              <div className="border border-[#2e2178] overflow-hidden max-w-lg">
                <div
                  className=" grid"
                  style={{
                    gridTemplateColumns: `repeat(${report?.organizationAlignment?.length}, minmax(0, 1fr))`,
                  }}
                >
                  {/* First Row - Name */}
                  {report?.organizationAlignment?.map((value, index) => (
                    <div
                      key={index}
                      className={`p-1 text-[10px] font-medium text-center border-r border-b ${
                        index < 6 ? "bg-[#2e2178] text-white" : ""
                      }`}
                    >
                      {value.name}
                    </div>
                  ))}
                </div>

                <div
                  className="grid"
                  style={{
                    gridTemplateColumns: `repeat(${report?.organizationAlignment?.length}, minmax(0, 1fr))`,
                  }}
                >
                  {/* Second Row - Choices or ✕ */}
                  {report?.organizationAlignment?.map((value, index) => (
                    <div
                      key={`status-${index}`}
                      className="p-1 text-center bg-gray-400 border-r flex flex-col items-center justify-center"
                    >
                      {value.choice.length === 0 ? (
                        <span className="text-red-500 text-xl">✕</span>
                      ) : (
                        value.choice.map((choice, choiceIndex) => (
                          <div
                            key={choiceIndex}
                            className="text-[10px] font-medium"
                          >
                            {choice}
                          </div>
                        ))
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className=" w-full text-end tracking-widest text-sm font-normal text-purple-600">
              Alignment Score: {report?.user?.alignment_score}%
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Blind Spots */}
          <div>
            <h3 className="text-[16px] font-bold text-[#2e2178] mb-2 text-center border-b-2 border-gray-300 pb-2">
              BLIND SPOTS
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-[14px]">
              {report?.blindspot
                ?.filter(
                  (spot) =>
                    spot?.value?.trim() !== "" && spot?.blindspot?.trim() !== ""
                )
                .map((spot, index) => (
                  <li key={index}>
                    <span className="font-bold">{spot.value}</span>:{" "}
                    {spot.blindspot}
                  </li>
                ))}
            </ul>
          </div>

          {/* Conflicts */}
          <div>
            <h3 className="text-base font-bold text-[#2e2178] mb-2 text-center border-b-2 border-gray-300 pb-2">
              CONFLICTS
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-[14px]">
              {report?.conflict
                ?.filter(
                  (conflict) =>
                    conflict?.value?.trim() !== "" &&
                    conflict?.conflict?.trim() !== ""
                )
                .map((conflict, index) => (
                  <li key={index}>{conflict.conflict}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
