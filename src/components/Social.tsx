import { Github, Linkedin } from "lucide-react"

export const Social = () => {
    return (
        <>
            <div className="hidden group fixed z-50 top-[139px] lg:right-[20px] bg-gray-200 rounded-full p-2 lg:block">
                <a href='https://www.linkedin.com/in/laize-ferraz/' target="_blank"
                    rel="noopener noreferrer"><Linkedin className='mb-5' /></a>
                <a href='https://github.com/laizeferraz' target="_blank"
                    rel="noopener noreferrer"><Github /></a>
            </div>
        </>
    )
}