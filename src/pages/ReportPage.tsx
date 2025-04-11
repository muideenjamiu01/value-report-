import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { DownloadIcon, EyeIcon, LogOut } from "lucide-react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import PDFPreview from "../components/PDFPreview";
import CoverPagePDF from "./CoverPagePDF";
import ResultsPDF from "./ResultsPDF";
import ValuesProfilePDF from "./ValuesProfilePDF";
import KeyFactsPDF from "./KeyFactsPDF";
import { useQuery } from "@tanstack/react-query";
import { getFilterData, getUsers } from "../api/reportService";
import { Loader2 } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { useNavigate } from "react-router-dom";
// import { PDFDownloadLink, pdf } from "@react-pdf/renderer";
// import { Document as PdfDoc } from "@react-pdf/renderer";
// import { Document, Page, pdfjs } from "react-pdf";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    padding: 30,
  },
});

const PDFDocument = () => (
  <Document>
    <CoverPagePDF />
    <Page size="A4" orientation="landscape" style={styles.page}>
      <KeyFactsPDF />
    </Page>
    <Page size="A4" orientation="landscape" style={styles.page}>
      <ValuesProfilePDF />
    </Page>
    <Page size="A4" orientation="landscape" style={styles.page}>
      <ResultsPDF />
    </Page>
  </Document>
);

const ReportPage = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    grade: "",
    group: "",
    business_entity: "ACCESS ARM PENSIONS",
    country: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { data: filterOptions, isLoading: loadingFilters } = useQuery({
    queryKey: ["filter-data"],
    queryFn: getFilterData,
  });

  // Fetch users data with selected filters
  const { data: users, isLoading: loadingUsers } = useQuery({
    queryKey: ["users", filters, currentPage, searchTerm],
    queryFn: getUsers,
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1); // Reset to first page on filter change
  };

  const totalPages = users?.pagination?.totalPages || 1;

  const handleLogout = () => {
    // Clear authentication tokens or any other logout logic here
    // For example: localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle>Preview Auto-Generated Reports</CardTitle>
            <Button
              size="sm"
              className="bg-purple-700/60 cursor-pointer hover:bg-purple-800 text-white flex items-center"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
          <CardDescription>
            review and review reports before they are finalized
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          {!loadingFilters && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Search input aligned with filters */}
              <Input
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
              {filterOptions &&
                Object.entries(filterOptions).map(([key, options]) => {
                  const filterKey = key as keyof typeof filters;
                  return (
                    <Select
                      key={key}
                      onValueChange={(value) => handleFilterChange(key, value)}
                      value={filters[filterKey]}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={key.toUpperCase()} />
                      </SelectTrigger>
                      <SelectContent>
                        {options.map((value) => (
                          <SelectItem key={value} value={value}>
                            {value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  );
                })}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Group</TableHead>
                <TableHead>Entity</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loadingUsers ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-20">
                    <Loader2 className="h-10 w-10 text-purple-700 animate-spin mx-auto" />
                  </TableCell>
                </TableRow>
              ) : users?.data?.length > 0 ? (
                users?.data?.map((user: any) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.grade}</TableCell>
                    <TableCell>{user.group}</TableCell>
                    <TableCell>{user.business_entity}</TableCell>
                    <TableCell>{user.country}</TableCell>
                    <TableCell>{user.alignment_score}%</TableCell>
                    <TableCell className="flex items-center gap-2">
                      <Button
                        onClick={() =>
                          navigate("/preview-report?id=" + user.id)
                        }
                        variant="outline"
                        size="sm"
                        className="mr-4 cursor-pointer"
                      >
                        <EyeIcon className="h-4 w-4 mr-2" /> Preview
                      </Button>
                      {/* <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="mr-4">
                            <EyeIcon className="h-4 w-4 mr-2" /> Preview
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[900px] h-[800px]">
                          <PDFViewer width="100%" height="100%">
                            <PDFDocument />
                          </PDFViewer>
                        </DialogContent>
                      </Dialog> */}
                      <PDFDownloadLink
                        document={<PDFDocument />}
                        fileName="individual-values-profile.pdf"
                      >
                        <Button size="sm" variant="secondary">
                          <DownloadIcon className="h-4 w-4 cursor-pointer" />
                        </Button>
                      </PDFDownloadLink>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    className="text-center text-muted-foreground"
                  >
                    No data available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          {users?.data?.length > itemsPerPage && (
            <Pagination className="mt-6">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    className={
                      currentPage === 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>
                <PaginationItem>
                  <span className="text-sm px-4">
                    Page {currentPage} of {totalPages}
                  </span>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage((prev) =>
                        prev < totalPages ? prev + 1 : totalPages
                      )
                    }
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportPage;
