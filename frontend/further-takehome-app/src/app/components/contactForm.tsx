// components/ContactForm.jsx (or wherever your form resides)
"use client"; // This component needs to be a Client Component

import Form from "next/form";




import { useState } from "react";
import { sendGTMEvent } from "@next/third-parties/google"; // Assuming you've set this up as described in the Next.js docs

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault(); 
    
    
    sendGTMEvent({
      event: "formSubmission", 
      value: formData, 
    });

    const data = {
      value: formData,
    };

    const JSONdata = JSON.stringify(data);
    

    const endpoint = "https://hooks.zapier.com/hooks/catch/24015437/u43ke4o/";
    const options = {
      method: "POST",

      body: JSONdata,
    };

    const response = await fetch(endpoint, options);


    if (response.ok) {
      setSubmitted(true);
      console.log("Form submitted successfully");
    } else {
      console.error("Form submission failed");
    }
  };

  return (
    <>
    {submitted ? (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-green-700">Information Submitted Successfully!</h2>
        <p className="text-gray-600 mt-2">We’ve received your information and will reach out shortly. Thank you!</p>
      </div>
    ) : (
    <div className="w-full bg-white rounded-xl shadow-md border border-gray-200 md:mt-0 sm:max-w-md xl:p-6 p-4">
   <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
  <h1 className="text-2xl font-semibold text-gray-800 text-center">
    Contact Information
  </h1>

  <Form action="" onSubmit={handleSubmit} className="space-y-5">
    <div>
      <label htmlFor="firstName" className="block mb-1 text-sm font-medium text-gray-700">
        First Name
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="Frances"
        className="w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
    </div>

    <div>
      <label htmlFor="lastName" className="block mb-1 text-sm font-medium text-gray-700">
        Last Name
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Martin"
        className="w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
    </div>

    <div>
      <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="name@gmail.com"
        className="w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>

    <div>
      <label htmlFor="phoneNumber" className="block mb-1 text-sm font-medium text-gray-700">
        Phone Number
      </label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        placeholder="+1 (XXX)-XXX-XXXX"
        className="w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
    </div>

    <p className="text-sm text-gray-500">
      We’ll never share your details. Read our{" "}
      <a href="#" className="text-blue-600 hover:underline font-medium">
        Privacy Policy
      </a>.
    </p>

    <button
      type="submit"
      className="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-white font-medium text-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 hover:cursor-pointer"
    >
      Submit
    </button>
  </Form>
</div>
    </div>
    
  )}
    </>
  );
  
}
