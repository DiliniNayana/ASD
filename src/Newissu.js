import React, {useState} from 'react';
import {Text, View, Keyboard, StyleSheet, ScrollView, Dimensions, SafeAreaView, ImageBackground, KeyboardAvoidingView, Image, TextInput, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// const App = () => {
//   const [filePath, setFilePath] = useState({});
 
//   const chooseFile = () => {
//     let options = {
//       title: 'Select Image',
//       customButtons: [
//         {
//           name: 'customOptionKey',
//           title: 'Choose Photo from Custom Option'
//         },
//       ],
//       storageOptions: {
//         skipBackup: true,
//         path: 'images',
//       },
//     };
//     ImagePicker.showImagePicker(options, (response) => {
//       console.log('Response = ', response);
 
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log(
//           'User tapped custom button: ',
//           response.customButton
//         );
//         alert(response.customButton);
//       } else {
//         let source = response;
//         // You can also display the image using data:
//         // let source = {
//         //   uri: 'data:image/jpeg;base64,' + response.data
//         // };
//         setFilePath(source);
//       }
//     });
//   };
// }

export default function Newissu() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Billing', value: 'Billing'},
    {label: 'CEB Assist', value: 'CEB Assist'},
    {label: 'CEB Info', value: 'CEB Info'},
    {label: 'FIFO', value: 'FIFO'},
    {label: 'HRIS', value: 'HRIS'},
    {label: 'MITFIN', value: 'MITFIN'},
    {label: 'MIS Reports', value: 'MIS Reports'},
    {label: 'PIV', value: 'PIV'},
    {label: 'SMC', value: 'SMC'},
    {label: 'SPS', value: 'SPS'},
    {label: 'Other', value: 'Other'},
  ]);

  const [dep, setdep] = useState('');
  const [sum, setsum] = useState('');
  const [des, setdes] = useState('');
  const [per, setper] = useState('');
  const [con, setcon] = useState('');

  const handdleTask = () => {
    // console.log(task);
    // setTaskItems([...taslItems, task])
    // setTask(null);
    let collection = {};
    (collection.dept_id = this.dep),
      (collection.reporter = this.per),
      // (collection.assignto = this.per),
      (collection.title = this.sum),
      (collection.disc = this.des),
      // (collection.ad_info = this.add),
      (collection.contact = this.con),
      (collection.contact_per = this.per),
      console.warn(collection);
    console.log(collection);
    Keyboard.dismiss();
    var url = 'https://asd.ceb.lk/API/insert.php';
    //fetchService(`https://asd.ceb.lk/API/insert.php?dept_id=${per}&reporter=${per}&assignto=${per}&title=${sum}&disc=${des}&ad_info=${des}&contact=${con}&contact_per=${per}`, 'POST', undefined)
    fetch(url,{
      method: 'POST',
      body: JSON.stringify(collection),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => {
        console.log(" > > > > > > ",res)
        alert("Successfully Added");
      })
      .catch(error => console.log(error))
  }

  return (
    <KeyboardAvoidingView style={styles.container1} behavior= "position , padding , height">
      <View style={styles.container}>
        <ImageBackground source={require('./../assest/homebg.png')} style={styles.image}>
          {/* <header.................................................................................................................! /> */}
          <View style={styles.header}>
            <View style={styles.userLogo1}>
              <Image source={require('./../assest/userLogo.png')} style={styles.userLogo} />
            </View>
            <View style={styles.text}>
              <Text style={styles.text1}>Employee Name</Text>
              <Text style={styles.text2}>Job Type</Text>
            </View>
          </View>
          <View style={styles.title1}>
            <Text style={styles.title}>Service Request</Text>
          </View>
          {/* < End of header..........................................................................................................! /> */}
          {/* < Body....................................................................................................................! /> */}
          <ScrollView style={styles.mainTextWrapper}>
            <View style={styles.textWrapper1}>
              <View style={styles.textWrapper2}>
                <Text style={styles.inputs1}>Cost Center</Text>
                <TextInput style={styles.inputs2} editable={false} value={dep} onChangeText={text => setdep(text)} />
              </View>
              <View style={styles.textWrapper2}>
                <Text style={styles.inputs1}>System</Text>
                <DropDownPicker
                  open={open}
                  items={items}
                  value={value}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  style={styles.d2}
                  onChangeItem={(item) => console.log(item.label, item.value)}
                />
              </View>
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.input1}>Summary</Text>
              <TextInput style={styles.input2} value={sum} onChangeText={text => setsum(text)} />
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.input1}>Description</Text>
              <TextInput style={styles.input3} multiline={true} value={des} onChangeText={text => setdes(text)} />
            </View>
            {/* <View style={styles.textWrapper}>
              <Image
                source={{ uri: filePath.path}} 
                style={{width: 100, height: 100}} />
              <Image
                source={{
                  uri: 'data:image/jpeg;base64,' + filePath.data,
                }}
                style={styles.imageStyle}
              />
              <Image source={{uri: filePath.uri}} style={styles.imageStyle} />
              <Text style={styles.textStyle}>{filePath.uri}</Text>
                <Button
                  title="Choose File"
                  onPress={chooseFile} />
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.buttonStyle}
                onPress={chooseFile}>
                <Text style={styles.textStyle}>Choose Image</Text>
              </TouchableOpacity>
            </View> */}
            <View style={styles.textWrapper1}>
              <View style={styles.textWrapper2}>
                <Text style={styles.inputs1}>Contact Person</Text>
                <TextInput style={styles.inputs2} value={per} onChangeText={text => setper(text)} />
              </View>
              <View style={styles.textWrapper2}>
                <Text style={styles.inputs1}>Contact Number</Text>
                <TextInput style={styles.inputs2} keyboardType='numeric' maxLength={10} value={con} onChangeText={text => setcon(text)} />
              </View>
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.buttonView1} onPress={() => handdleTask() }>
                <Text style={styles.send1}>Send</Text>
                <Image source={require('./../assest/send2.png')} style={styles.send} />
              </TouchableOpacity>
            </View>
          </ScrollView>
          {/* < End of Body.............................................................................................................! /> */}

        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  image: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    margin: 15,
  },
  userLogo: {
    height: 35,
    width: 35,
    marginTop: 3,
  },
  text: {
    marginLeft: 10,
  },
  text1: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  text2: {
    color: '#fff',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '700',
  },
  title1: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '7%',
  },
  //  <body................................................................................................!/>
  textWrapper: {
    marginTop: '1%',
  },
  textWrapper2: {
    marginTop: '3%',
    width: '48%',
    marginLeft: '1.5%',
    marginRight: '1%',
  },
  mainTextWrapper: {
    margin: '2%',
    marginTop: '8%',
  },
  input2: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: '1%',
    elevation: 3,
    marginBottom: '4%',
    marginLeft: '1%',
    marginRight: '2%',
  },
  inputs2: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 5,
    elevation: 3,
    marginBottom: 15,
    borderColor: '#fff',
  },
  d2: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 5,
    elevation: 3,
    marginBottom: 15,
    borderColor: '#fff',
  },
  inputss2: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 5,
    elevation: 3,
    marginBottom: 15,
    width: '50%',
    marginHorizontal: 10,
  },
  input1: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    marginLeft: 5,
    marginRight: 5,
  },
  inputs1: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  inputss1: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
    marginLeft: 5,
    marginRight: 10,
    marginTop: 15,
    marginHorizontal: 10,
  },
  input3: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 5,
    elevation: 3,
    marginBottom: 2,
    height: 80,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonView: {
    backgroundColor: '#861C17',
    borderRadius: 60,
    marginLeft: 220,
    marginRight: 15,
    marginTop: 15,
  },
  buttonView1: {
    backgroundColor: '#861C17',
    borderRadius: 60,
    marginLeft: 43,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  send1: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  send: {
    height: 20,
    width: 24,
    marginLeft: 10,
  },
  textWrapper1: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
  },
  //  < End of body........................................................................................!/>
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});