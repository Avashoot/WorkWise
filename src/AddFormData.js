import { useEffect, useState } from "react";
import { domainsList } from "./domailList";

const AddFormData = (props) => {
    const [inputYear, setInputYear] = useState("");
    const [inputBranch, setInputBranch] = useState("");
    const [domain, setDomain] = useState("");
    const [domainArray, setDomainArray] = useState([]);
    const [filteredDomains, setFilteredDomains] = useState(domainsList);

    const { setFormData, formData } = props;

    // Log form data whenever it updates
    useEffect(() => {
        console.log(formData);
    }, [formData]);

    // Add a selected domain to the array
    const handleAddDomain = (selectedDomain) => {
        if (!domainArray.includes(selectedDomain)) {
            setDomainArray((prev) => [...prev, selectedDomain]);
        }
        setDomain(""); // Clear input
        setFilteredDomains(domainsList); // Reset domain suggestions
    };

    // Submit all form data
    const handleAddData = () => {
        const data = {
            year: inputYear,
            branch: inputBranch,
            domains: domainArray,
        };

        setFormData(data);
        console.log(data);

        // Clear all input fields
        setInputYear("");
        setInputBranch("");
        setDomainArray([]);
    };

    // Handle domain search and filter suggestions
    const handleDomainSearch = (e) => {
        const value = e.target.value;
        setDomain(value);

        if (value.trim()) {
            setFilteredDomains(
                domainsList.filter((d) =>
                    d.toLowerCase().includes(value.toLowerCase())
                )
            );
        } else {
            setFilteredDomains(domainsList);
        }
    };

    return (
        <div className="flex flex-col gap-4 w-7/12 mx-10">
            {/* Year of Study */}
            <div className="flex items-center gap-4">
                <label className="flex flex-col">
                    <span className="font-medium">Year of Study:</span>
                    <input
                        type="text"
                        value={inputYear}
                        className="border border-black px-2 py-1"
                        onChange={(e) => setInputYear(e.target.value)}
                    />
                </label>
            </div>

            {/* Branch */}
            <div className="flex items-center gap-4">
                <label className="flex flex-col">
                    <span className="font-medium">Branch:</span>
                    <input
                        type="text"
                        value={inputBranch}
                        className="border border-black px-2 py-1"
                        onChange={(e) => setInputBranch(e.target.value)}
                    />
                </label>
            </div>

            {/* Domains */}
            <div className="flex flex-col gap-2">
                <label className="flex flex-col">
                    <span className="font-medium">Domains:</span>
                    <input
                        type="text"
                        value={domain}
                        className="border border-black px-2 py-1"
                        onChange={handleDomainSearch}
                    />
                </label>

                {/* Dropdown for domain suggestions */}
                {domain && (
                    <div className="dropdown bg-white border border-black mt-2 max-h-40 overflow-y-auto">
                        {filteredDomains.map((d, index) => (
                            <div
                                key={index}
                                className="dropdown-item px-2 py-1 hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleAddDomain(d)}
                            >
                                {d}
                            </div>
                        ))}
                    </div>
                )}

                {/* Display added domains */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {domainArray.map((d, index) => (
                        <span
                            key={index}
                            className="bg-gray-200 px-3 py-1 rounded"
                        >
                            {d}
                        </span>
                    ))}
                </div>
            </div>

            {/* Submit button */}
            <div>
                <button
                    onClick={handleAddData}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Add Data
                </button>
            </div>
        </div>
    );
};

export default AddFormData;
