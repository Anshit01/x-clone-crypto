import KingOfStonkTitle from 'assets/king-of-stonks-title.png'
import UserCard from 'components/UserCard'

const KingOfStonk = () => {
  return (
    <div className="border rounded-2xl border-[#2F3336] p-4">
      <img
        className="-translate-y-3 -translate-x-3"
        src={KingOfStonkTitle}
        alt="King of Stonk"
      />
      <div className="flex flex-col gap-5">
        <UserCard username="@PhysicsToday" xProfile="https://x.com/" />
        <UserCard
          username="@JohnsCharts"
          instagramProfile="https://instagram.com/"
        />
        <UserCard username="@naval" />
      </div>
    </div>
  )
}

export default KingOfStonk
