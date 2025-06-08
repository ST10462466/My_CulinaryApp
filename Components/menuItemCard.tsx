// components/MenuItemCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MenuItem } from '../Context/menuContext';

export default function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.dishname}</Text>
      <Text>{item.description}</Text>
      <Text>{item.course}</Text>
      <Text>{item.price.toFixed(2)} ZAR</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#fff', padding: 10, marginVertical: 5, borderRadius: 5 },
  name: { fontWeight: 'bold' },
});
