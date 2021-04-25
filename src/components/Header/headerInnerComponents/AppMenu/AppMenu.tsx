import {FC} from 'react';

export interface AppMenuProps {
  chosenPage: number;
}

const AppMenu: FC<AppMenuProps> = (props) => {
  return (
    <nav>
      <ul className = "appMenu">
        <li>Home</li>
        <li>Solutions</li>
        <li>Features</li>
        <li>Feedback</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
};

export default AppMenu;
