export function AnimeBioSection() {
  return (
    <section className="flex flex-col gap-[4rem]">
      <div className="flex gap-[3rem]">
        <img
          className="w-[27rem] h-[38rem] rounded-xl"
          src="https://source.unsplash.com/random/?naruto,dragonballz"
          alt=""
        />
        <div className="flex flex-col gap-[1.2rem]">
          <div className="flex flex-col gap-[0.8rem]">
            <strong className="text-[2rem] font-semibold">Type:</strong>
            <span className="text-[1.6rem] text-foreground">Tv</span>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <strong className="text-[2rem] font-semibold">
              Total episodies:
            </strong>
            <span className="text-[1.6rem] text-foreground">134</span>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <strong className="text-[2rem] font-semibold">Release Date:</strong>
            <span className="text-[1.6rem] text-foreground">2007</span>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <strong className="text-[2rem] font-semibold">Status:</strong>
            <span className="text-[1.6rem] text-foreground">Completed</span>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <strong className="text-[2rem] font-semibold">Genres:</strong>
            <span className="text-[1.6rem] text-foreground">
              Action, Adventure, Fantasy
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[0.8rem] max-w-[77rem]">
        <strong className="text-[2rem] font-semibold">Description:</strong>
        <span className="text-[1.6rem] text-foreground">
          Gol D. Roger was known as the "Pirate King," the strongest and most
          infamous being to have sailed the Grand Line. The capture and
          execution of Roger by the World Government brought a change throughout
          the world. His last words before his death revealed the existence of
          the greatest treasure in the world, One Piece. It was this revelation
          that brought about the Grand Age of Pirates, men who dreamed of
          finding One Piece—which promises an unlimited amount of riches and
          fame—and quite possibly the pinnacle of glory and the title of the
          Pirate King.
        </span>
      </div>
    </section>
  );
}
