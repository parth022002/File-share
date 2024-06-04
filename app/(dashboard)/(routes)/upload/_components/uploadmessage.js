import React from 'react';

function AlertMessage() {
    return (
        <div
            role="alert"
            className="rounded-xl border border-gray-100 bg-white p-4 dark:border-gray-500 dark:bg-gray-800 mt-4 mb-4"
        >
            <div className="flex items-center gap-4">
                <span className="text-green-600 align-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-8 w-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </span>

                <div className="flex-1">
                    <strong className="block font-medium text-xl text-gray-900 dark:text-white">Uploaded</strong>
                    <p className="mt-1 text-m text-gray-700 dark:text-gray-200">
                        Your file upload is completed.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AlertMessage;
