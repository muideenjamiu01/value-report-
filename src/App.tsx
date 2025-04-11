import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CoverPage from './pages/CoverPage';
import ProfilePage from './pages/ProfilePage';
import ResultsPage from './pages/ResultsPage';
import KeyFactsPage from './pages/KeyFactsPage';
import Navigation from './components/Navigation';
import PDFGenerator from './components/PDFGenerator';
import ReportPage from './pages/ReportPage';
import PreviewReportPage from './pages/PreviewReportPage';
import { Toaster } from '@/components/ui/toaster'

function App() {
  return (
    <>
     <Toaster />
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/*"
          element={
            <div className="min-h-screen bg-gray-100">
              {/* <Navigation /> */}
              <div className="container mx-auto px-4 py-8">
                <Routes>
                  <Route path="/cover" element={<CoverPage />} />
                  <Route path="/report" element={<ReportPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/results" element={<ResultsPage />} />
                  <Route path="/key-facts" element={<KeyFactsPage />} />
                  <Route path="/preview-report" element={<PreviewReportPage />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                {/* <PDFGenerator /> */}
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
    </>
  
  );
}

export default App;