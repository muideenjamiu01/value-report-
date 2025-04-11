import { useLocation, useNavigate } from "react-router-dom";
import CoverPage from './CoverPage';
import ProfilePage from './ProfilePage';
import ResultsPage from './ResultsPage';
import KeyFactsPage from './KeyFactsPage';
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { getReport } from "../api/reportService";

export default function PreviewReportPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get userId from the URL query parameter
  const userId = new URLSearchParams(location.search).get("id");

// Ensure userId is available before making the API request
if (!userId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">User ID is missing from the URL.</p>
      </div>
    );
  }

  
   // Fetch report data using react-query
   const { data: report, isLoading, isError, error } = useQuery({
    queryKey: ["user-report", userId],
    queryFn: () => getReport({ userId }),
    enabled: !!userId, // Only make the request if userId exists
  });


  return (
   <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => navigate("/report")}
          className="text-sm text-purple-700 hover:underline cursor-pointer"
        >
          ← Back
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Preview Report</h1>
        <div className="w-10" /> {/* placeholder to balance the back button */}
      </header>

      {/* Scrollable content */}
      <main className="flex-1 overflow-y-auto px-4 py-10 pb-10 space-y-8">
        {isLoading && (
          <div className="flex justify-center items-center space-x-2">
            <Loader2 className="animate-spin text-purple-700" />
            <span className="text-gray-500">Loading...</span>
          </div>
        )}

        {isError && (
          <div className="flex justify-center items-center space-x-2">
            <p className="text-red-600">
              Error: {error instanceof Error ? error.message : "Something went wrong."}
            </p>
          </div>
        )}

        {report && !isLoading && !isError && (
          <>
            <section id="cover">
              <div className="border rounded-lg p-4">
                <CoverPage />
              </div>
            </section>
            <section id="key-facts">
              <div className="border rounded-lg p-4">
                <KeyFactsPage />
              </div>
            </section>
            <section id="profile">
              <div className="border rounded-lg">
                <ProfilePage report={report} />
              </div>
            </section>
            <section id="report">
              <div className="border rounded-lg p-4">
                <ResultsPage />
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
