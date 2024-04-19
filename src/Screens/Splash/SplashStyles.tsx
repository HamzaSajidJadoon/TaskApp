// styles.js
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  image: {
    height: 300,
    width: 250,
  },
  button: {
    backgroundColor: '#F06100',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '90%',
    borderRadius: 5,
    marginBottom: 80,
  },
});

export default styles;
