import { View, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
});

export function PageSelect({ currentPage, setShowModal }) {
  return (
    <View style={styles.container} testID='page-select-container'>
      <Button
        testID='page-select-button'
        onPress={() => setShowModal(true)}
        title={`Select page (${currentPage})`}
      />
    </View>
  );
}
