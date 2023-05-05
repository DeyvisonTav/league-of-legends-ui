import Image from "next/image";

export function VideoPlayerPlayNow() {
  return (
    <div className="w-full bg-gradient">
      <div className="absolute">
        <div className="mt-[20rem] ml-[34rem]">
          <Image src={"/assets/logo.png"} alt="" height={20} width={800} />
        </div>
        <div className="ml-[53rem] z-40 relative">
          <button
            className="text-lg text-[#252423] px-12 py-3 bg-[#3BC0DF]  font-bold
                   hover:bg-cyan-300 transition-all duration-300 border border-white"
          >
            Donwload
          </button>
        </div>
      </div>
      <div>
        <video autoPlay muted loop src="/assets/apresentacaoLol.webm" />
      </div>
    </div>
  );
}
