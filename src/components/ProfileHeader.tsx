import Back from 'assets/back.svg'
import Info from 'assets/info.svg'
import FollowButton from 'components/FollowButton'

const ProfileHeader = () => {
  return (
    <>
      <img src={Back} />
      <div className="rounded-full w-[134px] h-[134px] bg-white mt-10"></div>
      <div className="flex items-center mb-3">
        <div className="flex flex-col flex-1">
          <p className="font-roboto font-normal text-[20px] text-[#E7E9EA] mt-4">
            @KakarotBuilds
          </p>
          <p className="text-[15px] text-[#BFDBFE] font-inter font-normal">
            0x234243242323
          </p>
          <p className="text-[15px] text-[#E7E9EA] font-roboto font-normal mt-7 w-[287px]">
            Building in the SocialFi space. Coming soon to the blockchains near
            you!
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-center items-center gap-1 mb-2">
            <p className="font-roboto-mono font-bold text-[#E8BF29] underline decoration-1 decoration-[#E8BF29] underline-offset-4 ">
              30.23
            </p>
            <img src={Info} className="" />
          </div>
          <div>
            <FollowButton />
          </div>
        </div>
      </div>
      <p className="text-[#71767B] font-normal text-[15px] font-roboto mb-3">
        Joined May 2024
      </p>
      <div className="flex gap-6 mb-3">
        <div className="flex flex-row items-center gap-1 font-normal text-[14px] font-roboto">
          <p className="text-[##E7E9EA]">2</p>
          <p className="text-[#71767B]">Following</p>
        </div>
        <div className="flex flex-row items-center gap-1 font-normal text-[14px] font-roboto">
          <p className="text-[##E7E9EA]">0</p>
          <p className="text-[#71767B]">Followers</p>
        </div>
        <div className="flex flex-row items-center gap-1 font-normal text-[14px] font-roboto">
          <p className="text-[##E7E9EA]">0</p>
          <p className="text-[#71767B]">Likes</p>
        </div>
        <div className="flex flex-row items-center gap-1 font-normal text-[14px] font-roboto">
          <p className="text-[##E7E9EA]">0</p>
          <p className="text-[#71767B]">Mentions</p>
        </div>
      </div>
      <p className="font-normal text-[14px] font-roboto ">
        <span className="text-[#71767B] mr-1">Rewards Earned: </span>{' '}
        <span className="text-[##E7E9EA]">1.12 ETH</span>
      </p>
    </>
  )
}

export default ProfileHeader
