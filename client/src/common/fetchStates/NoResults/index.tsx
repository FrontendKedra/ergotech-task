import { useQueryParameter } from "../../customHooks/useQueryParameter";
import { Image, Header, Wrapper } from "./styled";

export const NoResult = () => {
  const query = useQueryParameter("search");
  return (
    <Wrapper>
      <Header>Sorry, there are no results for “{query}”</Header>
      <Image />
    </Wrapper>
  );
};
