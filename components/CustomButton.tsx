import { Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export default function CustomButton({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      className="bg-blue-500 p-4 rounded-lg active:bg-blue-700"
      onPress={onPress}
    >
      <Text className="text-white text-center font-bold text-lg">{title}</Text>
    </TouchableOpacity>
  );
}
