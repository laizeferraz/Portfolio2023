export const Animation = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative z-10 lg:-top-16 lg:p-40 dark:text-zinc-200">
        <h1>
          A passionate software engineer who loves turning ideas into
          captivating digital experiences.
        </h1>
        <p className="mt-10 md:mt-10 lg:mt-10 dark:text-zinc-200">
          👋 Hey I&apos;m Laize - a frontend engineer crafting modern,
          user-focused web experiences from sunny Australia. I&apos;m on the
          lookout for my next opportunity to help build the next generation of
          powerful, intuitive digital tools.
        </p>
      </div>
      <div className="relative -top-[500px] z-0 md:-top-[200px] lg:-top-[480px]">
        <div className="flex flex-col md:flex-row lg:flex-row">
          <div className="animate-blob h-36 w-36 rounded-full bg-pink-300 blur-xl filter md:h-42 md:w-42 lg:h-72 lg:w-72 dark:bg-pink-500"></div>
          <div className="animation-delay-6000 animate-blob hidden h-36 w-36 rounded-full bg-green-300 blur-xl filter md:block md:h-52 md:w-52 lg:block lg:max-h-72 lg:max-w-72 dark:bg-green-500"></div>
          <div className="animation-delay-2000 animate-blob h-36 w-36 rounded-full bg-blue-300 blur-xl filter md:h-52 md:w-52 lg:max-h-72 lg:max-w-72 dark:bg-blue-500"></div>
          <div className="animation-delay-4000 animate-blob h-36 w-36 rounded-full bg-purple-300 blur-xl filter md:h-52 md:w-52 lg:max-h-72 lg:max-w-72 dark:bg-purple-500"></div>
        </div>
      </div>
    </div>
  )
}
