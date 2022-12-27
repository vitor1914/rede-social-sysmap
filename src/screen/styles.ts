import { StyleSheet } from "react-native"
import { THEME } from "../theme/index"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 48,
    },
    logo: {
        width: 100,
        height: 100,
    },
    text: {
        color: THEME.COLORS.TEXT,
    }
})