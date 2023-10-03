import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Pagination from './Components/Pagination';
import Navbar from './Components/Navbar';
import './styles.css';
import Cards from './Components/Cards';

const items = Array.from({ length: 100 }, (_, i) => i + 1);

export default function App() {
  const fontStyle = {
    fontFamily: "'Poppins', sans-serif",
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Implement your logic to fetch and display data for the selected page.
  };

  return (
    <Router>
      <div className="border-none bg-[#cbdcf2] w-[80%] mx-auto rounded-[10px] shadow-xl" style={fontStyle}>
        <Navbar />
        <Cards />

        <div className="container text-center">
          <Routes>
            <Route path="/page/:page" element={<PaginatedContent />} />
            <Route path="/" element={<PaginatedContent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const PaginatedContent = () => {
  const { page } = useParams();
  const currentPage = parseInt(page, 10) || 1;

  return (
    <div>
      {/* Render your content based on the current page */}
      <h2 className="mt-10">{currentPage} from 10</h2>

      {/* Pagination component */}
      <Pagination currentPage={currentPage} totalPages={10} />
    </div>
  );
};
