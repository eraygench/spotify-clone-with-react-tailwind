import categories from "data/categroies";
import favoriteGenres from "data/favorite-genres";
import Title from "../components/Title";
import ScrollContainer from "react-indiana-drag-scroll";
import {useEffect, useRef, useState} from "react";
import {Icon} from "Icons";
import FavoriteCategoryItem from "../components/FavoriteCategoryItem";
import CategoryItem from "../components/CategoryItem";


function Search() {

    const favoriteGenresRef = useRef()
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)

    useEffect(() => {
        if(favoriteGenresRef.current) {

            const scrollHandle = () => {
                const isEnd = Math.floor(favoriteGenresRef.current.scrollLeft) + favoriteGenresRef.current.offsetWidth === favoriteGenresRef.current.scrollWidth
                const isBegin = favoriteGenresRef.current.scrollLeft === 0
                setPrev(!isBegin)
                setNext(!isEnd)
            }

            scrollHandle()

            favoriteGenresRef.current.addEventListener("scroll", scrollHandle)

            return () => {
                favoriteGenresRef.current?.removeEventListener("scroll", scrollHandle)
            }
        }
    }, [favoriteGenresRef])
    
    const slideFavoritesNext = () => {
      favoriteGenresRef.current.scrollLeft += favoriteGenresRef.current.offsetWidth - 300
    }

    const slideFavoritesPrev = () => {
      favoriteGenresRef.current.scrollLeft -= favoriteGenresRef.current.offsetWidth - 300
    }

    return (
        <>
            <section className="mb-8">
                <Title title="Your top genres" />
                <div className="relative">
                    {prev && <button className="w-12 absolute -left-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 h-12 rounded-full bg-white text-black flex items-center justify-center" onClick={slideFavoritesPrev}>
                        <Icon name="prev" size={24} />
                    </button>}
                    {next && <button className="w-12 absolute -right-6 hover:scale-[1.06] z-10 top-1/2 -translate-y-1/2 h-12 rounded-full bg-white text-black flex items-center justify-center" onClick={slideFavoritesNext}>
                        <Icon name="next" size={24} />
                    </button>}
                    <ScrollContainer innerRef={favoriteGenresRef} className="flex scroll-smooth overflow-x-auto gap-x-6">
                        {favoriteGenres.map((genre, index) => <FavoriteCategoryItem key={index} genre={genre} />)}
                    </ScrollContainer>
                </div>
            </section>
            <section>
                <Title title="Browse all" />
                <div className="grid grid-cols-5 gap-6">
                    {categories.map((category, index) => <CategoryItem key={index} category={category} />)}
                </div>
            </section>
        </>
    )
}

export default Search