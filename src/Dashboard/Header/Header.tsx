// Own components
import CurrentPatient from "./CurrentPatient/CurrentPatient";
import Title from "./Title/Title";

function Header() {
  return (
    // Flex to expand the div 100% of container and align items as a column with multiple rows
    <div className="flex flex-col">
      {/* Add margins to clearly define the current user. Set same width as symptoms list based on screen size*/}
      <div className="md:w-1/3 2xl:w-1/4 mt-5 mb-9">
        <CurrentPatient />
      </div>
      {/* Because of flex properties, expand the full width of container */}
      <div>
        <Title />
      </div>
    </div>
  );
}

export default Header;
