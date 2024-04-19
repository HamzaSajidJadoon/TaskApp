// styles.js
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
    backgroundColor: 'white',
  },
  bgView: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  bgViewSH: {
    height: 50,
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headingMainView: {
    width: '100%',
    backgroundColor: '#fff',
    elevation: 3,
    padding: 5,
  },
  headingMainViewInerOne: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },
  headingMainViewstatus: {
    height: 30,
    width: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F06100',
    marginLeft: 10,
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F06100',
  },
  nameText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 3,
  },

  detailMainView: {
    backgroundColor: '#fff',
    marginTop: 10,
    flex: 1,
    padding: 5,
  },
  detailSubView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    height: 30,
    marginTop: 5,
    padding: 5,
    borderColor: '#D3D3D3',
  },
  detailText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  detailSubText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default styles;
