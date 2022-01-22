import Section from "../components/Section";
import songs from "data/songs";

function Home() {

    return (
        <div className="grid gap-y-8">
            <Section
                title="Episodes for you"
                more="/podcasts"
                items={songs}
            />
            <Section
                title="Jump back in"
                more="/jump-back"
                items={songs}
            />
            <Section
                title="Recently played"
                more="/jump-back"
                items={songs}
            />
        </div>
    )
}

export default Home