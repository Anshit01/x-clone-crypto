import Kityan from 'assets/kittyann-token.png'

const Feed = () => {
  return (
    <div className="flex gap-3 border border-[#2F3336] p-3 rounded-xl">
      <img src={Kityan} className="w-[63px] h-[53px] " />
      <div>
        <p className="text-[#E7E9EA] text-[15px] font-medium font-inter ">
          KITTYANN Token
        </p>
        <p className="text-[#FBC025] text-[15px] font-normal font-roboto-mono">
          100 $KITTYANN (0.1 ETH)
        </p>
        <p className="text-[#71767B] text-[15px] font-normal font-roboto-mono">
          Rewards: 0.1 ETH
        </p>
      </div>
    </div>
  )
}

export default Feed
