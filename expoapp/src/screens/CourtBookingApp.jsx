  import React, { useState } from "react";
  import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    FlatList,
    StyleSheet,
    Modal,
    SafeAreaView,
  } from "react-native";
  import moment from "moment";

  const CourtBookingApp = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState(
      moment().format("YYYY-MM-DD")
    );
    const [selectedTime, setSelectedTime] = useState(null);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [courts, setCourts] = useState([
      { id: 1, name: "Court 1" },
      { id: 2, name: "Court 2" },
    ]);

    const generateMonthDates = () => {
      const dates = [];
      const startOfMonth = moment().startOf("month");
      const endOfMonth = moment().endOf("month");

      for (
        let date = startOfMonth;
        date.isSameOrBefore(endOfMonth);
        date.add(1, "days")
      ) {
        dates.push(date.clone().format("YYYY-MM-DD"));
      }
      return dates;
    };

    const generate24HourSlots = () => {
      const slots = [];
      for (let hour = 0; hour < 24; hour++) {
        slots.push({
          time: moment({ hour }).format("HH:00"),
          available: Math.random() > 0.5, // Random availability
        });
      }
      return slots;
    };

    const handleTimeSelection = (time) => {
      setSelectedTime(time);
      setDrawerVisible(true);
    };

    const renderTimeslot = (timeslot, courtName) => (
      <TouchableOpacity
        key={timeslot.time}
        style={[
          styles.timeslot,
          timeslot.available ? styles.availableSlot : styles.unavailableSlot,
        ]}
        disabled={!timeslot.available}
        onPress={() => handleTimeSelection(timeslot.time)}
      >
        <Text
          style={timeslot.available ? styles.slotText : styles.unavailableText}
        >
          {timeslot.time}
        </Text>
      </TouchableOpacity>
    );

    const renderCourt = (court) => (
      <View key={court.id} style={styles.courtCard}>
        <Text style={styles.courtName}>{court.name}</Text>
        <FlatList
          data={generate24HourSlots()}
          numColumns={4}
          renderItem={({ item }) => renderTimeslot(item, court.name)}
          keyExtractor={(item) => `${court.id}-${item.time}`}
        />
      </View>
    );

    const handleContinue = () => {
      setDrawerVisible(false);
      navigation.navigate("ProductList", { selectedDate, selectedTime });
    };

    return (
      <View style={styles.container}>
        {/* Month Date Picker */}
        <ScrollView
          horizontal
          style={styles.dateSelector}
          showsHorizontalScrollIndicator={true}
        >
          {generateMonthDates().map((date) => (
            <TouchableOpacity
              key={date}
              style={[
                styles.dateItem,
                selectedDate === date ? styles.selectedDate : null,
              ]}
              onPress={() => setSelectedDate(date)}
            >
              <Text
                style={
                  selectedDate === date
                    ? styles.selectedDateText
                    : styles.dateText
                }
              >
                {moment(date).format("DD")}
              </Text>
              <Text
                style={
                  selectedDate === date
                    ? styles.selectedDateText
                    : styles.dateText
                }
              >
                {moment(date).format("ddd")}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Courts Section */}
        <ScrollView style={styles.courtsContainer}>
          {courts.map((court) => renderCourt(court))}
        </ScrollView>

        {/* Drawer (Modal) */}
        <Modal
          visible={drawerVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setDrawerVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <SafeAreaView style={styles.drawer}>
              {/* Header */}
              <View style={styles.modalHeader}>
                <Text style={styles.drawerTitle}>Court Booking</Text>
                <TouchableOpacity
                  onPress={() => setDrawerVisible(false)}
                  style={styles.closeButton}
                >
                  <Text style={styles.closeButtonText}>×</Text>
                </TouchableOpacity>
              </View>

              {/* Selected Date */}
              <View style={styles.modalSection}>
                <Text style={styles.modalLabel}>Selected Date</Text>
                <View style={styles.dateCard}>
                  <Text style={styles.dateText}>
                    {moment(selectedDate).format("MMMM DD, YYYY")}
                  </Text>
                  <Text style={styles.dateSelectedMark}>✔</Text>
                </View>
              </View>

              {/* Selected Time */}
              <View style={styles.modalSection}>
                <Text style={styles.modalLabel}>Selected Time</Text>
                <View style={styles.dateCard}>
                  <Text style={styles.dateText}>
                    {selectedTime || "No time selected"}
                  </Text>
                  {selectedTime && <Text style={styles.dateSelectedMark}>✔</Text>}
                </View>
              </View>

              {/* Continue Button */}
              <TouchableOpacity
                style={styles.continueButton}
                onPress={handleContinue}
              >
                <Text style={styles.continueButtonText}>Continue</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </Modal>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
    dateSelector: {
      flexDirection: "row",
      backgroundColor: "black",
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#ddd",
    },
    dateItem: {
      alignItems: "center",
      marginHorizontal: 10,
      padding: 10,
      borderRadius: 8,
    },
    selectedDate: {
      backgroundColor: "#66cbf3",
    },
    dateText: {
      color: "#fff",
    },
    selectedDateText: {
      color: "black",
      fontWeight: "bold",
    },
    courtsContainer: {
      paddingHorizontal: 20,
      marginTop: 10,
    },
    courtCard: {
      backgroundColor: "black",
      borderRadius: 12,
      padding: 20,
      marginVertical: 10,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 5 },
      elevation: 2,
    },
    courtName: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      marginBottom: 10,
    },
    timeslot: {
      padding: 10,
      borderRadius: 8,
      margin: 5,
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      minWidth: 60,
    },
    availableSlot: {
      backgroundColor: "#B8EA3F",
    },
    unavailableSlot: {
      backgroundColor: "#66cbf3",
    },
    slotText: {
      color: "black",
      fontSize: 12,
    },
    unavailableText: {
      color: "#888",
      fontSize: 12,
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    drawer: {
      backgroundColor: "#d3d3d3",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 20,
    },
    modalHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    },
    drawerTitle: {
      paddingTop: 20,
      marginLeft: 25,
      fontSize: 20,
      fontWeight: "bold",
      color: "#333",
    },
    closeButton: {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: "#d3d3d3",
      alignItems: "center",
      justifyContent: "center",
    },
    closeButtonText: {
      fontSize: 20,
      color: "#888",
      fontWeight: "bold",
    },
    modalSection: {
      marginVertical: 10,
    },
    modalLabel: {
      fontSize: 16,
      fontWeight: "600",
      marginLeft: 20,
      color: "#333",

      marginBottom: 5,
    },
    dateCard: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#d3d3d3",
      borderRadius: "25",
      borderColor: "red",
      borderStyle: "solid",

      marginleft: 10,
      padding: 15,
      borderRadius: 8,
    },
    dateText: {
      fontSize: 16,

      color: "#fff",
    },
    dateSelectedMark: {
      fontSize: 16,
      color: "#4caf50",
      fontWeight: "bold",
      marginLeft: 10,
    },
    continueButton: {
      backgroundColor: "#000",
      paddingVertical: 15,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 20,
    },
    continueButtonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 16,
    },
  });

  export default CourtBookingApp;
