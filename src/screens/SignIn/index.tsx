/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/jsx-one-expression-per-line */
import Logo from '@/assets/logo.svg';
import { useAuth } from '@/hooks/useAuth';
import { Fontisto } from '@expo/vector-icons';
import { Center, Icon, Text } from 'native-base';

import { Button } from '@/components/Button';

type SignInProps = {};

export function SignIn({}: SignInProps) {
  const { signIn } = useAuth();

  return (
    <Center flex={1} bgColor="gray.900" p={7}>
      <Logo width={212} height={40} />
      <Button
        title="ENTRAR COM O GOOGLE"
        type="SECONDARY"
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        marginTop={12}
        onPress={signIn}
      />

      <Text color="white" textAlign="center" mt={4}>
        Não utilizamos nenhuma informação além {'\n'}
        do seu e-mail para criação de sua conta.
      </Text>
    </Center>
  );
}
