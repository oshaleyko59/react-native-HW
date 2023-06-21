import { useState } from "react";
import { View, TextInput } from "react-native";
import MainHeader from "../common/MainHeader";
import AuthMainBtn from "../common/buttons/AuthMainBtn";
import AuthSecondaryBtn from "../common/buttons/AuthSecondaryBtn";
import PasswordInput from "../common/PasswordInput";
import { styles } from "../common/styles";

const initialState = {
	email: "",
	password: "",
};

export default function LoginForm() {
	const [state, setState] = useState(initialState);

	return (
		<View style={[styles.container, { paddingTop: 32, paddingBottom: 144 }]}>
			<MainHeader>Увійти</MainHeader>
			<TextInput
				style={styles.input}
				inputMode="email"
				placeholder="Адреса електронної пошти"
				value={state.email}
				onFocus={() => console.log("Email input got focus")}
				onChangeText={(value) =>
					setState((prevState) => ({ ...prevState, email: value }))
				}
			/>
			<PasswordInput
				value={state.password}
				onChangeText={(value) =>
					setState((prevState) => ({ ...prevState, password: value }))
				}
			/>
			<View style={{ gap: 16, marginTop: 9 }}>
				<AuthMainBtn
					title="Увійти"
					onPress={() => console.log("Login pressed")}
				/>
				<AuthSecondaryBtn
					title="Зареєструватися"
					hint="Немає акаунту?"
					onPress={() => console.log("->Registration screen")}
				/>
			</View>
		</View>
	);
}

/* TODO:
    KeyboardAvoidingView
    isKbdVisible state

???
    	  inputMode="email"
				keyboardType="email-address"
				textContentType="emailAddress"
  */
