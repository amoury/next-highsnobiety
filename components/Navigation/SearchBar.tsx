import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components'
import { VscChromeClose } from 'react-icons/vsc';

type TProps = {
  close: () => void;
}

const SearchBar = ({ close }: TProps): JSX.Element => {
  return (
    <SearchBarWrapper>
        <BsSearch size="1.2em" />
        <Input placeholder="Search Highsnobeity" />
        <Icon><VscChromeClose size="1.5em" color="darkgrey" onClick={close} /></Icon>
    </SearchBarWrapper>
  )
}


const SearchBarWrapper = styled.div`
  width: 1200px;
  align-items: center;
  display: flex;
`;

const Icon = styled.div`
  cursor: pointer;
`;

const Input = styled.input`
  flex: 1;
  height: 30px;
  font-size: 1.2em;
  margin: 0 15px;
  border: none;
  outline: none;
`;

export default SearchBar
