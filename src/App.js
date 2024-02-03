import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Post from './pages/Post';
import Taxonomy from './pages/Taxonomy';
import Templates from './pages/Templates';
import Media from './pages/Media';
import User from './pages/User';
import Seo from './pages/Seo';
import Menu from './pages/Menu';
import Footer from './components/Footer';
import 'assets/styles/tailwind.css';

function App() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/settings" component={Settings} />
                    <Route exact path="/menu" component={Menu} />
                    <Route exact path="/post" component={Post} />
                    <Route exact path="/taxonomy" component={Taxonomy} />
                    <Route exact path="/templates" component={Templates} />
                    <Route exact path="/media" component={Media} />
                    <Route exact path="/user" component={User} />
                    <Route exact path="/seo" component={Seo} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default App;
