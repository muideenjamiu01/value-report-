import { Page, Image, StyleSheet, View } from '@react-pdf/renderer';
import backgroundImg from '../assets/images/one.png?url';

// A4 dimensions in points (1mm = 2.83465 points)
const A4_WIDTH = 595.28;  // 210mm
const A4_HEIGHT = 41.89; // 297mm

const styles = StyleSheet.create({
    page: {
      width: A4_WIDTH,
      height: A4_HEIGHT,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
      margin: 0,
    },
    imageContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    image: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
    },
  });
  
  const CoverPagePDF = () => (
    <Page size="A4"  orientation="landscape"style={styles.page}>
      <View style={styles.imageContainer}>
        <Image src={backgroundImg} style={styles.image} />
      </View>
    </Page>
  );

  export default CoverPagePDF;