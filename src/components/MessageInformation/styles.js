import { StyleSheet } from "react-native";
import { colors, typography } from "../../utils";

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        flexDirection: "row",
        alignItems: "center",
    },
    message: {
        ...typography.S.medium,
        color: colors.danger.main,
        marginStart: 8,
    },
})

export default styles;