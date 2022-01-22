import {Icon} from "../../Icons";

function Search() {
    return (
        <div className="mr-auto ml-4 relative">
            <label htmlFor="search-input" className="w-12 text-black h-10 flex items-center justify-center absolute top-0 left-0">
                <Icon name="search" size={24} />
            </label>
            <input autoFocus={true} type="text" id="search-input" className="h-10 pl-12 bg-white outline text-black font-medium rounded-3xl text-sm placeholder-black/50 max-w-full w-[22.75rem]" placeholder="Artists, songs, or podcasts"/>
        </div>
    )
}

export default Search