import {useDispatch, useSelector} from "react-redux";
import {setExpandedImage} from "stores/player";
import {Icon} from "Icons";

function SidebarCover() {

    const current = useSelector(state => state.player.current)
    const dispatch = useDispatch()


    return (
        <div className="pt-[100%] relative bg-black group">
            <img src={current.image} className="w-full h-full object-cover absolute top-0 left-0" alt=""/>
            <button onClick={() => dispatch(setExpandedImage(false))} className="w-6 h-6 bg-black opacity-0 group-hover:opacity-60 hover:!opacity-80 hover:scale-[1.06] rounded-full absolute top-1 right-1 -rotate-90 flex items-center justify-center">
                <Icon size={16} name="arrowLeft" />
            </button>
        </div>
    )
}

export default SidebarCover