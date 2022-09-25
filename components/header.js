import Link from 'next/link'
import Container from '../components/container'

function Header() {
  return (
    <header className="py-6">
      <Container>
        <nav className="flex space-x-5">
          <Link href="/">
            <a className='hover:text-gray-300'>Home</a>
          </Link>

            <a className='hover:text-gray-300  p-1' href='//relife-campus.com'>技術Blog</a>
          <a className='hover:text-gray-300  p-1' href='//github.com/Low0409'>GitHub</a>
          <Link href="/Skill">
            <a className='hover:text-gray-300  p-1'>Skills</a>
          </Link>
        </nav>
      </Container>
    </header>
  )
}

export default Header