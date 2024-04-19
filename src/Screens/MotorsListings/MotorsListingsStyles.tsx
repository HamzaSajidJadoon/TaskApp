// styles.js
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '98%',
    paddingTop: 5,
    paddingBottom: 5,
  },

  headerViewSub1: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerViewSub2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '30%',
  },
  textDubai: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
  },
  mainContentContainer: {
    width: '98%',
    marginTop: 15,
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingBottom: 5,
  },
  bgView: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  imageButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 30,
    backgroundColor: '#F04900',
    borderRadius: 5,
  },
  imageButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  bgViewSH: {
    height: 50,
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Starting title section

  contentSection: {
    padding: 5,
  },
  textPrice: {
    color: '#F06100',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 3,
  },
  textTitle: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textH1: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
    marginTop: 5,
  },
  textH2: {
    color: 'black',
    fontSize: 9,
    fontWeight: '700',
  },
  midSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  midSectionSub: {
    marginLeft: 10,
  },

  buttonParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  buttonOne: {
    height: 32,
    width: 145,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonOneText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
  },
  buttonTwo: {
    height: 32,
    width: 145,
    backgroundColor: '#F06100',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTwoText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default styles;
