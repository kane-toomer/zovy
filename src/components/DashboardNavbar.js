import React from 'react';
import { Disclosure, Menu } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom";
import { logout } from "../lib/firebase";

import logo from '../assets/mememoji2.svg';

const DashboardNavbar = ({ searchChange }) => {
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await logout()
                .then(() => {
                    navigate("/");
                })
        } catch {
            alert("Error!");
        }
    }

    return (
        <>
            {/* Navigation Bar */}
            <Disclosure as="nav" className="bg-gray-800 px-3">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="flex flex-1 items-center">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="h-14 w-auto lg:block"
                                            src={logo}
                                            alt="Your Company"
                                        />
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <div className="relative mt-1 mr-5 rounded-md shadow-sm">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1">
                                            <MagnifyingGlassIcon className="block h-5 w-5 text-gray-600" aria-hidden="true" />
                                        </div>
                                        <input
                                            type="text"
                                            name="search"
                                            id="search"
                                            className="block w-full rounded-md border-gray-300 py-2 pl-7 pr-16 sm:text-sm"
                                            placeholder="Search Title or Keyword"
                                            onChange={searchChange}
                                        />
                                    </div>
                                    {/* Sign Out Button */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <button
                                                className="text-white hover:underline hover:font-bold"
                                                onClick={handleLogout}
                                            >
                                                Sign Out
                                            </button>
                                        </div>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Disclosure>
        </>
    );
}

export default DashboardNavbar;