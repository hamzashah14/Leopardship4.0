import React, { useState } from "react";

const fetchExistingEntries = async () => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycby-aP6gMehh-WueYgU5v28Uk33FvlR63O_fE6aT4FVgTv99xYsjVlFGuuSS77KxKAfx/exec"
    );
    const data = await response.json();
    if (data.result === "success") {
      return {
        emails: new Set(data.emails.map((e) => e.toLowerCase())),
        cnics: new Set(data.cnics.map((c) => c.toLowerCase())),
      };
    }
    return { emails: new Set(), cnics: new Set() };
  } catch (error) {
    console.error("Failed to fetch existing data:", error);
    return { emails: new Set(), cnics: new Set() };
  }
};

const RegistrationForm = ({ infoText, welcomeText }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    whatsappNo: "",
    email: "",
    cnicNo: "",
    cityOfResidence: "",
    referredBy: "",
    instituteName: "",
    designation: "",
    cityOfWork: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Fetch existing emails and CNICs
      const { emails, cnics } = await fetchExistingEntries();

      const emailExists = emails.has(formData.email.toLowerCase());
      const cnicExists = cnics.has(formData.cnicNo.toLowerCase());

      if (emailExists || cnicExists) {
        alert(
          emailExists && cnicExists
            ? "Both Email and CNIC already exist!"
            : emailExists
            ? "Email already exists!"
            : "CNIC already exists!"
        );
        setLoading(false);
        return;
      }

      // ✅ Include secret key
      const secretKey = "NYLE2024_SECRET";
      const dataWithSecret = { ...formData, secretKey };

      const urlEncodedData = new URLSearchParams();
      Object.keys(dataWithSecret).forEach((key) => {
        urlEncodedData.append(key, dataWithSecret[key]);
      });

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby-aP6gMehh-WueYgU5v28Uk33FvlR63O_fE6aT4FVgTv99xYsjVlFGuuSS77KxKAfx/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: urlEncodedData,
        }
      );

      const result = await response.text();
      const jsonResult = JSON.parse(result);

      if (jsonResult.result === "success") {
        setSubmitted(true);
      } else {
        alert("Error: " + (jsonResult.message || "Please try again."));
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {submitted ? (
        <div className="text-center p-8">
          <p className="text-green-600 font-semibold text-lg">
            Thank you for registering! We will get in touch with you soon.
          </p>
        </div>
      ) : (
        <>
          {/* Welcome Text Rendering */}
          {welcomeText?.length > 0 && (
            <div className="mb-10 w-full space-y-4 text-gray-800 text-sm leading-relaxed">
              {welcomeText.map((html, index) => (
                <div key={index} dangerouslySetInnerHTML={{ __html: html }} />
              ))}
            </div>
          )}

          {/* Info Text if any */}
          {infoText?.length > 0 && (
            <div className="mb-6 w-full space-y-4 text-gray-800">
              {infoText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Small Inputs - 2 per row */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                disabled={loading}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label
                htmlFor="whatsappNo"
                className="block text-sm font-medium text-gray-700"
              >
                WhatsApp No.
              </label>
              <input
                type="tel"
                name="whatsappNo"
                id="whatsappNo"
                value={formData.whatsappNo}
                onChange={handleChange}
                required
                disabled={loading}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label
                htmlFor="cnicNo"
                className="block text-sm font-medium text-gray-700"
              >
                CNIC No.
              </label>
              <input
                type="text"
                name="cnicNo"
                id="cnicNo"
                value={formData.cnicNo}
                onChange={handleChange}
                required
                disabled={loading}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label
                htmlFor="cityOfResidence"
                className="block text-sm font-medium text-gray-700"
              >
                City of Residence
              </label>
              <input
                type="text"
                name="cityOfResidence"
                id="cityOfResidence"
                value={formData.cityOfResidence}
                onChange={handleChange}
                required
                disabled={loading}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label
                htmlFor="cityOfWork"
                className="block text-sm font-medium text-gray-700"
              >
                City of Work
              </label>
              <input
                type="text"
                name="cityOfWork"
                id="cityOfWork"
                value={formData.cityOfWork}
                onChange={handleChange}
                required
                disabled={loading}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label
                htmlFor="instituteName"
                className="block text-sm font-medium text-gray-700"
              >
                Institute / University / Company
              </label>
              <input
                type="text"
                name="instituteName"
                id="instituteName"
                value={formData.instituteName}
                onChange={handleChange}
                required
                disabled={loading}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 disabled:bg-gray-100"
              />
            </div>

            <div>
              <label
                htmlFor="designation"
                className="block text-sm font-medium text-gray-700"
              >
                Designation
              </label>
              <input
                type="text"
                name="designation"
                id="designation"
                value={formData.designation}
                onChange={handleChange}
                required
                disabled={loading}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 disabled:bg-gray-100"
              />
            </div>

            {/* Long Input Fields - Full Width */}
            <div className="md:col-span-2">
              <label
                htmlFor="referredBy"
                className="block text-sm font-medium text-gray-700"
              >
                Who referred you to join this National Youth Leadership
                Expedition?
              </label>
              <input
                type="text"
                name="referredBy"
                id="referredBy"
                value={formData.referredBy}
                onChange={handleChange}
                required
                disabled={loading}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 disabled:bg-gray-100"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Any Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                disabled={loading}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 disabled:bg-gray-100"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex items-center justify-center">
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className="w-32 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RegistrationForm;
