import { useState, useEffect } from "react";
import { Edit, Trash2, AlertCircle, CheckCircle, X, Save } from "lucide-react"; // Added Save icon
import axios from "axios";
import "../FAQS_css/FAQManage.css";

const FAQManage = () => {
  const [faqs, setFaqs] = useState([]);
  const [editData, setEditData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/faqs");
      setFaqs(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      showNotification("Error fetching FAQs", "error");
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/faqs/${id}`);
      showNotification("FAQ deleted successfully", "success");
      fetchFAQs();
    } catch (error) {
      console.error("Error deleting FAQ:", error);
      showNotification("Failed to delete FAQ", "error");
    }
  };

  const handleEdit = (faq) => {
    setEditData(faq);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/faqs/${editData._id}`, editData);
      showNotification("FAQ updated successfully", "success");
      setEditData(null); // Close the edit form after successful update
      fetchFAQs(); // Refresh the FAQ list
    } catch (error) {
      console.error("Error updating FAQ:", error);
      showNotification("Failed to update FAQ", "error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const filteredFaqs = faqs
    .filter((faq) =>
      faq.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.question?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name?.localeCompare(b.name);
      if (sortBy === "date" && a.createdAt && b.createdAt)
        return new Date(b.createdAt) - new Date(a.createdAt);
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {notification && (
        <div
          className={`fixed top-4 right-4 px-6 py-3 rounded-md shadow-md flex items-center gap-2 z-50 ${
            notification.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {notification.type === "success" ? (
            <CheckCircle size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
          <span>{notification.message}</span>
        </div>
      )}

      <div className="max-w-6xl mx-auto p-4">
        <header className="mb-8">
        
          <p className="text-gray-700 text-center mt-2">
            View, edit, and manage frequently asked questions
          </p>
        </header>

        {editData ? (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Edit FAQ</h2>
              <button
                onClick={() => setEditData(null)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={editData.name || ""}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={editData.email || ""}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Telephone
                  </label>
                  <input
                    type="text"
                    name="telephone"
                    value={editData.telephone || ""}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-black mb-1">
                  Question
                </label>
                <textarea
                  name="question"
                  value={editData.question || ""}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                ></textarea>
              </div>

              <div className="mt-8 flex justify-end space-x-4">
                <button
                  onClick={() => setEditData(null)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-black hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
                >
                  <Save size={16} />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="name">Name</option>
                  <option value="date">Date (newest)</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.length === 0 ? (
                  <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <p className="text-gray-600">No FAQs found matching your search.</p>
                  </div>
                ) : (
                  filteredFaqs.map((faq) => (
                    <div key={faq._id} className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-blue-500">
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                          <h3 className="text-lg font-semibold text-gray-800">{faq.name || "No Name"}</h3>
                          <div className="mt-2 md:mt-0 text-sm text-gray-500">
                            {faq.createdAt ? new Date(faq.createdAt).toLocaleDateString() : ""}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="text-gray-800">{faq.email || "—"}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Telephone</p>
                            <p className="text-gray-800">{faq.telephone || "—"}</p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <p className="text-sm text-gray-500">Question</p>
                          <p className="text-gray-800 mt-1">{faq.question || "—"}</p>
                        </div>
                        
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => handleEdit(faq)}
                            className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                          >
                            <Edit size={16} />
                            <span>Edit</span>
                          </button>
                          <button
                            onClick={() => handleDelete(faq._id)}
                            className="flex items-center gap-1 px-3 py-1.5 bg-red-100 text-red-700 rounded-md hover:bg-red-200"
                          >
                            <Trash2 size={16} />
                            <span>Delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FAQManage;