import { Center, Text } from 'native-base';

type SignInProps = {};

export function SignIn({}: SignInProps) {
  return (
    <Center flex={1} bgColor="gray.900">
      <Text color="white" fontSize={24}>
        SignIn Screen
      </Text>
    </Center>
  );
}
