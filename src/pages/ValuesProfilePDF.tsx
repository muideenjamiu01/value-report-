import {
    Page,
    Text,
    View,
    Image,
    Document,
    StyleSheet,
    Font
  } from "@react-pdf/renderer";
  import { personData } from "@/data/profile-data"; 
  import bagImg from "../assets/images/bag.png?url";
import earthImg from "../assets/images/earth.png?url";
import homeImg from "../assets/images/home.png?url";
import thinkImg from "../assets/images/thinking.png?url";
import Logo from "../assets/logos/image.png?url";
  

// Font.register({
//   family: 'Avenir Next',
//   src: '../assets/fonts/Avenir-Next-Font.ttf', // Path to the regular font
// });

// Font.register({
//   family: 'Avenir Next',
//   src: '../assets/fonts/Avenir-Next-Font.ttf', // Path to the bold font
//   fontWeight: 'bold',
// });

  
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      width: "100%",
      minHeight: "100%",
   // Bold font
     
    },
    leftPanel: {
      width: "35%",
      backgroundColor: "#2e2178",
      padding: 24,
      color: "#ffffff",
      alignItems: "center",
    },
    headImage: {
      width: 180,
      height: 180,
      marginBottom: 32,
      objectFit: "contain",
    },
    top5Title: {
      fontSize: 22,
   // Bold font
      fontWeight: 'bold',
      textAlign: "center",
      marginBottom: 24,
    },
    valueItem: {
      backgroundColor: "#3b2d8e",
      borderRadius: 9999,
      paddingVertical: 8,
      paddingHorizontal: 16,
      fontSize: 14,
   // Bold font
      marginBottom: 8,
    },
    rightPanel: {
      width: "65%",
      padding: 24,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 12,
    },
    title: {
      fontSize: 28,
   // Bold font
      fontWeight: 'bold',
      color: "#2e2178",
    },
    logo: {
      width: 80,
      height: 40,
      objectFit: "contain",
    },
    name: {
      fontSize: 20,
   // Bold font
      fontWeight: 'bold',
      color: "#2e2178",
      marginBottom: 12,
    },
    companyBlock: {
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      marginBottom: 6,
    },
    icon: {
      width: 24,
      height: 24,
      objectFit: "contain",
    },
    companyText: {
      fontSize: 14,
   // Bold font
    fontWeight: 'bold',
      color: "#6b21a8",
    },
    orgAlignmentWrapper: {
      borderWidth: 1,
      borderColor: "#2e2178",
      marginTop: 8,
    },
    orgGrid: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    orgCell: {
      width: "33.33%",
      textAlign: "center",
      fontSize: 10,
   // Bold font
      padding: 6,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderColor: "#2e2178",
    },
    orgHeaderCell: {
      backgroundColor: "#2e2178",
      color: "#ffffff",
    },
    orgStatusCell: {
      backgroundColor: "#e5e7eb",
      justifyContent: "center",
      alignItems: "center",
    },
    alignmentScore: {
      textAlign: "right",
      color: "#6b21a8",
      fontSize: 10,
   // Bold font
      marginTop: 4,
    },
    sectionTitle: {
      fontSize: 16,
   // Bold font
      fontWeight: 'bold',
      color: "#2e2178",
      marginBottom: 6,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
      paddingBottom: 4,
      textAlign: "center",
    },
    twoColumn: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 16,
      marginTop: 16,
    },
    column: {
      width: "48%",
    },
    listItem: {
      fontSize: 10,
      marginBottom: 6,
   // Bold font
    },
    boldText: {
   // Bold font
    fontWeight: 'bold',
    },
  });
  
  const ValuesProfilePDF = () => (
    <View style={styles.container}>
        {/* Left Panel */}
        <View style={styles.leftPanel}>
          <Image src={thinkImg} style={styles.headImage} />
          <Text style={styles.top5Title}>
            SELECTED TOP 5{"\n"}VALUES
          </Text>
          {personData.topValues.map((value: string, index: number) => (
            <Text key={index} style={styles.valueItem}>
              {value}
            </Text>
          ))}
        </View>
  
        {/* Right Panel */}
        <View style={styles.rightPanel}>
          <View style={styles.header}>
            <Text style={styles.title}>Values Profile</Text>
            <Image src={Logo} style={styles.logo} />
          </View>
          <Text style={styles.name}>{personData.name}</Text>
  
          {/* Company Info */}
          <View>
            <View style={styles.companyBlock}>
              <Image src={homeImg} style={styles.icon} />
              <Text style={styles.companyText}>{personData.company}</Text>
            </View>
            <View style={styles.companyBlock}>
              <Image src={earthImg} style={styles.icon} />
              <Text style={styles.companyText}>{personData.country}</Text>
            </View>
            <View style={styles.companyBlock}>
              <Image src={bagImg} style={styles.icon} />
              <Text style={styles.companyText}>{personData.position}</Text>
            </View>
          </View>
  
          {/* Organisational Alignment */}
          <Text style={styles.sectionTitle}>ORGANISATIONAL ALIGNMENT</Text>
          <View style={styles.orgAlignmentWrapper}>
            <View style={styles.orgGrid}>
              {personData.organisationalValues.map((val: any, index: number) => (
                <Text key={index} style={[styles.orgCell, styles.orgHeaderCell]}>
                  {val.name}
                </Text>
              ))}
              {personData.organisationalValues.map((val: any, index: number) => (
                <Text key={`status-${index}`} style={[styles.orgCell]}>
                  {val.aligned ? "•" : "✕"}
                </Text>
              ))}
            </View>
          </View>
          <Text style={styles.alignmentScore}>
            Alignment Score: {personData.alignmentScore}%
          </Text>
  
          {/* Blind Spots & Conflicts */}
          <View style={styles.twoColumn}>
            <View style={styles.column}>
              <Text style={styles.sectionTitle}>BLIND SPOTS</Text>
              {personData.blindSpots.map((item: any, i: number) => (
                <Text key={i} style={styles.listItem}>
                  <Text style={styles.boldText}>{item.value}</Text>: {item.description}
                </Text>
              ))}
            </View>
            <View style={styles.column}>
              <Text style={styles.sectionTitle}>CONFLICTS</Text>
              {personData.conflicts.map((conflict: string, i: number) => (
                <Text key={i} style={styles.listItem}>
                  {conflict}
                </Text>
              ))}
            </View>
          </View>
        </View>
        </View>
 
  );
  
  export default ValuesProfilePDF;
  