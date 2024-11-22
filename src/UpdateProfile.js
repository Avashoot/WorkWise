import userContext from "./userContext";
import { useContext, useState } from "react";
import { domainsList } from "./domailList";
import { profileGet, profilePut } from "./Constants";
import { useNavigate } from "react-router-dom";

const UpdateProfileData = () => {
    const { signInedUserData, setSignInedUserData } = useContext(userContext);
    const [domain, setDomain] = useState("");
    const [domainArray, setDomainArray] = useState(signInedUserData.domains||[]);
    const [filteredDomains, setFilteredDomains] = useState(domainsList);
    const [firstName, setFirstName] = useState(signInedUserData.firstName);
    const [lastName, setLastName] = useState(signInedUserData.lastName);
    const [collegeName, setCollegeName] = useState(signInedUserData.collegeName||"");
    const [admissionYear, setAdmissionYear] = useState(signInedUserData.admissionYear||"");
    const [graduationYear, setGraduationYear] = useState(signInedUserData.graduationYear||"");
    const [branch, setBranch] = useState(signInedUserData.branch||"");

    const navigate = useNavigate();
    const currentyear = new Date().getFullYear();
    const startYear = 2016;
    const yearsForAdmission = Array.from(
        { length: currentyear - startYear + 1 },
        (_, i) => startYear + i
    ).reverse();
    const yearsForGraduation = Array.from(
        { length: currentyear + 10 - startYear + 1 },
        (_, i) => startYear + i
    ).reverse();

    const handleAdmissionYearChange = (e) => {
        setAdmissionYear(e.target.value);
    };

    const handleGraduationYearChange = (e) => {
        setGraduationYear(e.target.value);
    };

    const handleAddDomain = (selectedDomain) => {
        if (!domainArray.includes(selectedDomain)) {
            setDomainArray((prev) => [...prev, selectedDomain]);
        }
        setDomain("");
        setFilteredDomains(domainsList);
    };

    const handleDomainSearch = (e) => {
        const value = e.target.value;
        setDomain(value);
        setFilteredDomains(
            value.trim()
                ? domainsList.filter((d) =>
                      d.toLowerCase().includes(value.toLowerCase())
                  )
                : domainsList
        );
    };

    const handleSaveChanges = () => {
        const profileData = {
            firstName,
            lastName,
            email: signInedUserData.email,
            collegeName,
            admissionYear,
            graduationYear,
            branch,
            domains: domainArray,
            imageUrl:
                "https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg",
        };

        putProfileData(profileData, profileData.email).then(() => {
            getProfileData(profileData.email).then((profileData) => {
                setSignInedUserData(profileData);
                navigate("/profile");
            });
        });
    };

    const putProfileData = async (profileData, email) => {
        try {
            const response = await fetch(profilePut + email, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(profileData),
            });

            if (!response.ok) {
                throw new Error(
                    `Failed to save credentials: ${response.statusText}`
                );
            }
        } catch (error) {
            console.error("Error in putProfileData:", error);
        }
    };

    const getProfileData = async (email) => {
        const response = await fetch(profileGet + email);
        return await response.json();
    };

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-md shadow-lg shadow-black mt-24 font-serif">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">
                Update Profile
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        First Name
                    </label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Last Name
                    </label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <div className="mt-1 text-gray-900">{signInedUserData.email}</div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        College Name
                    </label>
                    <input
                        type="text"
                        value={collegeName}
                        onChange={(e) => setCollegeName(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Admission Year
                    </label>
                    <select
                        value={admissionYear}
                        onChange={handleAdmissionYearChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="" disabled>
                            Select Admission Year
                        </option>
                        {yearsForAdmission.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Graduation Year
                    </label>
                    <select
                        value={graduationYear}
                        onChange={handleGraduationYearChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                        <option value="" disabled>
                            Select Graduation Year
                        </option>
                        {yearsForGraduation.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Branch
                    </label>
                    <input
                        type="text"
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Interested Domains
                    </label>
                    <input
                        type="text"
                        value={domain}
                        onChange={handleDomainSearch}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                    {domain && (
                        <div className="mt-2 max-h-40 overflow-y-auto border border-gray-300 rounded-md bg-white shadow">
                            {filteredDomains.map((d, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleAddDomain(d)}
                                >
                                    {d}
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="mt-2">
                        <span className="block font-medium">Selected Domains:</span>
                        <div className="flex flex-wrap gap-2">
                            {domainArray.map((d, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-md"
                                >
                                    {d}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <button
                onClick={handleSaveChanges}
                className="mt-6 w-full py-2 px-4 bg-customBlue text-white font-medium rounded-md hover:bg-indigo-700"
            >
                Save Changes
            </button>
        </div>
    );
};

export default UpdateProfileData;
