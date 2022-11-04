import { Center, Spinner } from 'native-base';

type LoadingProps = {};

export function Loading({}: LoadingProps) {
  return (
    <Center flex={1} bg="gray.900">
      <Spinner color="yellow.500" />
    </Center>
  );
}
