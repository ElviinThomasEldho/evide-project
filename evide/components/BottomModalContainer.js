import React, { useCallback, useMemo, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import FloatingButton from "./FloatingButton";

const windowHeight = Dimensions.get("window").height;

export default BottomModalContainer = ({
  navigation,
  children,
  buttonTitle,
}) => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ["40%", "80%"], []);

  useEffect(() => {
    bottomSheetModalRef.current?.present();
  }, []); // Present modal when component mounts

  const handlePresentModal = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleContentPanning = useCallback(
    (event, gestureState, fromIndex, toIndex) => {
      // Prevent the modal from going below 25%
      if (toIndex < 0) {
        return false;
      }
      return true;
    },
    []
  );

  return (
    <View style={styles.container}>
      <View style={styles.BottomSheetContainer}>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          enableContentPanning={handleContentPanning} // Apply the custom content panning handler
        >
          <View
            style={{ height: "100%", marginTop: "1%", position: "relative" }}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              style={{}}
              contentContainerStyle={{ justifyContent: "flex-start" }}
            >
              {children}
            </ScrollView>
          </View>
        </BottomSheetModal>
        {/* <TouchableOpacity
          style={styles.modalButton}
          onPress={handlePresentModal}
        > */}
        {/* <Text style={{ color: "white" }}>{buttonTitle}</Text>
        </TouchableOpacity> */}
        <FloatingButton name={"Explore"} onPress={handlePresentModal} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  modalButton: {
    borderRadius: 30,
    // zIndex: 2,
    backgroundColor: "#2675EC",
    height: 40,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  BottomSheetContainer: {
  },
});

//hi
