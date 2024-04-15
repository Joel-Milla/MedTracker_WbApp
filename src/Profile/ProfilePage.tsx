import HeaderProfile from "./HeaderProfile";
import ProfileField from "./ProfileField";

function ProfilePage() {
  return (
    <div className="container mx-auto mb-10 p-3">
      <HeaderProfile />
      <div className="grid grid-rows-4">
        <ProfileField label="Test" value="Test" />
        <ProfileField label="Test" value="Test" />
        <ProfileField label="Test" value="Test" />
        <ProfileField label="Test" value="Test" />
      </div>
    </div>
  );
}

export default ProfilePage;
