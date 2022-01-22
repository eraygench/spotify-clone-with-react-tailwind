import { Switch,Route } from "react-router-dom";
import Navbar from "components/Navbar";

import Home from "views/Home";
import Search from "views/Search";
import Collection from "views/Collection";

function Content() {
    return (
        <main className="flex-auto overflow-auto">
            <Navbar />
            <div className="px-8 py-4">
                <Switch>
                    <Route exact path="/" >
                        <Home />
                    </Route>
                    <Route exact path="/search">
                        <Search />
                    </Route>
                    <Route exact path="/collection">
                        <Collection />
                    </Route>
                </Switch>
            </div>
        </main>
    )
}

export default Content