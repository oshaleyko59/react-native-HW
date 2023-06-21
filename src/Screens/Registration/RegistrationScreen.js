import {
  View,
	StatusBar,
	ImageBackground,
} from "react-native";
import Avatar from "./Avatar";
import RegistrationForm from "./RegistrationForm";
import { bkgImage } from "../common/constants";
import { styles } from "../common/styles";

export default function RegistrationScreen() {
	return (
		<ImageBackground source={bkgImage} style={styles.imageBkg}>
			<View>
				<StatusBar
					animated={true}
					barStyle={"default"}
					showHideTransition={"slide"}
					hidden={false}
        />
        <Avatar/>
				<RegistrationForm />
			</View>
		</ImageBackground>
	);
}

//TODO: ?  	SafeAreaView,
