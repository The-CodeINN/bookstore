import { Route, Routes } from 'react-router-dom';
import Layout from './_root/layout';
import Home from './_root/pages/home';
import BookDetails from './_root/pages/bookDetails';
import NotFound from './_root/pages/notFound';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/book/:id' element={<BookDetails />} />
        </Route>

        {/* Catch all */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
