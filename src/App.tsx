import { Route, Routes } from 'react-router-dom';
import Layout from './_root/layout';
import Home from './_root/pages/home';
import BookDetails from './_root/pages/bookDetails';
import NotFound from './_root/pages/notFound';
import AboutUs from './_root/pages/aboutUs';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/book/:id' element={<BookDetails />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Route>

        {/* Catch all routes */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
