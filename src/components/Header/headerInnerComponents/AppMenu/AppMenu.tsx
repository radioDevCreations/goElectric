export interface AppMenuProps {
  chosenPage: number;
}

const AppMenu: React.SFC<AppMenuProps> = (props) => {
  return (
    <menu>
      <ul>
        <li>Home</li>
        <li>Solutions</li>
        <li>Features</li>
        <li>Feedback</li>
        <li>Contact us</li>
      </ul>
    </menu>
  );
};

export default AppMenu;
