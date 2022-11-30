import { SafeAreaView, StyleSheet, StatusBar, View, Text } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import MovieList from './components/MovieList/MovieList';

const queryClient = new QueryClient();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <View style={styles.header}>
          <Text style={styles.title}>FikaSearch</Text>
        </View>
        <MovieList />
        <StatusBar style='auto' />
      </QueryClientProvider>
    </SafeAreaView>
  );
}
