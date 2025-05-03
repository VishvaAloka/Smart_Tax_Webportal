import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import "../FAQS_css/FAQList.css"; 

export default function FAQList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  // Sample FAQ data related to tax
  const faqData = [
    {
      id: 1,
      question: "How to obtain a Taxpayer Identification Number (TIN)?",
      answer: "To obtain a Taxpayer Identification Number (TIN), follow these steps: 1) Complete the TIN application form (BIR Form 1902 for individuals or BIR Form 1903 for non-individuals). 2) Submit the completed form along with required documents such as valid ID, birth certificate, or business registration documents to your local BIR office. 3) Pay the processing fee if applicable. 4) Wait for the processing period (typically 1-3 business days). 5) Collect your TIN card or certificate from the BIR office."
    },
    {
      id: 2,
      question: "Alteration of Name or Address in the Already Issued TIN Certificate",
      answer: "To update your name or address on an existing TIN certificate, you need to: 1) Fill out BIR Form 1905 (Application for Registration Information Update). 2) Attach supporting documents such as marriage certificate, court order for name change, or proof of new address. 3) Submit the form to your local BIR office. 4) The BIR will process your request and issue an updated TIN certificate, usually within 5-7 business days."
    },
    {
      id: 3,
      question: "Obtaining a Temporary VAT Certificate",
      answer: "To obtain a Temporary VAT Certificate: 1) Register for VAT using BIR Form 1903 or 1905 if you're already registered for other tax types. 2) Submit this form along with required documents like business permits and registration certificates. 3) Pay the annual registration fee. 4) The BIR will issue a Temporary VAT Certificate valid for a limited period (typically 120 days) while your permanent VAT registration is being processed. 5) You must display this certificate at your place of business."
    },
    {
      id: 4,
      question: "Obtaining an Income Tax Clearance Certificate for those who do not have tax liabilities",
      answer: "To obtain an Income Tax Clearance Certificate when you have no tax liabilities: 1) File BIR Form 2316 (Certificate of Income Tax Withheld) for employees or your Income Tax Return if self-employed. 2) Complete BIR Form 17.14 (Request for Tax Clearance). 3) Submit these forms along with supporting documents like proof of payment of taxes or zero tax liability. 4) The BIR will verify your tax compliance status. 5) If approved, you'll receive your Tax Clearance Certificate within 10-15 business days."
    },
    {
      id: 5,
      question: "What are the penalties for late tax filing?",
      answer: "Penalties for late tax filing typically include: 1) Surcharge: 25% of the tax due for late filing. 2) Interest: 12% per annum of the unpaid amount, computed from the due date until full payment. 3) Compromise penalty: Varies based on the tax type and amount due, starting from ₱1,000. 4) For continual non-compliance, additional penalties may apply, including potential legal action. To avoid these penalties, file and pay your taxes on time or apply for an extension before the deadline."
    },
    {
      id: 6,
      question: "How to file taxes online?",
      answer: "To file taxes online: 1) Register for an eFPS (Electronic Filing and Payment System) or eBIRForms account on the tax authority's website. 2) Download and install the latest version of eBIRForms if required. 3) Fill out the appropriate tax forms electronically. 4) Submit your completed forms through the system. 5) Pay your taxes through authorized banks, payment centers, or electronic channels linked to the tax platform. 6) Save and print your confirmation receipt for your records. Online filing is typically faster and more convenient than manual filing."
    },
    {
      id: 7,
      question: "What tax deductions are available for small businesses?",
      answer: "Common tax deductions for small businesses include: 1) Business operating expenses like rent, utilities, and supplies. 2) Employee salaries, benefits, and training costs. 3) Professional service fees (accounting, legal, etc.). 4) Marketing and advertising expenses. 5) Business travel and vehicle expenses. 6) Insurance premiums related to business. 7) Depreciation of business assets and equipment. 8) Home office deduction if applicable. 9) Research and development costs. 10) Retirement plan contributions. Proper documentation is essential for claiming these deductions."
    },
    {
      id: 8,
      question: "How to appeal a tax assessment?",
      answer: "To appeal a tax assessment: 1) File a formal protest letter within 30 days of receiving the assessment notice. 2) Include supporting documents that justify your disagreement with the assessment. 3) Request a formal hearing if necessary. 4) If the initial appeal is denied, you may file a petition for review with the appropriate tax court or appellate division within the prescribed period (usually 30 days from receipt of denial). 5) Consider seeking assistance from a tax professional throughout this process to increase your chances of a successful appeal."
    }
  ];

  // Filter FAQs based on search term
  const filteredFAQs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle FAQ expansion
  const toggleFAQ = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="faq-list-container">
      <div className="faq-list-header">
        <h1>Tax System Frequently Asked Questions</h1>
        <p>Find answers to common questions about tax procedures and requirements</p>
      </div>

      <div className="faq-search-bar">
        <div className="search-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search for tax questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button 
              className="clear-search" 
              onClick={() => setSearchTerm("")}
            >
              ×
            </button>
          )}
        </div>
      </div>

      <div className="faq-items">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq) => (
            <div 
              key={faq.id} 
              className={`faq-item ${expandedId === faq.id ? 'expanded' : ''}`}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(faq.id)}
              >
                <h3>Q: {faq.question}</h3>
                {expandedId === faq.id ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              
              {expandedId === faq.id && (
                <div className="faq-answer">
                  <p><strong>A:</strong> {faq.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No questions found matching "{searchTerm}"</p>
            <button onClick={() => setSearchTerm("")}>Clear Search</button>
          </div>
        )}
      </div>

      <div className="faq-footer">
        <p>Can't find what you're looking for? <a href="/faqask">Ask your question</a></p>
      </div>
    </div>
  );
}