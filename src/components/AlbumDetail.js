import React from "react";
import { Text, View, Image, Linking } from "react-native";
import Card from "./Card";
import Button from './Button';
import CardSection from "./CardSection";

const AlbumDetail = ({ album }) => {
  const { title, artist, image, thumbnail_image, url } = album;
  const { imageStyle, thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View
          style={thumbnailContainerStyle}
        >
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now!
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
