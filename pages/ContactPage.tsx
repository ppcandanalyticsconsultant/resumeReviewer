
import React from 'react';

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const LocationIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const ContactPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="w-full max-w-2xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    Contact Us
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                    We'd love to hear from you. Here's how you can reach us.
                </p>
                <div className="space-y-6">
                    <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                            <LocationIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our Office</h3>
                            <p className="text-gray-600 dark:text-gray-400">123 Innovation Drive, Tech City, 12345</p>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex-shrink-0 bg-green-100 dark:bg-green-900 p-3 rounded-full">
                            <MailIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email Us</h3>
                            <a href="mailto:contact@resumeuploader.com" className="text-green-600 dark:text-green-400 hover:underline">contact@resumeuploader.com</a>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex-shrink-0 bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full">
                            <PhoneIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Call Us</h3>
                            <a href="tel:+1234567890" className="text-indigo-600 dark:text-indigo-400 hover:underline">+1 (234) 567-890</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
