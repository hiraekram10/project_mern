import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  Modal,
  SafeAreaView,
  Button,
} from "react-native";
import moment from "moment";
import { simplybook } from "../api/simplybook";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebaseConfig";

const CourtBookingApp = ({ navigation, route }) => {
  const { eventId, performerId, count, name } = route.params;

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [endDateTime, setEndDateTime] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [timeSlotes, setTimeSlotes] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!eventId || !performerId || !Number(count)) {
      return navigation.replace("BookingApp");
    }
    simplybook
      .getFirstWorkingDay(performerId)
      .then((res) => setSelectedDate(res));
  }, [eventId]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (selectedDate) {
      simplybook
        .getStartTimeMatrix(
          selectedDate,
          selectedDate,
          eventId,
          performerId,
          count
        )
        .then((res) => setTimeSlotes(Object.values(res)[0]));
    }
  }, [selectedDate]);

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

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    const startDateTime = `${selectedDate} ${time}`;
    simplybook
      .calculateEndTime(startDateTime, eventId, count, performerId)
      .then((res) => setEndDateTime(res));
  };

  const renderTimeslot = (timeslot) => (
    <TouchableOpacity
      key={timeslot}
      style={[styles.timeslot, styles.availableSlot]}
      onPress={() => handleTimeSelection(timeslot)}
    >
      <Text style={styles.slotText}>
        {moment(timeslot, "hh:mm:ss").format("hh:mm")}
      </Text>
    </TouchableOpacity>
  );

  const handleContinue = () => {
    setDrawerVisible(false);
    navigation.navigate("ProductList", { selectedDate, selectedTime });
  };

  const handleSubmit = () => {


    const clientData = {name: 'Name', email: 'test@gmail.com', phone: '+38099999999',hash: "c339c14fcfffd96bc22ad89814fc1ce9"
    };
    simplybook.book(
      eventId,
      performerId,
      selectedDate,
      selectedTime,
      {client:clientData},
      {},
      count
    ).then(res => console.log(res));
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

      <View style={styles.courtCard}>
        <Text style={styles.courtName}>{name}</Text>
        <FlatList
          data={timeSlotes}
          numColumns={4}
          renderItem={({ item }) => renderTimeslot(item)}
        />
      </View>

      <Button title="Book" disabled={!endDateTime} onPress={handleSubmit} />
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
    justifyContent: "flex-start",
    alignContent: "flex-start",
    backgroundColor: "black",
  },
  dateSelector: {
    maxHeight: 90,
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
    height: 60,
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
    // paddingHorizontal: 20,
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
