import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/component/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        var Layout = DefaultLayout;

                        if (route.layout) Layout = route.layout;
                        else if (route.layout === null) Layout = Fragment;

                        return (
                            <Route
                                path={route.path}
                                element={
                                    <Layout>
                                        <route.component />
                                    </Layout>
                                }
                                key={index}
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
