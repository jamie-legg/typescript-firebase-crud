
export default function Book({ book, index, onClick, isClicked }) {


    return(
        <li onClick={onClick} key={index} className={(isClicked ? `bg-green-600` : `bg-transparent`) + ` p-3 w-max rounded-2xl relative group cursor-pointer hover:bg-green-600 transition-all`}>
            <p className={(isClicked ? `text-white` : `text-gray-900`) +  ` mt-2 group-hover:text-white block text-sm font-medium truncate pointer-events-none`}>
                {book.title}
            </p>
            <p className={(isClicked ? `text-white` : `text-gray-500`) + ` block text-sm group-hover:text-white font-medium pointer-events-none`}>
                {book.authors}
            </p>
      </li>
    )
}