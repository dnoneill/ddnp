// Example built from HeadlessUI

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid/index.js";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavPopover({ title, options }) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "group rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ddnpblue"
            )}
          >
            <span>{title}</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Popover.Panel className="absolute z-20 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 bg-white/100">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                {options.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    {/* <item.icon
                        className="flex-shrink-0 h-6 w-6 text-ddnpblue"
                        aria-hidden="true"
                      /> */}
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">
                        {item.name}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
