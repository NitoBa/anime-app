export function PopularAnimeSection() {
  return (
    <div className="flex flex-col w-[37rem] gap-[3.2rem] sticky top-0">
      <h3 className="text-[3.2rem] font-semibold">Popular Anime</h3>
      <div className="grid grid-cols-2 gap-y-[2.8rem] gap-x-[3rem] ">
        {new Array(6).fill(0).map(() => (
          <div className="h-[23rem] w-full rounded-xl overflow-hidden">
            <img
              className="object-cover h-full w-full"
              src="https://source.unsplash.com/random/?naruto,dragonballz"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
