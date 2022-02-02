import { HeartIcon } from "@heroicons/react/outline";
import useSWR from "swr";
import Notes from "./Notes";


export default function CurrentBook({ book, index }) {
    return (
        <aside className="hidden w-96 bg-white p-8 border-l border-gray-200 overflow-y-auto lg:block">
        <div className="pb-16 space-y-6">
          <div>
            <div className="mt-4 flex items-start justify-between">
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  <span className="sr-only">Details for </span>
                  {book.title}
                </h2>
                <p className="text-sm font-medium text-gray-500">{book.authors}</p>
              </div>
              <button
                type="button"
                className="ml-4 bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <HeartIcon className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Favorite</span>
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Information</h3>
            <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
            <div className="flex justify-between items-center">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                    # of Pages
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900">
                    {book.num_pages}
                </dd>
            </div>
            <div className="flex justify-between items-center">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                    ISBN
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900">
                    {book.isbn}
                </dd>
            </div>
            <div className="flex justify-between items-center">
                <dt className="text-sm leading-5 font-medium text-gray-500">
                    Publisher
                </dt>
                <dd className="mt-1 text-sm leading-5 text-gray-900">
                    {book.publisher}
                </dd>
            </div>
            </dl>
          </div>
          <div>
          </div>
          <Notes />
        </div>
      </aside>
    )
}