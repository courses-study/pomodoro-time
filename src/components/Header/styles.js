import { StyleSheet } from 'react-native'

export const TYPES_STYLES = StyleSheet.create({
  typesContainer: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    margin: 10,
    flexDirection: "row"
  },

  item: {
    width: "33%",
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#555"
  },

  itemText: {
    textAlign: "center",
    fontWeight: "bold"
  }
})