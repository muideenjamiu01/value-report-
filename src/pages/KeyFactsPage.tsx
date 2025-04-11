import React from "react";
import Logo from "../assets/logos/image.png";
import QuestionImg from "../assets/images/question.png";
import EyeImg from "../assets/images/eye.png";
import HandImg from "../assets/images/hand.png";

const KeyFactsPage = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] bg-white rounded-lg shadow-lg p-8">
      <div className="flex justify-between">
        <div>
          <h1 className="text-[40px] font-bold text-indigo-900 uppercase mb-4">
            Values
          </h1>
          <h1 className="text-4xl font-bold text-purple-700 uppercase mb-4">
            Key Facts
          </h1>
          <h1 className="text-xl font-bold text-gray-500 mb-4">RECAP</h1>
        </div>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
        <div className="text-center p-6 max-w-sm">
          <div className="mx-auto w-28 p-4 h-28 rounded-full bg-purple-700 flex items-center justify-center text-white text-5xl">
            <img
              src={QuestionImg}
              alt="question-mark logo"
              className="object-contain"
            />
          </div>
          <h2 className="text-lg font-bold mt-4  mb-4">What Are Values?</h2>
          <p className="text-left text-base">
            Values are the cornerstone of effective leadership and impactful
            decision-making. They are the moral compass that directs our
            decisions and actions.
          </p>
        </div>

        <div className="text-center p-6 max-w-sm">
          <div className="mx-auto w-28 h-28 p-4 rounded-full bg-purple-700 flex items-center justify-center text-white text-5xl">
            <img src={EyeImg} alt="eye logo" className="object-contain" />
          </div>
          <h2 className="text-lg font-bold mt-4 mb-4">Blind Spots</h2>
          <p className="text-left text-base">
            These are hidden areas where actions, decisions, or behaviors
            conflict with stated or intended values. For example, valuing
            honesty but avoiding giving constructive feedback to avoid
            confrontation.
          </p>
        </div>

        <div className="text-center p-6 max-w-sm  ">
          <div className="mx-auto w-28 h-28 rounded-full bg-purple-700 flex items-center justify-center text-white text-5xl">
            <img src={HandImg} alt="hands-logo" className="object-contain" />
          </div>

          <h2 className="text-lg font-bold mt-4 mb-4">Conflicts</h2>
          <p className="text-left text-base">
            These are situations where differing or opposing values create
            tension, challenges, or ethical dilemmas. The focus of this profile
            is on work related conflicts which could arise when an individual’s
            values differ from the collective values of the organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyFactsPage;
