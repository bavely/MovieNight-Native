import { ImageBackground } from "react-native";

const BackGround = ({ children }: { children: React.ReactNode }) => {
  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      {children}
    </ImageBackground>
  );
};

export default BackGround;
