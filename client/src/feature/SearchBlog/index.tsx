import { useEffect, useState } from "react";
import { Input, InputWrapper, Search, Title } from "./styled";
import { useQueryParameter } from "../../common/customHooks/useQueryParameter";
import { useReplaceQueryParameter } from "../../common/customHooks/useReplaceQueryParameter";

export const SearchBlog = () => {
  const queryInUrl = useQueryParameter("search");

  const [inputValue, setInputValue] = useState(queryInUrl);

  useEffect(() => {
    setInputValue(queryInUrl);
  }, [queryInUrl]);

  const replaceQueryParam = useReplaceQueryParameter(setInputValue);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    replaceQueryParam({
      key: "search",
      value: event.target.value.trim() !== "" ? event.target.value : "",
    });
  };

  return (
    <InputWrapper>
      <Title>Blogs</Title>
      <Search>Search blog</Search>
      <Input
        value={inputValue || ""}
        onChange={onInputChange}
        placeholder="Search for blog posts"
      />
    </InputWrapper>
  );
};
