import { useEffect, useContext, useState } from "react";
import { report } from "./Constants";
import userContext from "./userContext";
import { useNavigate } from "react-router-dom";

const Report = () => {
    const { signInedUserData } = useContext(userContext);
    const navigate = useNavigate();
    const [careerReport, setCareerReport] = useState(null);

    // Effect hook is not being used now, but it can be used for initial report fetch
    // useEffect(() => {
    //     fetchReport(signInedUserData.email);
    // }, [signInedUserData.email]);

    const fetchReport = async (email) => {
        try {
            const response = await fetch(report + email);
            const jsonData = await response.json();
            setCareerReport(jsonData);
            console.log("Report fetched:", jsonData); // Log the fetched data
        } catch (error) {
            console.log("Error in fetching the report:", error);
        }
    }

    const handleClick = () => {
        fetchReport(signInedUserData.email);
    }

    return (
        <>
            <div onClick={handleClick}>Generate Report</div>
            {careerReport === null ?
                <div>Loading...</div> : // Show loading while waiting for report
                <div>{/* Display careerReport data here, e.g., careerReport.name */}</div>
            }
        </>
    );
}

export default Report;
