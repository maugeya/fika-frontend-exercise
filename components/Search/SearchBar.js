import { Button, TextInput, View, StyleSheet, Keyboard } from 'react-native';
import { useFormik } from 'formik';
import { TEST_IDS } from '../../utils/constants';

const styles = StyleSheet.create({
  searchInput: {
    backgroundColor: '#f8f5f2',
    marginBottom: 10,
    padding: 3,
  },
});

export function SearchBar({ setSearchTerm, searchTerm, setCurrentPage }) {
  const formik = useFormik({
    initialValues: { movieTitle: searchTerm },
    onSubmit: (values) => {
      setCurrentPage(1);
      setSearchTerm(values.movieTitle);
      Keyboard.dismiss();
    },
  });

  return (
    <View style={styles.formContent} testID={TEST_IDS.SEARCH_BAR_CONTAINER}>
      <TextInput
        style={styles.searchInput}
        onChangeText={formik.handleChange('movieTitle')}
        value={formik.values.movieTitle}
        testID={TEST_IDS.SEARCH_BAR_INPUT}
      />

      <Button
        style={styles.submitButton}
        onPress={formik.handleSubmit}
        title='Submit'
        testID={TEST_IDS.SEARCH_BAR_SUBMIT}
      />
    </View>
  );
}
