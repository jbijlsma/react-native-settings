import { View, Modal, Button, StyleSheet } from "react-native";

function CustomModal({ backgroundColor, isVisible, onClose, children }) {
  return (
    <View style={[styles.modalContainer]}>
      <Modal
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setIsModalVisible(true)}
      >
        <View style={[styles.modalOuterView]}>
          <View
            style={[
              styles.modalInnerView,
              { backgroundColor: backgroundColor },
            ]}
          >
            <View style={styles.modalHeaderBar}>
              <Button
                title="Cancel"
                onPress={onClose}
              />
            </View>
            <View style={styles.modalContainer}>{children}</View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  modalOuterView: {
    flex: 1,
    flexDirection: "column-reverse",
  },
  modalInnerView: {
    width: "100%",
    height: "93%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  modalHeaderBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  modalContent: {
    flex: 1,
  },
});

export default CustomModal;
