import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Input, Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import Profile from '../../aseets/Profile/avatar.png';
import styles from './styles';

function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <View>
          <Text style={styles.texto}>Email</Text>
          <Input style={styles.inputStyle}
          />
        </View>

        <View>
          <Text style={styles.texto}>Senha</Text>
          <Input style={styles.inputStyle}
          />
        </View>

        <View>

          <View style={styles.buttonStyle} onPress={() => navigation.navigate('Login')}>
            <Button buttonStyle={styles.buttonColor1}
            />
            <Text style={styles.textoButton1}>Salvar</Text>
          </View>

        </View>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default Register;