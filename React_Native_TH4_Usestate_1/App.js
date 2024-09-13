import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const randomDiceRoll = () => Math.floor(Math.random() * 6) + 1;

export default function App() {
  const [diceRolls, setDiceRolls] = useState([randomDiceRoll()]);
  
  return (
    <View>
      <Button
        title="Roll Dice!"
        onPress={() => { setDiceRolls([...diceRolls, randomDiceRoll() + 1]); }}
      />
      <Button
        title="Reset"
        onPress={() => { setDiceRolls([]); }} // Xóa toàn bộ dữ liệu
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style = {{fontSize: 24}} key={index}>
          {diceRoll}
        </Text>
      ))}
    </View>
  );
}
