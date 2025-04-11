import React from "react";
import { Page, Text, View, StyleSheet, Image, Font } from "@react-pdf/renderer";
import Logo from "../assets/logos/image.png";
import QuestionImg from "../assets/images/question.png";
import EyeImg from "../assets/images/eye.png";
import HandImg from "../assets/images/hand.png";




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
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
     // Bold font
    fontWeight: 'bold',
    color: "#4F46E5",
  },
  subtitle: {
    fontSize: 24,
     // Bold font
    fontWeight: 'bold',
    color: "#7C3AED",
    marginBottom: 5,
  },
  section: {
    marginBottom: 30,
  },
  factContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  factItem: {
    width: "30%",
    alignItems: "center",
    padding: 10,
  },
  factIconWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#7e22ce",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  factIcon: {
    width: 40,
    height: 40,
    objectFit: "contain",
  },
  factTitle: {
    fontSize: 16,
     // Bold font
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: "center",
  },
  factText: {
    fontSize: 10,
     
    // fontWeight: 'bold',
    textAlign: "left",
    width: "100%",
  },
});

const KeyFactsPDF = () => (
  <View style={styles.page}>
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>Values</Text>
        <Text style={styles.subtitle}>Key Facts</Text>
        <Text style={{ ...styles.subtitle, color: "#6B7280" }}>RECAP</Text>
      </View>
      <Image src={Logo} style={{ width: 100, height: 60 }} />
    </View>

    <View style={styles.factContainer}>
      <View style={styles.factItem}>
        <View style={styles.factIconWrapper}>
          <Image src={QuestionImg} style={styles.factIcon} />
        </View>
        <Text style={styles.factTitle}>What Are Values?</Text>
        <Text style={styles.factText}>
          Values are the cornerstone of effective leadership and impactful
          decision-making. They are the moral compass that directs our decisions
          and actions.
        </Text>
      </View>

      <View style={styles.factItem}>
        <View style={styles.factIconWrapper}>
          <Image src={EyeImg} style={styles.factIcon} />
        </View>
        <Text style={styles.factTitle}>Blind Spots</Text>
        <Text style={styles.factText}>
          These are hidden areas where actions, decisions, or behaviors conflict
          with stated or intended values. For example, valuing honesty but
          avoiding giving constructive feedback to avoid confrontation.
        </Text>
      </View>
      <View style={styles.factItem}>
        <View style={styles.factIconWrapper}>
          <Image src={HandImg} style={styles.factIcon} />
        </View>
        <Text style={styles.factTitle}>Conflicts</Text>
        <Text style={styles.factText}>
          These are situations where differing or opposing values create
          tension, challenges, or ethical dilemmas. The focus of this profile is
          on work related conflicts which could arise when an individual's
          values differ from the collective values of the organization.
        </Text>
      </View>
    </View>
  </View>
);

export default KeyFactsPDF;
