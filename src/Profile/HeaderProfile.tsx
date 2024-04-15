// Own components
import Title from "../Dashboard/Header/Title/Title";

function Header() {
  return (
    // Flex to expand the div 100% of container and align items as a column with multiple rows
    <div className="flex flex-col">
      {/* Add margins to clearly define the current user. Set same width as symptoms list based on screen size*/}
      <div>
        <Title titulo="Perfil" />
      </div>
    </div>
  );
}

export default Header;
