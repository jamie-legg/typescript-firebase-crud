import { ViewGridAddIcon, ViewListIcon } from "@heroicons/react/outline"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  
  const tabs = [
    { name: 'Recently Viewed', href: '#', current: true },
    { name: 'Recently Added', href: '#', current: false },
    { name: 'Favorited', href: '#', current: false },
  ]



    return (
        <div className="mt-3 sm:mt-2">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            defaultValue="Recently Viewed"
          >
            <option>Recently Viewed</option>
            <option>Recently Added</option>
            <option>Favorited</option>
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center border-b border-gray-200">
            <nav className="flex-1 -mb-px flex space-x-6 xl:space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  aria-current={tab.current ? 'page' : undefined}
                  className={classNames(
                    tab.current
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
                  )}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
            <div className="hidden ml-6 bg-gray-100 p-0.5 rounded-lg items-center sm:flex">
              <button
                type="button"
                className="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              >
                <ViewListIcon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Use list view</span>
              </button>
              <button
                type="button"
                className="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              >
                <ViewGridAddIcon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Use grid view</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}