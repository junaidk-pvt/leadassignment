import { Toaster } from 'react-hot-toast';
import { Suspense, lazy } from 'react';
import Spinner from './Components/Spinner/Spinner';
const Navbar  =lazy(() => import("./Components/Navbar/Navbar"));
const LocationInfo =lazy(() => import("./Components/LocationInfo/LocationInfo"));
function App() {
  return (
    <>
    <Suspense fallback=<Spinner/>>
      <Toaster position="top-right" reverseOrder={false} />
    <Navbar/>
    <LocationInfo/>
    </Suspense>
    </>
  );
}

export default App;
