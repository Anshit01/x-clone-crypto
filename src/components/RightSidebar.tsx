import SearchIcon from 'assets/search.svg'
import KingOfStonk from './RightSidebar/KingOfStonks'
import UltraStonk from './RightSidebar/UltraStonk'

const RightSidebar = () => {
  return (
    <div className="w-full h-screen sticky top-0">
      <div className="w-full pr-4">
        <div className="sticky z-10 top-0 bg-black py-4">
          <div className="flex items-center rounded-full bg-[#202327] h-[44px]">
            <img src={SearchIcon} alt="search" className="h-4 w-4 ml-4" />
            <input
              type="text"
              placeholder="Search a coin"
              className="text-[rgba(113, 118, 123, 1)] rounded-full bg-inherit px-2 h-full outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <UltraStonk />
          <KingOfStonk />
          <div className="flex text-[13px] text-[#71767B] gap-x-4 flex-wrap">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
            <span>Accessibility</span>
            <span>Ads Info</span>
            <span>More</span>
            <span>© 2024 X Corp.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
