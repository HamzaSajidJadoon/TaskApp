// styles.js
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
  },
  headerView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    width: '100%',
  },

  headerViewSub1: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerViewSub2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDubai: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
  },

  // Icon View Starting

  iconMainView: {
    width: '100%',
    marginTop: 5,
    padding: 5,
  },
  iconSubView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: 5,
  },
  iconsView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    width: '32%',
    elevation: 10,
    padding: 3,
  },
  imageIcon: {
    height: 60,
    width: 65,
  },
  iconsText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'black',
  },

  // Poster View Starting
  posterView: {
    height: 150,
    width: '100%',
    marginTop: 25,
  },
  imagePoster: {
    height: '100%',
    width: '100%',
  },

  seeallText: {
    fontSize: 12,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'black',
  },
  // Showroom section starting
  showroomMainView: {
    width: '100%',
    marginTop: 25,
    padding: 5,
  },
  showroomHeaderView: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  showroomHeadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  showroomMenuView: {
    //  justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },

  showroomMenuSubView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  imageStandard: {
    height: 150,
    width: 180,
    borderRadius: 5,
  },
  imageStandardLogo: {
    height: 30,
    width: 35,
  },
  showroomMenuSubSubView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  showroomBottomTextOne: {
    color: 'black',
    fontSize: 13,
    marginLeft: 5,
    fontWeight: 'bold',
  },

  //Top Sales section starting
  topSalesMenuSubSubView: {
    width: '100%',
  },
  topSalesMenuSubSubViewSub: {
    flexDirection: 'row',
    width: '100%',
  },
  topSalesMenuSubSubViewSubTwo: {
    flexDirection: 'row',
    width: '100%',
    columnGap: 20,
  },
  topSalesBottomTextOne: {
    color: '#F06100',
    fontSize: 12,
    fontWeight: 'bold',
  },
  topSalesBottomTextTwo: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  topSalesBottomTextThree: {
    color: 'grey',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
