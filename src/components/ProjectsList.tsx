import Image from 'next/image'
import Letmeask from '../assets/Letmeask.png'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-4">
      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Image
          src={Letmeask}
          alt="Letmeask Cover"
          className="rounded object-cover"
        />
        <div>
          <h4>Letmeask - 2020</h4>
          <p className="mb-4 line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            repellendus esse necessitatibus sint repudiandae debitis magnam ea
            quaerat natus explicabo consequatur, soluta non voluptate recusandae
            voluptates sapiente nobis harum odit? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Officiis repellendus esse
            necessitatibus sint repudiandae debitis magnam ea quaerat natus
            explicabo consequatur, soluta non voluptate recusandae voluptates
            sapiente nobis harum odit?
          </p>
          <Link href="/profile">Read more →</Link>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Image
          src={Letmeask}
          alt="Letmeask Cover"
          className="rounded object-cover"
        />
        <div>
          <h4>Letmeask - 2020</h4>
          <p className="mb-4 line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            repellendus esse necessitatibus sint repudiandae debitis magnam ea
            quaerat natus explicabo consequatur, soluta non voluptate recusandae
            voluptates sapiente nobis harum odit? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Officiis repellendus esse
            necessitatibus sint repudiandae debitis magnam ea quaerat natus
            explicabo consequatur, soluta non voluptate recusandae voluptates
            sapiente nobis harum odit?
          </p>
          <Link href="/profile">Read More →</Link>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Image
          src={Letmeask}
          alt="Letmeask Cover"
          className="rounded object-cover"
        />
        <div>
          <h4>Letmeask - 2020</h4>
          <p className="mb-4 line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            repellendus esse necessitatibus sint repudiandae debitis magnam ea
            quaerat natus explicabo consequatur, soluta non voluptate recusandae
            voluptates sapiente nobis harum odit? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Officiis repellendus esse
            necessitatibus sint repudiandae debitis magnam ea quaerat natus
            explicabo consequatur, soluta non voluptate recusandae voluptates
            sapiente nobis harum odit?
          </p>
          <Link href="/profile">Read more →</Link>
        </div>
      </div>
    </div>
  )
}
