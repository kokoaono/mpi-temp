import NoPage from '../images/NoPage.jpg';
import { Container, Image } from '@chakra-ui/react';

export const NotFound = () => {
  return (
    <Container maxW={'container.xl'} centerContent>
      <Image
        src={NoPage}
        alt='No page found'
        m={100}
        rounded='lg'
      />
    </Container>
  )
};