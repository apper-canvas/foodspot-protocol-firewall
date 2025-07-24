import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navigation from "@/components/organisms/Navigation";
import RestaurantsPage from "@/components/pages/RestaurantsPage";
import SearchPage from "@/components/pages/SearchPage";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <Routes>
        <Route path="/" element={<RestaurantsPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 9999 }}
      />
    </div>
  );
}

export default App;