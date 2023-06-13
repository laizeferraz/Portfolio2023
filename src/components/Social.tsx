import { Github, Linkedin } from "lucide-react"

export const Social = () => {
    return (
        <>
            <div className="group fixed z-50 top-[139px] right-[210px] bg-gray-200 rounded-full p-2">
                <a href='https://www.linkedin.com/in/laize-ferraz/' target="_blank"
                    rel="noopener noreferrer"><Linkedin className='mb-5' /></a>
                <a href='https://github.com/laizeferraz' target="_blank"
                    rel="noopener noreferrer"><Github /></a>
            </div>
        </>
    )
}