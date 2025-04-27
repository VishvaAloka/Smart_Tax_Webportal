import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  DollarSign,
  FileText,
  Users,
  AlertCircle,
  CheckCircle,
  Settings,
  Search,
  Download,
} from "lucide-react";

const AdminUser = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });
  // Add state for user type filter
  const [userTypeFilter, setUserTypeFilter] = useState("all");

  // Fetch users from the backend
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
        showNotification("Failed to load users", "error");
      });
  }, []);

  // Handle edit
  const handleEdit = (user) => {
    setEditUser(user);
    setShowEditModal(true);
  };

  // Handle delete
  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`http://localhost:5000/api/users/${userId}`)
        .then(() => {
          setUsers(users.filter((user) => user._id !== userId));
          showNotification("User deleted successfully", "success");
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
          showNotification("Failed to delete user", "error");
        });
    }
  };

  // Handle form submission for editing user details
  const handleSubmitEdit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/users/${editUser._id}`, editUser)
      .then((response) => {
        setUsers(
          users.map((user) =>
            user._id === editUser._id ? response.data : user
          )
        );
        setShowEditModal(false);
        showNotification("User updated successfully", "success");
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        showNotification("Failed to update user", "error");
      });
  };

  // Show notification
  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "" });
    }, 3000);
  };

  // Handle input change for editing
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  // Handle report download
  const handleDownloadReport = () => {
    setLoading(true);

    // You can replace this with actual API call to download the report
    try {
      // Generate CSV content from the users array
      const csvContent = generateCSV(filteredUsers);

      // Create a Blob containing the CSV data
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

      // Create a link element
      const link = document.createElement("a");

      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);

      // Set link's href to the URL
      link.href = url;

      // Set the file name
      link.download = "users_report.csv";

      // Append the link to the body
      document.body.appendChild(link);

      // Click the link to trigger the download
      link.click();

      // Clean up by removing the link and revoking the URL
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setLoading(false);
      showNotification("Report downloaded successfully", "success");
    } catch (error) {
      console.error("Error downloading report:", error);
      setLoading(false);
      showNotification("Failed to download report", "error");
    }
  };

  // Helper function to generate CSV from users data
  const generateCSV = (users) => {
    // CSV header
    let csv = "Username,Email,User Type,Status\n";

    // Add each user as a row
    users.forEach((user) => {
      csv += `${user.username},${user.email},${user.user_type},Active\n`;
    });

    return csv;
  };

  // Handle user type filter change
  const handleUserTypeFilterChange = (e) => {
    setUserTypeFilter(e.target.value);
  };

  // Filter users based on search term and user type filter
  const filteredUsers = users.filter(
    (user) =>
      (userTypeFilter === "all" || user.user_type === userTypeFilter) &&
      (user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.user_type.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Tax-related user types
  const userTypeIcons = {
    admin: <DollarSign className="animate-bounce text-green-600" size={20} />,
    user: <FileText className="animate-pulse text-blue-600" size={20} />,
    accountant: <FileText className="animate-ping text-purple-600" size={20} />,
    taxPreparer: (
      <DollarSign className="animate-spin text-yellow-600" size={20} />
    ),
    auditor: <AlertCircle className="animate-pulse text-red-600" size={20} />,
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Updated Header */}
      <div className="bg-white-600 text-white p-6 shadow-lg">
        <div className="container mx-auto">
          {/* Main Title & Subtitle */}
          <div className="mb-4"></div>

          <div className="flex justify-between items-center">
            {/* Navigation Links */}

            {/* Search & User Section */}
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Search className="text-white-400" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-8">
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between border-l-4 border-blue-500">
            <div>
              <p className="text-gray-500 text-sm">Total Users</p>
              <p className="text-3xl font-bold">{users.length}</p>
            </div>
            <Users className="text-blue-500 animate-pulse" size={40} />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between border-l-4 border-green-500">
            <div>
              <p className="text-gray-500 text-sm">Admin Users</p>
              <p className="text-3xl font-bold">
                {users.filter((user) => user.user_type === "admin").length}
              </p>
            </div>
            <DollarSign className="text-green-500 animate-bounce" size={40} />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between border-l-4 border-purple-500">
            <div>
              <p className="text-gray-500 text-sm">Regular Users</p>
              <p className="text-3xl font-bold">
                {users.filter((user) => user.user_type === "user").length}
              </p>
            </div>
            <FileText className="text-purple-500 animate-pulse" size={40} />
          </div>
        </div>

        {/* User Management Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold flex items-center">
                <Users className="mr-2" size={24} />
                User Management
                <Settings
                  className="ml-2 animate-spin text-gray-400"
                  size={20}
                />
              </h2>
              <p className="text-gray-500">
                Manage all your tax administration users
              </p>
            </div>

            {/* Download Report Button */}
            <button
              onClick={handleDownloadReport}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-150 shadow-md"
            >
              <Download className="mr-2" size={20} />
              Download Report
            </button>
          </div>

          {/* Search & Filter */}
          <div className="p-4 bg-gray-50 border-b flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-gray-400" size={20} />
              </div>
              <input
                type="text"
                placeholder="Search users..."
                className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">Show:</span>
              <select
                className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={userTypeFilter}
                onChange={handleUserTypeFilterChange}
              >
                <option value="all">All Users</option>
                <option value="admin">Admins</option>
                <option value="user">Regular Users</option>
                <option value="accountant">Accountants</option>
                <option value="taxPreparer">Tax Preparers</option>
                <option value="auditor">Auditors</option>
              </select>
            </div>
          </div>

          {/* Table */}
          {loading ? (
            <div className="flex justify-center items-center p-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Username
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr
                      key={user._id}
                      className="hover:bg-gray-50 transition duration-150"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                            {user.username.charAt(0).toUpperCase()}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.username}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {user.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {userTypeIcons[user.user_type] || userTypeIcons.user}
                          <span className="ml-2 text-sm text-gray-900 capitalize">
                            {user.user_type}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          className="text-blue-600 hover:text-blue-900 px-3 py-1 rounded mr-2 transition duration-150 hover:bg-blue-50"
                          onClick={() => handleEdit(user)}
                        >
                          Edit
                        </button>
                        <button
                          className="text-red-600 hover:text-red-900 px-3 py-1 rounded transition duration-150 hover:bg-red-50"
                          onClick={() => handleDelete(user._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Pagination */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">{filteredUsers.length}</span> of{" "}
                  <span className="font-medium">{filteredUsers.length}</span>{" "}
                  results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600 hover:bg-blue-100"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    Next
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Edit User</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setShowEditModal(false)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmitEdit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={editUser.username}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={editUser.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="user_type"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  User Type
                </label>
                <select
                  id="user_type"
                  name="user_type"
                  value={editUser.user_type}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="user">Regular User</option>
                  <option value="admin">Administrator</option>
                  <option value="accountant">Accountant</option>
                  <option value="taxPreparer">Tax Preparer</option>
                  <option value="auditor">Auditor</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Notification */}
      {notification.show && (
        <div
          className={`fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 ${
            notification.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          {notification.type === "success" ? (
            <CheckCircle size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
          <p>{notification.message}</p>
        </div>
      )}
    </div>
  );
};

export default AdminUser;
