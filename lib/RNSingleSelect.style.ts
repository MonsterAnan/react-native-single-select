import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";
import { ISingleSelectDataType } from "./RNSingleSelect";
import { ThemeColors } from "./theme";

interface Style {
  listStyle: ViewStyle;
  arrowImageStyle: ImageStyle;
  spinnerContainer: ViewStyle;
  buttonContainerGlue: ViewStyle;
  menuBarItemContainerGlue: ViewStyle;
}

export const _placeholderTextStyle = (
  theme: string,
  selectedItem?: ISingleSelectDataType | null,
  placeholderTextColor?: string,
): TextStyle => ({
  width: "90%",
  fontSize: 16,
  fontWeight: "bold",
});

export const _menuItemContainer = (
  index: number,
  data?: Array<ISingleSelectDataType>,
): ViewStyle => ({
  padding: 16,
  borderBottomEndRadius: index === (data && data.length - 1) ? 16 : 0,
  borderBottomStartRadius: index === (data && data.length - 1) ? 16 : 0,
});

export const _menuBarContainer = (
  theme: string,
  menuBarContainerHeight: number,
  menuBarContainerWidth: number,
): ViewStyle => ({
  borderBottomEndRadius: 16,
  borderBottomStartRadius: 16,
  height: menuBarContainerHeight,
  width: menuBarContainerWidth,
  backgroundColor: ThemeColors[theme].menuBarBackgroundColor,
});

export const _menuButtonContainer = (
  theme: string,
  height = 50,
  width = 250,
): ViewStyle => ({
  width,
  height,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  justifyContent: "center",
  backgroundColor: ThemeColors[theme].menuButtonBackgroundColor,
});

export const _imageStyle = (
  height = 25,
  width = 25,
): ImageStyle => ({
  width,
  height,
  marginRight: 16,
});

export const _menuItemTextStyle = (theme: string): TextStyle => ({
  color: ThemeColors[theme].menuItemTextColor,
  fontWeight: "700",
});

export default StyleSheet.create<Style>({
  arrowImageStyle: {
    height: 20,
    width: 20,
  },
  buttonContainerGlue: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 16,
    marginRight: 16,
  },
  listStyle: {
    marginBottom: 3,
    marginTop: 3,
  },
  menuBarItemContainerGlue: {
    alignItems: "center",
    flexDirection: "row",
  },
  spinnerContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
  },
});
