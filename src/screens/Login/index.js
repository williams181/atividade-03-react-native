import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Avatar, Input, Button } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import Profile from '../../aseets/Profile/avatar.png';
import styles from './styles';

function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar
          size="xlarge"
          rounded
          title="CR"
          source={Profile}
        />
      </View>
      <View style={styles.input}>
        <View>
          <Text style={styles.texto}>Login</Text>
          <Input style={styles.inputStyle}
          />
        </View>

        <View>
          <Text style={styles.texto}>Senha</Text>
          <Input style={styles.inputStyle}
          />
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View style={styles.buttonStyle}>
              <Button buttonStyle={styles.buttonColor1}
              />
              <Text style={styles.textoButton1}>Login</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <View style={styles.buttonStyle}>
              <Button buttonStyle={styles.buttonColor2}
              />
              <Text style={styles.textoButton2}>Cadastre-se</Text>
            </View>
          </TouchableOpacity>

        </View>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default Login;