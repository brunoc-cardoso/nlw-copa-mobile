import {
  useFonts,
  Roboto_400Regular as RobotoRegular,
  Roboto_500Medium as RobotoMedium,
  Roboto_700Bold as RobotoBold,
} from '@expo-google-fonts/roboto';
import { NativeBaseProvider, StatusBar } from 'native-base';

import { Loading } from '@/components/Loading';
import { SignIn } from '@/screens/SignIn';
import { theme } from '@/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ RobotoRegular, RobotoMedium, RobotoBold });

  return (
    <NativeBaseProvider theme={theme}>
      {!fontsLoaded ? (
        <Loading />
      ) : (
        <>
          <SignIn />
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
        </>
      )}
    </NativeBaseProvider>
  );
}
