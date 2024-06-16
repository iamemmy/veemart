import { Fragment, React, useState } from 'react';
import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Notification({ message, customClass, icon: Icon }) {

  const [isVisible, setIsVisible] = useState(true);
  const closeNotification = () => {
    setIsVisible(false);
  };

  return (
    <div className={`z-9999 px-2 w-full flex justify-end fixed lg:right-2 right-0 top-16 ${customClass}`}>
      
      <Transition
        show={isVisible}
        as={Fragment}
        enter="transform ease-out duration-300 transition"
        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {/* <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                <XCircleIcon className="h-6 w-6 text-red-500" aria-hidden="true" /> */}
                {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900">{message}</p>
              </div>
              <div className="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={closeNotification}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
        </Transition>

    </div>
  )
}