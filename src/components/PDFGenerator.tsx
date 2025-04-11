import React from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { Button } from "@/components/ui/button";
import PDFPreview from "./PDFPreview";
import { profileData } from "@/data/profile-data";
import CoverPage from '@/pages/CoverPage';
import ResultsPage from '@/pages/ResultsPage';
import KeyFactsPage from '@/pages/KeyFactsPage';
import ValuesProfile from '@/pages/ProfilePage';
import ValuesProfilePDF from "@/pages/ValuesProfilePDF";
import KeyFactsPDF from "@/pages/KeyFactsPDF";
import ResultsPDF from "@/pages/ResultsPDF";
import CoverPagePDF from "@/pages/CoverPagePDF";

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    color: "#4F46E5",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
  value: {
    fontSize: 14,
    marginBottom: 5,
    padding: 5,
    backgroundColor: "#EEF2FF",
  },
});

const PDFDocument = () => (
  <Document>
  <CoverPagePDF />
  <Page size="A4" style={styles.page}>
   <ResultsPDF />
  </Page>
  <Page size="A4" style={styles.page}>
   <ValuesProfilePDF />
  </Page>
  <Page size="A4" style={styles.page}>
   <KeyFactsPDF />
  </Page>
</Document>
);

const PDFGenerator = () => {
  return (
    <div className="fixed bottom-4 right-4 flex items-center">
      <PDFPreview />
      <PDFDownloadLink
        document={<PDFDocument />}
        fileName="individual-values-profile.pdf"
      >
        {({ loading }: { loading: boolean }) => (
          <Button disabled={loading}>
            {loading ? "Loading..." : "Download PDF"}
          </Button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default PDFGenerator;
