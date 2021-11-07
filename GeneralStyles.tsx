
import {
  StyleSheet,
} from 'react-native';

const logo = StyleSheet.create({
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom:40,
    alignSelf:'center'
  }
})

const containers = StyleSheet.create({
  safeAreaView: {
    flex:1,
    paddingBottom:0,
    backgroundColor:'#ffffff',
  },
  fullWidth: {
    width:'100%'
  },
  fullWidthPaddingTopBottom: {
    width:'100%',
    paddingTop:15,
    paddingBottom:15,
  },
  fullWidthPaddingBottom: {
    width:'100%',
    paddingBottom:15,
  },
  verticalCenterContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
      width:'100%',
      backgroundColor: '#fff',
      paddingRight:10,
      paddingLeft:10,
      paddingTop:10,
      paddingBottom:10,
  },
  containerNoTopBottom: {
    width:'100%',
    backgroundColor: '#FFFFFF',
    paddingRight:10,
    paddingLeft:10,
    paddingTop:0,
    paddingBottom:0,
},
grayBackground: {
  backgroundColor:'#FAFAFA'
},
  containerTight: {
    width:'100%',
    backgroundColor: '#fff',
    paddingRight:15,
    paddingLeft:15,
    paddingTop:10,
    paddingBottom:10,
},
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:0,
    marginBottom:0,
  },
  containerFullAlert: {
    flex:1,
    justifyContent:'center'
  },
  containerFullAlertText:{
    textAlign:'center',
    fontFamily:'HelveticaNeue-Medium',
    fontSize:15,
    color:'#cccccc'
  }
  });

  const buttons = StyleSheet.create({

    primary: {                       
      height: 55,
      backgroundColor: '#1795E3',
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%',
      borderRadius:7
    },
    primaryTitle: {
      fontFamily:'HelveticaNeue-Medium',
      fontSize:16
    },

    secondary: {                       
      height: 55,
      borderWidth:1,
      borderColor:'#1795E3',
      backgroundColor:'white',
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%',
      borderRadius:7
    },
    secondaryTitle: {
      color: '#1795E3',
      fontFamily:'HelveticaNeue-Medium',
      fontSize:16,
    },

    red: {                       
      height: 55,
      backgroundColor: '#D54C4C',
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%',
      borderRadius:7
    },
    redTitle: {
      fontFamily:'HelveticaNeue-Medium',
      fontSize:16
    },

    raiseWage: {                       
      height: 55,
      backgroundColor: '#FE875D',
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%',
      borderRadius:7
    },
    raiseWageTitle: {
      fontFamily:'HelveticaNeue-Medium',
      fontSize:16,
      color:'#ffffff'
    },

    delete: {                       
      height: 45,
      borderWidth:0,
      backgroundColor:'transparent',
      borderColor:'#ff4646',
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%',
      borderRadius:7
    },
    deleteTitle: {
      fontFamily:'HelveticaNeue-Medium',
      fontSize:16,
      color:'#ff4646'
    },

    smaller: {
      height: 40,
      borderRadius:5,
    },
    smallerTitle: {
      fontSize:14,
      lineHeight:15
    },

    smaller2: {
      height: 48,
      borderRadius:9,
    },
    smallerTitle2: {
      fontSize:14,
      fontFamily:'HelveticaNeue-Medium',
    },

    send: {                       
      height: 40,
      width:40,
      backgroundColor: '#1795E3',
      justifyContent: 'center',
      alignItems: 'center',
     
      borderRadius:7,
      padding:0,
      marginTop:5,
      marginLeft:5,
    },
    sendTitle: {
      fontFamily:'HelveticaNeue-Medium',
      fontSize:16
    },

    trust: {                       
      height: 30,
      borderWidth:1,
      borderColor:'#1795E3',
      backgroundColor:'white',
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%',
      borderRadius:7
    },
    
    trusted: {
      backgroundColor:'#1795E3',
    },
    trustTitle: {
      color: '#1795E3',
      fontFamily:'HelveticaNeue-Medium',
      fontSize:13,
      lineHeight:13
    },
    trustedTitle: {
      color: '#FFFFFF',
      fontFamily:'HelveticaNeue-Medium',
      fontSize:13,
      
    },
    trustedProfileTitle: {
      
      fontSize:15
    },

    modalClose: {                       
      height: 35,
      borderWidth:0,
      borderColor:'#1795E3',
      backgroundColor:'white',
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%',
      borderRadius:7,
      marginTop:20,
    },
    modalCloseTitle: {
      color: '#1795E3',
      fontFamily:'HelveticaNeue-Medium',
      fontSize:16
    },
    buttonTrustModal: {
      marginTop:20,
    },
    buttonModalGray:{
      width:'90%',
      alignSelf:'center',
      marginBottom:2,
      borderRadius:10,
      borderWidth:2,
      backgroundColor: '#FAFAFA',
      shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 1 ,
    shadowOffset : { width: 0, height: 2},
    },
    buttonModalGrayText: {
      color:'#000000'
    }

  })

  const inputs = StyleSheet.create({
    input:{
      flex:1,
      fontFamily:'HelveticaNeue-Regular',
      fontSize:15,
      color:'#000',
      paddingLeft:10,
      paddingRight:10,
      width:'100%',
    },
    inputSmaller:{
      flex:1,
      fontFamily:'HelveticaNeue-Regular',
      fontSize:13,
      color:'#000',
      paddingLeft:10,
      paddingRight:10,
      width:'100%',
    },
    inputContainer:{ 
      height:45,
      borderWidth:1,
      borderColor:'#D6D8E8',
      backgroundColor:'#fff',
      borderRadius:7,
      paddingHorizontal: 0,
      width:'100%',
      paddingBottom:0,
      marginBottom:0
    },
    container: {
      paddingHorizontal: 0,
    },
    containerHeight: {
      paddingHorizontal: 0,
      height:45
    },
    label: {
      fontSize:15,
      color:'#000000',
      fontWeight: '600',
      fontFamily:'HelveticaNeue-Medium',
      paddingBottom:15
    },
    labelRegular: {
      fontSize:14,
      color:'#000000',
      fontFamily:'HelveticaNeue-Regular',
      paddingBottom:15
    },
    subLabel: {
      fontSize:14,
      color:'#000000',
      fontWeight: '600',
      fontFamily:'HelveticaNeue-Regular',
      paddingTop:10
    },
    asterisk: {
      fontSize:15,
      color:'red',
      fontWeight: '600',
      fontFamily:'HelveticaNeue-Medium',
      paddingBottom:15,
      paddingLeft:10
    },

    error:{
      fontSize:12,
      paddingTop:0,
      paddingLeft:5,
      color:'red',
      fontFamily:'HelveticaNeue-Regular',
    },
    errorLabel:{
      fontSize:12,
      padding:5,
      paddingLeft:10,
      color:'red',
      fontFamily:'HelveticaNeue-Regular',
      top:-25
    },
    
    textArea:{ 
      
      height:45,
      borderWidth:1,
      borderColor:'#D6D8E8',
      borderRadius:7,
      paddingHorizontal: 0,
      width:'100%',
      paddingBottom:0,
      marginBottom:20,
      flex:1,
      fontFamily:'HelveticaNeue-Regular',
      fontSize:15,
      color:'#000',
      paddingLeft:10,
      paddingRight:10,
    },
    row: {
      flex:1,
      flexDirection:'row'
    },
    rowColumn: {
      flex:1,
      flexDirection:'column'
    }
  })

  const picker = StyleSheet.create({
    datePickerInput: {
      borderWidth:0,
      
    },
    datePickerContainer:{
      width:'100%',
      height:45,
      borderWidth:1,
      borderColor:'#D6D8E8',
      borderRadius:7,
      paddingLeft:10,
      marginBottom:25
    },
    datePickerPlaceholderText: {
      fontFamily:'HelveticaNeue-Regular',
     fontSize:15,
     color:'#999',
     alignSelf:'flex-start',
   },
    datePickerDateText: {
       fontFamily:'HelveticaNeue-Regular',
      fontSize:15,
      alignSelf:'flex-start',
      color:'#000',
    }
  });

  const modals = StyleSheet.create({
    container: {
      margin:0
    },
    inner: {
       backgroundColor:'#fff', 
       paddingTop:20,
       paddingBottom:20,
       paddingRight:20,
       paddingLeft:20,
       width:'100%',
       alignSelf:'center',
       borderRadius:10,
       marginTop:10,
       
    },
    editInfoContainer: {
      margin:10,
      height:'100%'
    },
    editInfo: {
      backgroundColor:'#fff', 
      width:'100%',
      alignSelf:'center',
      borderRadius:10,
      paddingTop:0,
      paddingBottom:0,
      paddingRight:0,
      paddingLeft:0,
  
    },
    filterTitle: {
      textAlign:'center',
      fontFamily:'HelveticaNeue-Medium',
      fontSize:18,
      marginBottom:30
    },
    successInner: {
      width:'80%',
      borderRadius:30,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#1795E3',

    },
    successText: {
      fontFamily:'HelveticaNeue-Medium',
      fontSize:18,
      color: '#FFFFFF',
      paddingRight:35,
      paddingLeft:35,
      paddingTop:20,
      paddingBottom:40,
      textAlign:'center'
    },

    titleText: {
      fontFamily:'HelveticaNeue-Regular',
      fontSize:17,
      textAlign:'center',
      paddingRight:20,
      paddingLeft:20,
      marginBottom:20,
    }
  })

  const checkbox = StyleSheet.create({
    container: {
      backgroundColor:'transparent', 
      borderWidth:0,
      padding:0,
      margin:0,
      left:-10
    },
    text: {
      fontFamily: 'HelveticaNeue-Regular',
      letterSpacing:0.4,
      fontSize: 15,
      color:'#000000',
      marginBottom:3,
    },
  })

  const emptyComponent = StyleSheet.create({
    inner: {
      flex:1,
      marginTop:60,
      justifyContent: 'center',
      alignItems:'center'
  },
  title: {
      fontFamily: 'HelveticaNeue-Regular',
      fontSize: 16,
      color: '#888',
   
      textAlign:'center'
  },
  titleNotif: {
    fontFamily: 'HelveticaNeue-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: '#888',
    textAlign:'center'
},
titleNotifDesc: {
  fontFamily: 'HelveticaNeue-Regular',
  fontSize: 16,
  lineHeight: 22,
  color: '#888',
  textAlign:'left'
},
  titleLong: {
    fontFamily: 'HelveticaNeue-Regular',
    fontSize: 15,
    color: '#888',
    marginHorizontal: 5,
    textAlign:'center'
},
  iconOuter: {
    width:78,
    height: 78,
    borderRadius: 39,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,
    backgroundColor:'#fff',
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center'
  }
  })
  export { containers, buttons,inputs,logo,picker,modals,checkbox,emptyComponent }           