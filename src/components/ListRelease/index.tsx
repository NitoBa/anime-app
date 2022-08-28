export function ListRelease() {
  return (
    <div className="flex flex-col gap-[2.4rem]">
      <h4 className="font-semibold text-[3.6rem]">New Realease</h4>
      <div className="flex gap-[3rem] items-center justify-center w-full overflow-x-scroll">
        {new Array(14).fill(0).map((_) => (
          <div className="h-[28.4rem] w-[17rem] flex flex-col gap-[.8rem] items-center flex-shrink-0">
            <div className="h-[25.3rem] w-full relative flex flex-col items-center">
              <img
                src="https://source.unsplash.com/random/?onepiece,anime"
                alt=""
                className="rounded-xl w-full h-full object-cover"
              />
              <div className="flex flex-col items-center justify-end bg-gradient-to-b from-transparent to-[#0F1E29] absolute h-full w-full rounded-xl pb-[1.2rem]">
                <span className="">Episode 1132</span>
              </div>
            </div>
            <strong className="font-semibold text-center">One Piece</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
