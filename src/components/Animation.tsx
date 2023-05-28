export const Animation = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-lg">
        <div className="relative inline-block before:absolute before:-left-4 before:top-0 before:h-72 before:w-72 before:animate-blob before:rounded-full before:bg-purple-300 before:blur-xl before:filter">
          <div className="before:animation-delay-2000 relative before:absolute before:-right-4 before:top-0 before:h-72 before:w-72 before:animate-blob before:rounded-full before:bg-pink-300 before:blur-xl before:filter">
            <div className="before:animation-delay-4000 relative before:absolute before:left-28 before:top-8 before:h-72 before:w-72 before:animate-blob before:rounded-full before:bg-blue-300 before:blur-xl before:filter">
              <h1 className="relative">
                A passionate frontend developer who loves turning ideas into
                captivating digital experiences blending aesthetics with
                functionality.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
