import { Text } from "react-native";
import { RFValue } from 'react-native-responsive-fontsize';

const baseFontSize = 20;
interface Props {
    children: string;
    fontSize: number;
    style: "normal" | "bold" | "h1" | "h2" | "light"
}
export function RText(props: Props) {
    return (
        <Text style={{
            fontSize: RFValue(props.fontSize),
            fontWeight: props.style == "normal" ? "normal" : "bold",
            color: props.style == "light" ? "#888": "#000"
        }}>
            {props.children}
        </Text>
    )
}