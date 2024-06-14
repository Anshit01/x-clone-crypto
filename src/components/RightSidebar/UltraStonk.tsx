import BirdEmoji from 'assets/bird-emoji.png'
import TokenImage from 'assets/kittyann-token.png'
import UltraStonkTitle from 'assets/ultra-stonk-title.png'

const UltraStonk = () => {
  return (
    <div className="border rounded-2xl border-[#2F3336] p-4">
      <img
        className="-translate-x-3 -translate-y-2"
        src={UltraStonkTitle}
        alt="Ultra Stonk"
      />
      <div className="flex gap-2">
        <img className="h-[100px] w-[100px]" src={TokenImage}></img>
        <div className="flex flex-col">
          <p className="font-medium">KITTYANN Token</p>
          <p className="text-[#FBC025]">$KITTYANN</p>
          <p className="text-[#BFDBFE] text-xs">
            Created by <span className="text-[#1D9BF0]">@bonk20_solana</span>
          </p>
          <p className="text-[#86EFAC] text-xs">
            Market cap: 46.03K (10%)
            <img className="inline-block -translate-y-[3px]" src={BirdEmoji} />
            👑🦄
          </p>
          <p className="text-[#86EFAC] text-xs">Comments: 80, Holders: 200</p>
        </div>
      </div>
    </div>
  )
}

export default UltraStonk
