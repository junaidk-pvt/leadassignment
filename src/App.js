import { Toaster } from 'react-hot-toast';
import './App.css';
import { Suspense, lazy } from 'react';
const Navbar  =lazy(() => import("./Components/Navbar/Navbar"));
const LocationInfo =lazy(() => import("./Components/LocationInfo/LocationInfo"));
function App() {
  return (
    <>
    <Suspense fallback="Loading">
      <Toaster position="top-right" reverseOrder={false} />
    <Navbar/>
    <LocationInfo/>
    </Suspense>
    </>
  );
}

export default App;
