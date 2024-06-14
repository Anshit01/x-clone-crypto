import Home from 'assets/home-fill.svg'
import Logo from 'assets/logo.png'
import Notification from 'assets/notification.svg'
import ProfilePicture from 'assets/profile-picture-small.png'
import Profile from 'assets/profile.svg'
import Setting from 'assets/setting.svg'
import PrimaryButton from 'components/PrimaryButton'

const LeftSidebar = () => {
  return (
    <div className="w-full h-screen sticky top-0 pt-4 pl-4">
      <div className="flex flex-col gap-4">
        <img src={Logo} alt="logo" className="h-8 w-8 rounded-full" />
        <div className="flex gap-2">
          <img src={Home} className="h-7 w-7" />
          <span className="text-lg">Home</span>
        </div>
        <div className="flex gap-2">
          <img src={Notification} className="h-6 w-6" />
          <span className="text-lg">Notifications</span>
        </div>
        <div className="flex gap-2">
          <img src={Profile} className="h-6 w-6" />
          <span className="text-lg">Profile</span>
        </div>
        <div className="flex gap-2">
          <img src={Setting} className="h-6 w-6" />
          <span className="text-lg">Settings</span>
        </div>
        <PrimaryButton />
        <div className="flex gap-2 flex-1">
          <img src={ProfilePicture} />
          <div className="flex flex-col">
            <p className="flex flex-row items-center">
              <span className="text-[#E7E9EA] font-roboto">Kakarot</span>
            </p>
            <p className="text-[#71767B] font-roboto">@KakarotBuilds</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar
