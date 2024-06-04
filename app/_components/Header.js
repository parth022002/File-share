import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <div>
            <header className="bg-gray-900 text-white">
                <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-2 sm:px-2 lg:px-2">
                    <div className="flex items-center gap-1">
                        <Image src='/logo.png' width={100} height={100} alt="WebShare Logo" />
                        <span className="text-xl font-semibold text-teal-700">WebShare</span>
                    </div>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-m">
                                <li className="border-r border-white pr-4">
                                    <a className="transition hover:text-gray-400/85" href="#"> Home </a>
                                </li>

                                <li className="border-r border-white pr-4 ">
                                    <a className="transition hover:text-gray-400/85" href="/files"> Share </a>
                                </li>

                                <li className="border-r border-white pr-4">
                                    <a className="transition hover:text-gray-400/85" href="#"> About Us </a>
                                </li>

                                <li className='pr-4'>
                                    <a className="transition hover:text-gray-400/85" href="#"> Contact </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-900"
                                    href="/files"
                                >
                                    Get Started
                                </a>
                            </div>

                            <button
                                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
