import Feed from 'components/Feed'
import ProfileHeader from 'components/ProfileHeader'

const Profile = () => {
  return (
    <>
      <ProfileHeader />

      {/* Profile bar */}
      <div className="flex flex-row justify-between mt-5 text-[#71767B] text-[15px] font-normal font-roboto">
        <div className="flex flex-col gap-3">
          <p className="text-[#E7E9EA]">Coins held</p>
          <div className="h-1 bg-[#1D9BF0] rounded-md"></div>
        </div>
        <div>
          <p>Replies</p>
        </div>
        <div>
          <p>Created</p>
        </div>
        <div>
          <p>Allocated</p>
        </div>
      </div>
      <hr className="border-[0.5px] border-[#2F3336]" />

      {/* Feed */}
      <div className="flex flex-col gap-3 mt-5">
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
      </div>
    </>
  )
}

export default Profile
