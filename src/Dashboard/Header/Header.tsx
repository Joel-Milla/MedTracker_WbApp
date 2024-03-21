// Own components
import CurrentPatient from "./CurrentPatient/CurrentPatient";
import Title from "./Title/Title";

function Header() {
  return (
    <div className="grid grid-cols-12 gap-3 mt-8">
      <div className="col-span-3">
        <CurrentPatient />
      </div>
      <div className=" col-span-full">
        <Title />
      </div>
    </div>
  );
}

export default Header;
