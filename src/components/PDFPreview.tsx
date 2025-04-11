import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { PDFViewer, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { profileData } from '@/data/profile-data';
import CoverPage from '@/pages/CoverPage';
import ResultsPage from '@/pages/ResultsPage';
import KeyFactsPage from '@/pages/KeyFactsPage';
import ValuesProfile from '@/pages/ProfilePage';
import KeyFactsPDF from '@/pages/KeyFactsPDF';
import ResultsPDF from '@/pages/ResultsPDF';
import ValuesProfilePDF from '@/pages/ValuesProfilePDF';
import CoverPagePDF from '@/pages/CoverPagePDF';

const styles = StyleSheet.create({
  page: {
    padding: 0,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#4F46E5',
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
    backgroundColor: '#EEF2FF',
  },
});

const PDFDocument = () => (
  <Document>
    <CoverPagePDF />
    <Page size="A4" style={styles.page}>
     <KeyFactsPDF />
    </Page>
    <Page size="A4" style={styles.page}>
     <ValuesProfilePDF />
    </Page>
    <Page size="A4" style={styles.page}>
     <ResultsPDF />
    </Page>
  </Document>
);

const PDFPreview = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mr-4">
          Preview PDF
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[900px] h-[800px]">
        <PDFViewer width="100%" height="100%">
          <PDFDocument />
        </PDFViewer>
      </DialogContent>
    </Dialog>
  );
};

export default PDFPreview;