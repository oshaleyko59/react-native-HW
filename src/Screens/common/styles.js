import { StyleSheet } from "react-native";
import { COLORS } from "./constants";

export const styles = StyleSheet.create({
	imageBkg: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "flex-end",
		alignItems: "stretch",
	},
	container: {
		paddingHorizontal: 16,
		paddingTop: 32,
		gap: 16,
		borderRadius: 25,
		backgroundColor: COLORS.mainBkg,
	},

	accented: {
		color: COLORS.secondaryText,
		backgroundColor: COLORS.accent,
	},
	underlined: {
		textDecorationLine: "underline",
		textDecorationStyle: "solid",
	},

	plusBtn: {
		height: 40,
		width: 70,
		borderRadius: 20,
		alignItems: "center",
		padding: 10,
	},

	textBtn: {
		height: 51,
		borderRadius: 100,
		alignItems: "center",
		padding: 16,
	},

	btnTitle: {
		color: COLORS.secondaryText,
		fontSize: 16,
		fontFamily: "Roboto-Regular",
	},
	secondaryBtnTitle: {
		color: COLORS.linkText,
		fontSize: 16,
		lineHeight: 19,
		fontFamily: "Roboto-Regular",
	},

	positionedRight: {
		top: -36,
		right: "-76%",
	},

	topBar: {
		height: 44,
		marginTop: 50,
		paddingTop: 11,
		borderStyle: "solid",
		borderBottomWidth: 0.5,
		borderColor: "rgba(0, 0, 0, 0.3)",
		backgroundColor: COLORS.mainBkg,
	},

	input: {
		height: 50,
		padding: 16,
		borderRadius: 8,
		borderWidth: 1,
		fontSize: 16,
		fontFamily: "Roboto-Regular",
		textDecorationLine: "none", //TODO:?
		backgroundColor: COLORS.inactiveBkg,
		borderColor: COLORS.borderGray,
		color: COLORS.mainText,
	},

	inputFocused: {
		backgroundColor: COLORS.mainBkg,
		borderColor: COLORS.accent,
	},

	title: {
		marginBottom: 16,
		fontSize: 30,
		lineHeight: 35,
		letterSpacing: 0.3,
		textAlign: "center",
		color: COLORS.mainText,
		fontFamily: "Roboto-Medium",
	},

	smallerTitle: {
		fontSize: 17,
		lineHeight: 22,
		letterSpacing: -0.41,
		textAlign: "center",
		color: COLORS.mainText,
		fontFamily: "Roboto-Medium",
	},
});
