import React from "react";
import Screen from './app/components/Screen';


import ImageInputList from "./app/components/ImageInputList";
export default function App() {

  const [imageUris, setImageUri] = React.useState([]);


  const handleAdd = uri => {
    setImageUri([...imageUris, uri]);
  }

  const handleRemove = uri => {
    setImageUri(imageUris.filter(imageUri => imageUri !== uri));
  }

  return <Screen>
    <ImageInputList
      imageUris={imageUris}
      onAddImage={handleAdd}
      onRemoveImage={handleRemove}
    />

  </Screen>
}
