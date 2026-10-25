import React, { useState } from 'react';

export default function MedicineExplainer() {
  // State variables to manage the uploaded image, loading status, and translated result
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resultText, setResultText] = useState("");

  // Function to handle image upload and simulate backend API processing
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    
    // Exit the function if the user cancels the file selection
    if (!file) return;
    
    // Generate a temporary local URL to display the selected image on the screen
    setImage(URL.createObjectURL(file));
    
    // Show the loading spinner while "processing" the image
    setLoading(true);

    // Simulate a 3-second delay to represent API calls to Sarvam Vision, Groq, and Sarvam Bulbul
    setTimeout(() => {
      // Set the mock Hindi translation text after the delay
      setResultText("यह पेरासिटामोल है। इसका उपयोग बुखार और शरीर दर्द को कम करने के लिए किया जाता है।");
      
      // Hide the loading spinner once the result is ready
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center p-6 font-sans">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">दवा अनुवादक</h1>
      
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
        
        {/* Upload Button */}
        <label className="bg-green-600 text-white px-6 py-3 rounded-full text-lg cursor-pointer hover:bg-green-700 transition w-full text-center">
          दवा की फोटो लें
          <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
        </label>

        {/* Display the uploaded image if it exists in the state */}
        {image && <img src={image} alt="Medicine" className="mt-6 w-48 h-48 object-cover rounded-lg border-2 border-green-200" />}

        {/* Loading Spinner and text */}
        {loading && (
          <div className="mt-6 flex flex-col items-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-600"></div>
            <p className="text-gray-500 mt-2 text-sm">जानकारी निकाली जा रही है...</p>
          </div>
        )}

        {/* Display the result container only when loading is false and resultText is available */}
        {!loading && resultText && (
          <div className="mt-6 w-full text-center">
            
            {/* Translated text display area */}
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
               <p className="text-gray-800 text-lg">{resultText}</p>
            </div>
            
            {/* Audio Play Button */}
            <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-blue-600 transition flex items-center justify-center w-full gap-2">
              <span>🔊 सुनिए</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}