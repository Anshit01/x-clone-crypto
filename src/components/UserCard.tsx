import InstagramIcon from 'assets/instagram.png'
import ProfilePicture from 'assets/profile-picture-small.png'
import XIcon from 'assets/x.png'
import FollowButton from './FollowButton'

type UserCardProps = {
  username: string
  xProfile?: string
  instagramProfile?: string
}

const UserCard = ({ username, xProfile, instagramProfile }: UserCardProps) => {
  return (
    <div className="flex gap-2 flex-1">
      <img src={ProfilePicture} />
      <div className="flex flex-col">
        <p className="flex flex-row items-center gap-1 text-[15px]">
          <span className="text-[#E7E9EA] font-roboto">{username}</span>
          {!!xProfile && (
            <a href={xProfile} target="_blank">
              <img src={XIcon} alt="X profile" />
            </a>
          )}
          {!!instagramProfile && (
            <a href={instagramProfile} target="_blank">
              <img src={InstagramIcon} alt="X profile" />
            </a>
          )}
        </p>
        <p className="text-[#71767B] text-[15px] font-roboto text-ellipsis truncate">
          Building in the SocialFi...
        </p>
      </div>
      <FollowButton />
    </div>
  )
}

export default UserCard
