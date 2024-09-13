import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

export default function App() {
  const [diceRolls, setDiceRolls] = useState([5, 6, 7]);

  return (
    <View>
      <Button
        title="Roll Dice!"
        onPress={() => {setDiceRolls(diceRolls.map(diceRoll => diceRoll + 1));}}
      />
      <Button
        title="Reset"
        onPress={() => { setDiceRolls([5, 6, 7]); }}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRoll}
        </Text>
      ))}
    </View>
  );
}