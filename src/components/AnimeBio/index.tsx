type AnimeData = {
  genres: string[];
  type: string;
  releaseDate: string;
  status: string;
  image?: string;
  description?: string;
};

export function AnimeBioSection({
  type = "",
  genres = [],
  releaseDate = "",
  status = "",
  image = "",
  description,
}: AnimeData) {
  return (
    <section className="flex flex-col gap-[4rem]">
      <div className="flex gap-[3rem]">
        <img className="w-[27rem] h-[38rem] rounded-xl" src={image} />

        <div className="flex flex-col gap-[1.2rem]">
          <div className="flex flex-col gap-[0.8rem]">
            <strong className="text-[2rem] font-semibold">Type:</strong>
            <span className="text-[1.6rem] text-foreground">{type}</span>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <strong className="text-[2rem] font-semibold">
              Total episodies:
            </strong>
            <span className="text-[1.6rem] text-foreground">134</span>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <strong className="text-[2rem] font-semibold">Release Date:</strong>
            <span className="text-[1.6rem] text-foreground">{releaseDate}</span>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <strong className="text-[2rem] font-semibold">Status:</strong>
            <span className="text-[1.6rem] text-foreground">{status}</span>
          </div>
          <div className="flex flex-col gap-[0.8rem]">
            <strong className="text-[2rem] font-semibold">Genres:</strong>
            <span className="text-[1.6rem] text-foreground">
              {genres.map(
                (g, i) => `${g} ${i !== genres.length - 1 ? " | " : ""}`
              )}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[0.8rem] max-w-[77rem]">
        <strong className="text-[2rem] font-semibold">Description:</strong>
        <span className="text-[1.6rem] text-foreground">{description}</span>
      </div>
    </section>
  );
}
