import { PencilIcon } from "@heroicons/react/outline";

export default function Notes() {
  return (
    <>
      <h3 className="font-medium text-gray-900">Notes</h3>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-sm text-gray-500 italic">Add notes to this book.</p>
        <button
          type="button"
          className="bg-white rounded-full h-8 w-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <PencilIcon className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Add notes</span>
        </button>
      </div>
    </>
  )
}