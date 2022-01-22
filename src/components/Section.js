import {NavLink} from "react-router-dom";
import SongItem from "./SongItem";
import Title from "./Title";

function Section({ title, more = false, children, items = false }) {

    return (
        <section>
            <Title title={title} more={more} />
            {items &&
            <div className="grid grid-cols-5 gap-x-6">
                {items.map((item, index) => <SongItem item={item} key={index} />)}
            </div>}
            {children}
        </section>
    )
}

export default Section