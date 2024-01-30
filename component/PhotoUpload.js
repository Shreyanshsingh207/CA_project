import ImagePicker from 'react-native-image-picker';


const selectImage = () => {
  ImagePicker.showImagePicker({}, response => {
    if (response.didCancel) {
      console.log('User canceled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
     
      const imageUri = response.uri;
  
    }
  });
};


return (
  <TouchableOpacity onPress={selectImage}>
    <Text>Select Image</Text>
  </TouchableOpacity>
);
