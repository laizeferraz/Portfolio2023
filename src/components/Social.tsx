import { Github, Linkedin } from 'lucide-react'

export const Social = () => {
  return (
    <>
      <div className="group fixed top-[139px] z-50 hidden rounded-full bg-gray-200 p-2 lg:right-[20px] lg:block">
        <a
          href="https://www.linkedin.com/in/laize-ferraz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="mb-5" />
        </a>
        <a
          href="https://github.com/laizeferraz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </div>
    </>
  )
}
