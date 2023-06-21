import { useState } from "react";
import { View, TextInput } from "react-native";
import MainHeader from "../common/MainHeader";
import AuthMainBtn from "../common/buttons/AuthMainBtn";
import AuthSecondaryBtn from "../common/buttons/AuthSecondaryBtn";
import PasswordInput from "../common/PasswordInput";
import { styles } from "../common/styles";

const initialState = {
	name: "",
	email: "",
	password: "",
};

export default function RegistrationForm() {
	const [state, setState] = useState(initialState);

	return (
		<View style={[styles.container, { paddingTop: 92, paddingBottom: 78 }]}>
			<MainHeader>Реєстрація</MainHeader>
			<TextInput
				style={styles.input}
				placeholder="Логін"
				value={state.name}
				onFocus={() => console.log("Login input got focus")}
				onChangeText={(value) =>
					setState((prevState) => ({ ...prevState, name: value }))
				}
			/>
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
					title="Зареєстуватися"
					onPress={() => console.log("Register pressed")}
				/>
				<AuthSecondaryBtn
					title="Увійти"
					hint="Вже є акаунт?"
					onPress={() => console.log("->Login screen")}
				/>
			</View>
		</View>
	);
}
//, style={{ paddingTop: 9 }}
