import React, { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTv, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faXbox, faPlaystation, faApple, faAndroid, } from '@fortawesome/free-brands-svg-icons';

import poster1 from '../assets/bevHillsCop.svg';
import poster2 from '../assets/goodfellas.svg';
import poster3 from '../assets/terminator.svg';
import poster4 from '../assets/pulpfiction.svg';
import poster5 from '../assets/friends.svg';
import poster6 from '../assets/heman.svg';
import poster7 from '../assets/inLivingColor.svg';
import poster8 from '../assets/topgun.svg';
import poster9 from '../assets/fullHouse.svg';
import logo from '../assets/mememoji2.svg';

import '../assets/landing.css';

const Landing = () => {

    return (
        <>
            <div className="bg-[url('https://tailwindui.com/img/beams-home@95.jpg')]">
                {/* NAVIGATION BAR */}
                <Disclosure as="nav" className=" pt-5 px-4 pb-20">
                    {({ open }) => (
                        <>
                            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                                <div className="relative flex h-16 items-center justify-between">
                                    <div className="flex flex-1 items-center sm:items-stretch">
                                        <div className="flex flex-shrink-0 items-center">
                                            <img
                                                className="block h-20 w-auto lg:block"
                                                src={logo}
                                                alt="Your Company"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                        <a
                                            href="/signin"
                                            className="flex w-full items-center justify-center rounded-md px-3 py-1 text-base font-medium text-indigo-700 hover:bg-indigo-700 hover:text-white md:py-4 md:px-10 md:text-lg"
                                        >
                                            Sign In
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </Disclosure>
                {/* END NAVIGATION BAR */}

                {/* HERO */}
                <div className="relative overflow-hidden">
                    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                            <div className="sm:max-w-lg">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">A Video Vault of</span>{' '}
                                    <span className="block text-indigo-600 xl:inline">80's and 90's Classics</span>
                                </h1>
                                <p className="mt-4 text-xl text-gray-500">
                                    Someone said the best things in life are free... Stream all of your 80's and 90's classics on Zovy. Unlimited titles, unlimted devices and all commercial free!
                                </p>
                            </div>
                            <div>
                                <div className="mt-10">
                                    {/* Decorative image grid */}
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                                    >
                                        <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                            <div className="flex items-center space-x-6 lg:space-x-8">
                                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                        <img
                                                            src={poster1}
                                                            alt=""
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        <img
                                                            src={poster2}
                                                            alt=""
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        <img
                                                            src={poster3}
                                                            alt=""
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        <img
                                                            src={poster4}
                                                            alt=""
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        <img
                                                            src={poster5}
                                                            alt=""
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        <img
                                                            src={poster6}
                                                            alt=""
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>
                                                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                        <img
                                                            src={poster7}
                                                            alt=""
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href="/register"
                                        className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END HERO */}
            </div>

            {/* SECTION 1 - MOVIES */}
            <div className="bg-white py-40">
                <div className="relative overflow-hidden">
                    <div className="mx-auto max-w-7xl">
                        <div className="bg-gray-30 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
                            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                <div className="sm:text-center lg:text-left">
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                                        <span className="block xl:inline">Stream nostalgia</span>{' '}
                                        <span className="block text-indigo-600 xl:inline">on demand</span>
                                    </h1>
                                    <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                                        Fall in love with familiar favorites all over again in a growing collection right here on Zovy.
                                    </p>
                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                        <div className="rounded-md shadow">
                                            <a
                                                href="/register"
                                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                                            >
                                                Sign up, it's free!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <img
                            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                            src={poster8}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            {/* END SECTION 1 - MOVIES */}

            {/* SECTION 2 - TV SHOWS */}
            <div className="bg-white bg-[url('https://tailwindui.com/img/beams-components.png')] lg:py-40">
                <div className="relative overflow-hidden">
                    <div className="mx-auto max-w-7xl">
                        <div className="pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
                            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                                <div className="sm:text-center lg:text-left">
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                                        <span className="block xl:inline">Family time</span>{' '}
                                        <span className="block text-indigo-600 xl:inline">like it's 1995</span>
                                    </h1>
                                    <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                                        The best time is family time. Watch all of your family favorites right here on Zovy.
                                    </p>
                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                        <div className="rounded-md shadow">
                                            <a
                                                href="/register"
                                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                                            >
                                                Sign up, it's free!
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <img
                            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                            src={poster9}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            {/* END SECTION 2 - TV SHOWS */}

            {/* WAYS TO WATCH */}
            <div className="bg-white py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-lg font-semibold text-indigo-600">How to Stream</h2>
                        <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                            Stream Zovy on all of your devices
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Stream Zovy on unlimited devices, from your phone to your smart watch. You can view your favorite anywhere, anytime and on any device!
                        </p>
                    </div>

                    <div className="mt-16">
                        <dl className="flex justify-content-center space-x-6 text-gray-700">
                            <div className="flex items-center justify-center rounded-md">
                                <FontAwesomeIcon icon={faTv} className="h-6 w-6" />
                            </div>
                            <div className="flex items-center justify-center rounded-md">
                                <FontAwesomeIcon icon={faApple} className="h-6 w-6" />
                            </div>
                            <div className="flex items-center justify-center rounded-md">
                                <FontAwesomeIcon icon={faAndroid} className="h-6 w-6" />
                            </div>
                            <div className="flex items-center justify-center rounded-md">
                                <FontAwesomeIcon icon={faDesktop} className="h-6 w-6" />
                            </div>
                            <div className="flex items-center justify-center rounded-md">
                                <FontAwesomeIcon icon={faXbox} className="h-6 w-6" />
                            </div>
                            <div className="flex items-center justify-center rounded-md">
                                <FontAwesomeIcon icon={faPlaystation} className="h-6 w-6" />
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            {/* END WAYS TO WATCH */}

            {/* CTA */}
            <div className="bg-gray-700">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        <span className="block">Ready to dive in?</span>
                        <span className="block text-indigo-500">Stream your favorites for free today.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <a
                                href="/register"
                                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                            >
                                Get started
                            </a>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <a
                                href="/register"
                                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                            >
                                Have an Account?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* END CTA */}

            {/* FOOTER */}

            {/* END FOOTER */}
        </>
    );
}

export default Landing;



