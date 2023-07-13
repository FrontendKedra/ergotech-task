import { BlogTileProps } from "../../../interfaces/generalInterfaces";
import { Wrapper, FullArticle, FullTitle, Text, } from "./styled";

export const BlogTile = ({ title, body }: BlogTileProps) => (
    <Wrapper>
      <Text>Title:</Text>
      <FullTitle> {title}</FullTitle>
      <Text>Article:</Text>
      <FullArticle>{body}</FullArticle>
    </Wrapper>
);
