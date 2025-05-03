import { useState } from "react";
import { Send, Search, HelpCircle, Eye } from "lucide-react"; // Import Eye icon
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../FAQS_css/FAQask.css";
import faqimage from "../../assets/faqimage.jpg"; // Import FAQ image

export default function FAQask() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    question: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/faqs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      Swal.fire({
        icon: "success",
        title: "Submitted!",
        text: "Your question has been submitted successfully!",
        confirmButtonColor: "#2563eb",
      });

      setFormData({ name: "", email: "", telephone: "", question: "" });
    } catch (error) {
      console.error("Error submitting FAQ:", error);

      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Failed to submit your question. Please try again.",
        confirmButtonColor: "#dc3545",
      });
    }
  };

  return (
    <div className="faq-container">
      <div className="faq-content">
        {/* Left Side Image */}
        <div className="faq-image-container">
          <img src={faqimage} alt="FAQ Illustration" className="faq-image" />
        </div>

        {/* Right Side Form */}
        <div className="faq-form-container">
          <div className="faq-header">
            <div className="faq-header-content">
              <HelpCircle className="faq-icon" size={28} />
              <h1>Ask a Question</h1>
              <p>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
            </div>
          </div>

          <form className="faq-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                Full Name <span className="required">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="telephone">
                  Phone Number <span className="optional">(optional)</span>
                </label>
                <input
                  id="telephone"
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="question">
                Your Question <span className="required">*</span>
              </label>
              <textarea
                id="question"
                name="question"
                value={formData.question}
                onChange={handleChange}
                rows={5}
                placeholder="Please describe your question in detail..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              <Send size={18} />
              <span>Submit Question</span>
            </button>
          </form>

          <div className="view-questions-container">
            <button
              className="view-questions-button"
              onClick={() => navigate("/faqmanage")} // Navigate to FAQ list page
            >
              <Eye size={18} />
              <span>View My Questions</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}