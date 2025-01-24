```javascript
import React, {useState, useEffect} from 'react';
import {Dimensions, View, Text} from 'react-native';

const App = () => {
  const [dimensions, setDimensions] = useState({width: 0, height: 0});

  useEffect(() => {
    const onChange = (result) => {
      setDimensions({width: result.window.width, height: result.window.height});
    };

    Dimensions.addEventListener('change', onChange);
    return () => Dimensions.removeEventListener('change', onChange);
  }, []);

  return (
    <View>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
    </View>
  );
};

export default App;
```