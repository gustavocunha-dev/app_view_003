// importar a biblioteca geral do React
import React from 'react';

// importar os componentes utilizados
import { View, Text } from 'react-native';

function App() {
  return (
    <View style={{ flex: 1, padding: 50, backgroundColor: 'orange', flexDirection: "column-reverse  " }}>
      
      <View style={{ width: 70, height: 70, backgroundColor: '#00FFFF' }}>
      </View>

      <View style={{ width: 70, height: 70, backgroundColor: '#1E90FF' }}>
      </View>

      <View style={{ width: 70, height: 70, backgroundColor: '#4169E1' }}>
      </View>

    </View>
  );
}

export default App;
