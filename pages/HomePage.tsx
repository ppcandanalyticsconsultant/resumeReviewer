
import React, { useState, useRef } from 'react';

const UploadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
);

const DocumentIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const HomePage: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      setUploadSuccess(false);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    setIsUploading(true);
    setUploadSuccess(false);

    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      setSelectedFile(null);
      if(fileInputRef.current) {
          fileInputRef.current.value = "";
      }
    }, 2000);
  };
  
  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-lg p-8 space-y-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Resume Uploader
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Select your resume file (PDF, DOCX) and upload it to our system.
        </p>
        
        <div 
          className="w-full h-48 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          onClick={triggerFileSelect}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          />
          {selectedFile ? (
            <div className="text-center text-blue-500">
              <DocumentIcon className="h-12 w-12 mx-auto mb-2" />
              <p className="font-semibold">{selectedFile.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">({(selectedFile.size / 1024).toFixed(2)} KB)</p>
            </div>
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400">
              <UploadIcon className="h-12 w-12 mx-auto mb-2" />
              <p className="font-semibold">Click to browse or drag & drop</p>
              <p className="text-sm">Maximum file size: 5MB</p>
            </div>
          )}
        </div>

        <button
          onClick={handleUpload}
          disabled={!selectedFile || isUploading}
          className="w-full px-4 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 ease-in-out flex items-center justify-center"
        >
          {isUploading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Uploading...
            </>
          ) : 'Upload Resume'}
        </button>

        {uploadSuccess && (
          <div className="mt-4 p-4 text-green-800 bg-green-100 dark:bg-green-900 dark:text-green-200 border border-green-200 dark:border-green-700 rounded-lg">
            File uploaded successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
