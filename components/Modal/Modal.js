import React from 'react';
import {
  Button,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

const styles = StyleSheet.create({
  container: { flex: 1 },
  item: {
    alignItems: 'center',
    paddingLeft: 15,
    paddingTop: 8,
    paddingBottom: 8,
  },
  modal: { backgroundColor: 'white', flex: 1 },
});

function CustomModal({
  showModal,
  setShowModal,
  paginationList,
  setCurrentPage,
}) {
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: index % 2 == 0 ? '#f2f2f2' : '#FFFFFF',
          alignItems: 'center',
          paddingLeft: 15,
          paddingTop: 8,
          paddingBottom: 8,
        }}
      >
        <Text
          onPress={() => {
            setCurrentPage(item);
            setShowModal(false);
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Modal isVisible={showModal} style={styles.modal}>
        <FlatList
          data={paginationList}
          renderItem={({ item, index }) => renderItem(item, index)}
        />
        <Button title='Hide modal' onPress={toggleModal} />
      </Modal>
    </View>
  );
}

export { CustomModal as Modal };
