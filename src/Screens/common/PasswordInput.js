import { useState } from "react";
import { View, TextInput } from "react-native";
import PlainTextBtn from "./buttons/PlainTextBtn";
import { styles } from "../common/styles";

export default function PasswordInput({value, onChangeText }) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder="Пароль"
				value={value}
				onFocus={() => console.log("PasswordInput got focus")}
				onChangeText={onChangeText}
				secureTextEntry={!isPasswordVisible}
			/>
			<PlainTextBtn
				title={isPasswordVisible ? "Сховати" : "Показати"}
				positioned
				onPress={() => {
					setPasswordVisible(!isPasswordVisible);
					console.log("isPasswordVisible>>", isPasswordVisible);
				}}
			/>
		</View>
	);
}

