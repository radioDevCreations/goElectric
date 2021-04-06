import "./Header.scss";
import AppLogo from './headerInnerComponents/AppLogo/AppLogo';
import AppMenu from './headerInnerComponents/AppMenu/AppMenu';

export interface HeaderProps {
    chosenPage: number;
}

const Header: React.SFC<HeaderProps> = (props) => {
  return (
    <header>
      <AppLogo/>
      <AppMenu chosenPage = {props.chosenPage}/>
    </header>
  );
};

export default Header;
