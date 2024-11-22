import { useEffect, useContext, useState } from "react";
import { report } from "./Constants";
import userContext from "./userContext";


const Report = () => {
  const { signInedUserData } = useContext(userContext);

  const [careerReport, setCareerReport] = useState(null);

  useEffect(() => {
    console.log(careerReport);
  }, [careerReport]);

  const fetchReport = async (email) => {
    try {
      const response = await fetch(report + email);
      const jsonData = await response.json();
      setCareerReport(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.log("Error in fetching the report:", error);
    }
  };

  const handleClick = () => {
    fetchReport(signInedUserData.email);
  };

  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (!careerReport) {
    return (
      <div>
        <div onClick={handleClick} className="flex justify-center my-10 p-10 bg-platinum w-fit mx-auto font-serif text-3xl rounded-full hover:bg-slate-600 hover:text-white hover:cursor-pointer">Generate</div>
        <div className="text-center mt-4">No report available. Please generate the report.</div>
      </div>
    );
  }

  return (
    <div>

      <div className="flex justify-center my-10">
        <div>
          <div className="font-serif text-6xl font-light">Career Counseling Report</div>
          <div className="text-center">
            {signInedUserData.firstName + " " + signInedUserData.lastName}
          </div>
        </div>
      </div>

      <div className="w-9/12 flex justify-center flex-col mx-auto">
        <div className="text-4xl font-serif text-customBlue text-center">Summary</div>
        <div className="text-lg font-serif">Date: {careerReport.date}</div>

        {/* Suggested Job Roles */}
        <div>
          <div
            className="text-2xl font-serif p-2 text-purple-500 underline cursor-pointer bg-platinum my-2"
            onClick={() => toggleSection("jobRoles")}
          >
            Suggested Job Roles
          </div>
          {expandedSection === "jobRoles" && (
            <div className="px-4 bg-slate-100">
              {Object.entries(careerReport.suggested_role).map(([key, value]) => (
                <div className="m-2" key={key}>
                  <div className="text-2xl font-serif font-light">{key}</div>
                  <div className="font-serif text-lg mx-4">
                    <div className="underline">Related Description:</div> {value.info}
                  </div>
                  <div>
                    <div className="font-serif text-lg mx-4 underline">Requirements:</div>
                    {value.requirements.map((r, idx) => (
                      <div className="mx-4 font-serif" key={idx}>
                        {r}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Personality Suggestion */}
        <div>
          <div
            className="text-2xl font-serif p-2 text-purple-500 underline cursor-pointer bg-platinum my-2"
            onClick={() => toggleSection("personality")}
          >
            Suggestion about Personality
          </div>
          {expandedSection === "personality" && (
            <div className="px-4 bg-slate-100">
              <div className="m-2 mx-4">
                <div className="text-2xl font-serif font-light">Pros</div>
                {careerReport.PQA.pros.map((p, idx) => (
                  <div key={idx}>
                    <div className="font-serif text-lg mx-4 underline">{p.category}</div>
                    <div className="mx-4 font-serif text-base">{p.description}</div>
                  </div>
                ))}
                <div className="text-2xl font-serif font-light">Cons</div>
                {careerReport.PQA.cons.map((p, idx) => (
                  <div key={idx}>
                    <div className="font-serif text-lg mx-4 underline">{p.category}</div>
                    <div className="mx-4 font-serif text-base">{p.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Technical Suggestion */}
        <div>
          <div
            className="text-2xl font-serif p-2 text-purple-500 underline cursor-pointer bg-platinum my-2"
            onClick={() => toggleSection("technical")}
          >
            Suggestion about Technical
          </div>
          {expandedSection === "technical" && (
            <div className="px-4 bg-slate-100">
              <div className="m-2 mx-4">
                <div className="text-2xl font-serif font-light">Pros</div>
                {careerReport.TQA.pros.map((p, idx) => (
                  <div key={idx}>
                    <div className="font-serif text-lg mx-4 underline">{p.area}</div>
                    <div className="mx-4 font-serif text-base">{p.comment}</div>
                  </div>
                ))}
                <div className="text-2xl font-serif font-light">Cons</div>
                {careerReport.TQA.cons.map((p, idx) => (
                  <div key={idx}>
                    <div className="font-serif text-lg mx-4 underline">{p.area}</div>
                    <div className="mx-4 font-serif text-base">{p.comment}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Suggested Learning Timetable */}
        <div>
          <div
            className="text-2xl font-serif p-2 text-purple-500 underline cursor-pointer bg-platinum my-2"
            onClick={() => toggleSection("timetable")}
          >
            Suggested Learning Timetable
          </div>
          {expandedSection === "timetable" && (
            <div className="px-4 bg-slate-100">
              {Object.entries(careerReport.timetable["Time/days"]).map(([category, topics]) => (
                <div key={category} className="mb-4">
                  <h3 className="text-xl font-serif">{category}</h3>
                  <ul className="list-disc list-inside">
                    {topics.map((topic, idx) => (
                      <li key={idx} className="font-serif">{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Report;
