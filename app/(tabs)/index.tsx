import { View, Text } from "react-native";
import BackGround from "../../components/BackGround";
import CustomButton from '@/components/CustomButton';
const Home = () => {
  return (
    <View className="flex-1 items-center justify-center bg-blue-100">
    <Text className="text-black text-xl font-bold mb-4 bg-red-800">
      Welcome to Tailwind + Expo Router!
    </Text>
    <CustomButton title="Click Me" onPress={() => alert('Hello!')} />
  </View>
  );
};

export default Home;
