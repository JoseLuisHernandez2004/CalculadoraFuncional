import { StyleSheet } from "react-native";

export const calculatorStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  display: {
    fontSize: 60,
    marginBottom: 30,
    color: 'white',
    textAlign: 'right',
    paddingRight: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 30,
    borderRadius: 10,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 40,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // Para sombra en Android
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray', 
    padding: 20,
    margin: 5,
    borderRadius: 10,
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#f39c12',
  },
  buttonText: {
    fontSize: 30,
    color: 'white', 
  },  
});
