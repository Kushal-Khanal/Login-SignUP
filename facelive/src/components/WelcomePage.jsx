// src/components/WelcomePage.jsx
import logo from "../assets/image.png";
import backgroundImage from "../assets/bgimage.png";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";

const WelcomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
          <span className="text-lg font-bold">Live Face Mask Detector</span>
        </div>
        <div className="space-x-4">
          <a
            href="/login"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Login
          </a>
          <a href="/signup" className="text-sm text-white hover:underline">
            Sign Up
          </a>
        </div>
      </nav>

      {/* Background Section */}
      <div className="container mx-auto px-32 py-16 bg-gray-200">
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "400px",
          marginBottom: "20px",
        }}
      ></div>

      {/* Main Content */}
      
        <h1 className="text-lg text-center mb-8">
          Live Face Mask Detection is a real-time solution that helps identify
          whether individuals are wearing masks, enhancing safety and health
          protection. Using advanced computer vision and machine learning
          techniques, it ensures that public spaces remain safer by monitoring
          mask compliance instantly. The system detects faces and checks for
          masks, making it an essential tool for environments where health
          guidelines are critical.
        </h1>
        <main>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Our Team Members!</h1>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src="kushal.jpg"
                alt="Profile 1"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Kushal Khanal
              </h3>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/khanalkushal72"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://github.com/Kushal-Khanal"
                  className="text-black hover:text-blue-950"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/kushal-khanal-785868282/"
                  className="text-blue-400 hover:text-blue-500"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile 2"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                Samyam Pradhan
              </h3>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/samyam.pradhan.7"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <FaFacebook />
                </a>
                <a href="https://github.com/Samyam-Pradhan" className="text-black hover:text-blue-950">
                  <FaGithub />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-500">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile 3"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Simon K.C.</h3>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100008788968005"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <FaFacebook />
                </a>
                <a href="#" className="text-black hover:text-blue-950">
                  <FaGithub />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-500">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>
          &copy; {new Date().getFullYear()} Live Face Mask Detector. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default WelcomePage;
