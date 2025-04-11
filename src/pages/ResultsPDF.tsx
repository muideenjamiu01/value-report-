import React from 'react';
import { Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { resultData } from '@/data/profile-data'; // Your data source
import Logo from "../assets/logos/image.png";


// Font.register({
//   family: 'Avenir Next',
//   src: '../assets/fonts/Avenir-Next-Font.ttf', // Path to the regular font
// });;

// Font.register({
//   family: 'Avenir Next',
//   src: '../assets/fonts/Avenir-Next-Font.ttf', // Path to the bold font
//   fontWeight: 'bold',
// });


const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4F46E5',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4F46E5',
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 1.5,
  },
  bold: {
    fontWeight: 'bold',
  },
  recommendationItem: {
    marginBottom: 15,
  },
  recommendationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});


const ResultsPDF = () => (

  <View style={styles.page}>
    <View style={styles.header}>
      <Text style={styles.title}>Results</Text>
      <Image 
        src={Logo} 
        style={{ width: 100, height: 60 }} 
      />
    </View>
    
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Analysis</Text>
      <Text style={styles.text}>
        As an employee who values <Text style={styles.bold}>leadership, spirituality, family, and humour</Text>, 
        your values shape how you approach work, collaborate with colleagues, and contribute to organizational goals. 
        However, in a corporate environment, there may be <Text style={styles.bold}>blind spots and potential value conflicts</Text> 
        that require self-awareness and adaptability. By recognizing these challenges, you can ensure your approach 
        remains effective while staying true to your personal values.
      </Text>
    </View>
    
    <View style={styles.section}>
      <Text style={{ ...styles.sectionTitle, fontSize: 20 }}>Recommendations</Text>
      {resultData?.Recommendations.map((rec, index) => (
        <View key={index} style={styles.recommendationItem}>
          <Text style={styles.recommendationTitle}>{rec.value}</Text>
          <Text style={styles.text}>{rec.description}</Text>
        </View>
      ))}
    </View>
  </View>
);

export default ResultsPDF;