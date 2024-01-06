"use client";
import React from "react";
import { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";

const menu = [
  { id: 1, name: "Home" },
  { id: 2, name: "Details" },
  { id: 3, name: "Category" },
  { id: 4, name: "My Favorites" },
  { id: 5, name: "Profile" },
  { id: 6, name: "Log In/Sing Up" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  const [query, setQuery] = useState("");
  const defaletMenu = {
    id: 0,
    name: "Menu",
  };
  const [selectedMenu, setSelectedMenu] = useState(defaletMenu);

  const filteredPeople =
    query === ""
      ? menu
      : menu.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <>
      <div className="flex justify-between items-center py-4">
        <div className="">
          <h1 className="text-3xl font-bold ml-3">pti.</h1>
        </div>
        <div className="flex gap-2 items-center justify-between ">
          <div className=" w-full ">
            <input
              type="text"
              placeholder="Search Food"
              className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2"
            />
          </div>
          <div>
            <Combobox as="div" value={selectedMenu} onChange={setSelectedMenu}>
              <div className="relative mt-2">
                <Combobox.Input
                  className="w-48 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                  onChange={(event) => setQuery(event.target.value)}
                  displayValue={(person) => person?.name}
                  readOnly
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </Combobox.Button>

                {filteredPeople.length > 0 && (
                  <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredPeople.map((person) => (
                      <Combobox.Option
                        key={person.id}
                        value={person}
                        className={({ active }) =>
                          classNames(
                            "relative cursor-default select-none py-2 pl-3 pr-9",
                            active ? "bg-indigo-600 text-white" : "text-gray-900"
                          )
                        }
                      >
                        {({ active, selected }) => (
                          <>
                            <span className={classNames("block truncate", selected && "font-semibold")}>
                              {person.name}
                            </span>

                            {selected && (
                              <span
                                className={classNames(
                                  "absolute inset-y-0 right-0 flex items-center pr-4",
                                  active ? "text-white" : "text-indigo-600"
                                )}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            )}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}
              </div>
            </Combobox>
          </div>
        </div>
      </div>
      <div className="border my-2"></div>
    </>
  );
};

export default Header;
