import { StyleSheet, StatusBar, View, Text } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'tracked',
    },
  },
});

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#222532',
    alignItems: 'center',
  },
  header: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#078080',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  pageContent: {
    padding: 30,
  },
});

export function Layout({ children }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <QueryClientProvider client={queryClient}>
            <View style={styles.header}>
              <Text style={styles.title}>FikaSearch</Text>
            </View>
            <View style={styles.pageContent}>{children}</View>
            <StatusBar style='auto' />
          </QueryClientProvider>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
