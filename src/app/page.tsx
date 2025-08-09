import Signature from "@/app/layouts/page/signature/signature";

export default function Home() {
  return (
    <>
      <div
        id="page-home"
        className="flex flex-col items-center justify-center w-full min-h-screen bg-white"
      >
        {" "}
        <div
          id="announcement-container"
          className="flex flex-col items-center justify-center gap-9"
        >
          <div
            id="main-title-container"
            className="flex flex-col items-center justify-center w-full h-auto"
          >
            <h1
              id="main-title-text"
              className="font-poppins leading-tight bg-gradient-to-r from-[#A0A0A0]/30 via-[#373636]/70 to-[#A0A0A0]/30 bg-clip-text text-transparent text-4xl"
            >
              Where code feels like magic.
            </h1>
          </div>

          <div
            id="context-description-container"
            className="flex flex-col items-center justify-center max-w-[568px] h-auto gap-[27px] text-center"
          >
            <p
              id="context-intro"
              className="font-poppins bg-gradient-to-r from-[#B2B2B2]/50 via-[#373636]/70 to-[#B2B2B2]/50 bg-clip-text text-transparent text-[15px]"
            >
              {`Retro Labs is brewing something wondrous — line by line, spell by
              spell. The interface you seek is still forming, like a
              constellation coming into view.`}
            </p>

            <p
              id="context-behind-scenes"
              className="font-poppins bg-gradient-to-r from-[#B2B2B2]/50 via-[#373636]/70 to-[#B2B2B2]/50 bg-clip-text text-transparent text-[15px]"
            >
              {`Behind the scenes, ethereal code is weaving its tapestry. Elements
              dance in hidden layers, enchantments being stitched into every
              pixel. What appears quiet now is simply the calm before the
              interface awakens — and when it does, it will shimmer with retro
              magic and modern brilliance alike.`}
            </p>

            <p
              id="context-coming-soon"
              className="font-poppins bg-gradient-to-r from-[#B2B2B2]/50 via-[#373636]/70 to-[#B2B2B2]/50 bg-clip-text text-transparent text-[15px]"
            >
              {`Soon, you'll step into a place where design meets delight, where
              logic and nostalgia hold hands. Until then, know this: something
              magical is unfolding… and you’re already part of the story.`}
            </p>

            <p
              id="context-code-access"
              className="font-poppins bg-gradient-to-r from-[#B2B2B2]/50 via-[#373636]/70 to-[#B2B2B2]/50 bg-clip-text text-transparent text-[15px]"
            >
              {` You don’t need to wait for the magic to reveal itself fully.
              Because the essence, the heart, the source of it all — the code is
              already yours to explore.`}
            </p>

            <div
              id="signature-section"
              className="flex flex-col items-end justify-center w-full h-auto"
            >
              <div
                id="signature-block"
                className="flex flex-col items-center justify-center gap-2.5"
              >
                <Signature />
                <p
                  id="signature-title"
                  className="font-poppins bg-gradient-to-r from-[#676767]/50 via-[#373636]/70 to-[#B2B2B2]/50 bg-clip-text text-transparent text-[15px]"
                >
                  Founder, Retro Labs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
