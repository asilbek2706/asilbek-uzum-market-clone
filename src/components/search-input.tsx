import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

const SearchInput = () => {
    const [inputValue, setInputValue] = useState("")
    return (
        <div className="flex border border-gray-300 max-w-126.75 w-full rounded-md">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Mahsulotlarni va turkunlarni izlash"
                className="flex border-0 bg-transparent outline-none grow rounded-md search-input"
            />
            <div className="flex items-center justify-center bg-gray-300 search-button">
                <MagnifyingGlassIcon className="w-5 h-5" />
            </div>
        </div>
    )
}

export default SearchInput