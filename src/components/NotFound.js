import NoPage from '../images/NoPage.jpg';
import { Container, Image } from '@chakra-ui/react';

export const NotFound = () => {
  return (
    <Container maxW={'container.xl'} centerContent>
      <Image
        src={NoPage}
        alt='404 page image'
        m={100}
        rounded='lg'
      />
    </Container>
  )
};
