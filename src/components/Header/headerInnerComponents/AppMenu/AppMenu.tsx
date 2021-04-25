import {FC} from 'react';

export interface AppMenuProps {
  chosenPage: number;
}

const AppMenu: FC<AppMenuProps> = (props) => {
  return (
    <nav>
      <ul className = "app-menu-list">
        <li className = "app-menu-list">Home</li>
        <li className = "app-menu-list">Solutions</li>
        <li className = "app-menu-list">Features</li>
        <li className = "app-menu-list">Feedback</li>
        <li className = "app-menu-list">Contact us</li>
      </ul>
    </nav>
  );
};

export default AppMenu;
