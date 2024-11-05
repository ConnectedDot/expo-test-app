import {
	View,
	Text,
	StyleSheet,
	Button,
	TouchableOpacity,
	Pressable,
} from "react-native";
import React, {useState} from "react";
import explore from "../(tabs)/explore";
import {Dimensions} from "react-native";

export default function index() {
	const {width} = Dimensions.get("window");
	const height = width / 4;
	const [fonts, setFonts] = useState("blue");

	const handlePress = () => {
		setFonts("black");
	};
	return (
		<View
			style={{
				width: width,
			}}
		>
			<View style={styles.P}>
				<Text>index</Text>

				<Text style={styles.text}>index</Text>
				<Text>index</Text>
				<TouchableOpacity>
					<Pressable
						onPress={
							() => setFonts("black")

							// handlePress
							// setFonts("brown")
						}
					>
						<Text
							style={{
								color: fonts,
							}}
						>
							Clicked
						</Text>
					</Pressable>
				</TouchableOpacity>

				<Text style={styles.header}>index</Text>
				<Text>index</Text>
				<Text>index</Text>
				<Text>index</Text>
				<Text>index</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	P: {
		// display: "flex",
		// flex: 1,
		marginLeft: 24,
		marginTop: 20,
		// width: width,
		// justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 40,
		color: "red",
		// fontWeight: 600,
		backgroundColor: "black",
	},
	header: {
		width: "100%",
		backgroundColor: "brown",
		color: "white",
		padding: 20,
		textAlign: "center",
	},
});
