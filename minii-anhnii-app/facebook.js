import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const FacebookPost = ({ author, body, image, onPress, onLongPress }) => {
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      <View style={{ padding: 10, backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={{ uri: author.avatar }}
            style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
          />
          <View>
            <Text style={{ fontWeight: 'bold' }}>{author.name}</Text>
            <Text style={{ color: 'gray' }}>{author.timestamp}</Text>
          </View>
        </View>
        <Text style={{ marginTop: 10 }}>{body}</Text>
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: '100%', height: 200, marginTop: 10 }}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default FacebookPost;