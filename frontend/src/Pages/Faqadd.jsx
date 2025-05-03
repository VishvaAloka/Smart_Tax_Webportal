"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const InputField = ({ type, placeholder, value, onChange, error }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-3 pr-12 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

const TextArea = ({ placeholder, value, onChange }) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="p-4 w-full pr-12 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-[250px] text-opacity-50 max-sm:text-base max-sm:h-[200px]"
    />
  );
};

const ActionButton = ({ children, onClick, isSpecial = false }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-6 py-0 text-lg text-white rounded-xl cursor-pointer bg-blue-600 bg-opacity-80 border-[none] h-[55px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] max-md:w-auto max-sm:text-base max-sm:h-[45px] ${isSpecial ? 'px-8' : ''}`}
    >
      {children}
      {isSpecial && <ChevronDown className="ml-2" size={20} />}
    </button>
  );
};

const InputDesign = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!/^[A-Za-z]+$/.test(formData.name)) {
      newErrors.name = "Name should only contain letters";
    }
    
    if (!/^\d{1,10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number should be only numbers and max 10 characters";
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format (@ is required)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  const handleEdit = () => console.log("Edit clicked");
  const handleDelete = () => console.log("Delete clicked");

  return (
    <main className="flex flex-col items-center px-5 py-16 mx-auto max-w-none min-h-screen max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <div className="h-[12.7px]" />
      <section className="p-5 mb-8 w-full bg-white rounded-3xl max-w-[900px] max-md:max-w-[90%]">
        <div className="mb-5">
          <InputField
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: "name" } })}
            error={errors.name}
          />
        </div>
        <div className="mb-5">
          <InputField
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: "email" } })}
            error={errors.email}
          />
        </div>
        <div className="mb-5">
          <InputField
            type="tel"
            placeholder="Phone number"
            value={formData.phone}
            onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: "phone" } })}
            error={errors.phone}
          />
        </div>
        <div className="mb-0">
          <TextArea
            placeholder="Type your question"
            value={formData.question}
            onChange={(e) => handleInputChange({ ...e, target: { ...e.target, name: "question" } })}
          />
        </div>
      </section>
      <div className="flex flex-wrap gap-4 justify-center items-center w-full max-md:flex-col max-md:w-full max-sm:gap-2.5">
        <ActionButton isSpecial={true}>Previously asked questions</ActionButton>
        <ActionButton onClick={handleSubmit}>Submit</ActionButton>
        <ActionButton onClick={handleEdit}>Edit</ActionButton>
        <ActionButton onClick={handleDelete}>Delete</ActionButton>
      </div>
    </main>
  );
};

export default InputDesign;
