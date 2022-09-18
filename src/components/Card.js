import React, { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import '../App.css';

function Card({ actors, genre, rated, released, plot, poster, title }) {
    // MODAL 1
    const [open, setOpen] = useState(false);
    const cancelButtonRef = useRef(null);
    const handleOpen = () => setOpen(true);

    // MODAL 2
    const [open2, setOpen2] = useState(false);
    const cancelButtonRef2 = useRef(null);

    return (
        <>
            <a
                onClick={handleOpen}
                className='m-4' style={{ height: 300, width: 210 }}>
                <img src={poster} alt="Poster of movie/show from api" className="overflow-hidden rounded-md" />
            </a>

            {/* MODAL 1 */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="w-auto">
                                                <img src={poster} style={{ height: 225, width: 150 }} alt="Poster of movie/show from api" />
                                            </div>
                                            <div className="mt-3 text-start sm:mt-0 sm:ml-4 sm:text-left">
                                                <Dialog.Title as="h1" className="text-xl font-bold leading-6 text-gray-900">
                                                    {title}
                                                </Dialog.Title>
                                                <div className="mt-4">
                                                    <p className="mb-2"><strong>Release Date:</strong> {released}</p>
                                                    <p className="mb-2"><strong>Genre:</strong> {genre}</p>
                                                    <p className=""><strong>Rating:</strong> {rated}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <p className="pb-2"><strong>Staring:</strong> {actors}</p>
                                            <p className="pb-2"><strong>Synopsis: </strong> {plot}</p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-blue-600 px-4 py-2 text-base font-bold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => setOpen2(true)}
                                        >
                                            Watch Trailer
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => setOpen(false)}
                                            ref={cancelButtonRef}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* MODAL 2 */}
            <Transition.Root show={open2} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <Dialog.Title as="h1" className="text-xl text-center font-bold leading-6 text-gray-900 mb-10">
                                            Trailer
                                        </Dialog.Title>
                                        <div>
                                            <p className="text-base mb-4">I have watched this interview a few times and I feel it can be credited to the creation of a lot of start ups and thousands of jobs created as a result. Enjoy.</p>
                                            <div className="flex justify-center">
                                                <iframe
                                                    title="trailer"
                                                    id="trailer"
                                                    width="560"
                                                    height="315"
                                                    src="https://www.youtube.com/embed/Lb4IcGF5iTQ"
                                                    frameborder="0"
                                                    allowfullscreen
                                                >
                                                </iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                            onClick={() => setOpen2(false)}
                                            ref={cancelButtonRef2}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}

export default Card;