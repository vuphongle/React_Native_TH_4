import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [passwordLength, setPasswordLength] = useState('8');
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    let characters = '';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+{}:"<>?|[];,./';

    if (includeLowercase) characters += lowercase;
    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let password = '';
    for (let i = 0; i < parseInt(passwordLength); i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    setGeneratedPassword(password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <Text style={styles.title}>PASSWORD GENERATOR</Text>

        <View style={styles.passwordBox}>
          <Text style={styles.passwordText}>{generatedPassword}</Text>
        </View>

        <View style={styles.optionRow}>
          <Text style={styles.optionLabel}>Password length</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={passwordLength}
            onChangeText={setPasswordLength}
          />
        </View>

        <View style={styles.optionRow}>
          <Text style={styles.optionLabel}>Include lower case letters</Text>
          <TouchableOpacity
            style={[
              styles.checkboxButton,
              includeLowercase ? styles.checked : styles.unchecked,
            ]}
            onPress={() => setIncludeLowercase(!includeLowercase)}
          >
            <Text style={styles.checkboxText}>{includeLowercase ? '✓' : ''}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.optionRow}>
          <Text style={styles.optionLabel}>Include uppercase letters</Text>
          <TouchableOpacity
            style={[
              styles.checkboxButton,
              includeUppercase ? styles.checked : styles.unchecked,
            ]}
            onPress={() => setIncludeUppercase(!includeUppercase)}
          >
            <Text style={styles.checkboxText}>{includeUppercase ? '✓' : ''}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.optionRow}>
          <Text style={styles.optionLabel}>Include number</Text>
          <TouchableOpacity
            style={[
              styles.checkboxButton,
              includeNumbers ? styles.checked : styles.unchecked,
            ]}
            onPress={() => setIncludeNumbers(!includeNumbers)}
          >
            <Text style={styles.checkboxText}>{includeNumbers ? '✓' : ''}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.optionRow}>
          <Text style={styles.optionLabel}>Include special symbol</Text>
          <TouchableOpacity
            style={[
              styles.checkboxButton,
              includeSymbols ? styles.checked : styles.unchecked,
            ]}
            onPress={() => setIncludeSymbols(!includeSymbols)}
          >
            <Text style={styles.checkboxText}>{includeSymbols ? '✓' : ''}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={generatePassword}>
          <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7476b4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerMain: {
    backgroundColor: '#22255d',
    width: '90%',
    height: '95%',
    borderRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    color: 'white',
    marginTop: 20,
    fontWeight: 'bold',
    marginBottom: 60,
  },
  passwordBox: {
    width: '90%',
    height: 100,
    backgroundColor: '#000033',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  passwordText: {
    color: 'white',
    fontSize: 20,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
    marginBottom: 50,
  },
  optionLabel: {
    color: 'white',
    fontSize: 33,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  input: {
    backgroundColor: 'white',
    width: 190,
    height: 60,
    marginRight: 30,
    fontSize: 30,
    paddingLeft: 15,
    fontWeight: 'bold',
  },
  button: {
    width: '80%',
    height: 70,
    backgroundColor: '#3a3f9b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  checkboxButton: {
    width: 40,
    height: 40,
    marginRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
  },
  checked: {
    backgroundColor: 'green',
  },
  unchecked: {
    backgroundColor: 'white',
  },
  checkboxText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
