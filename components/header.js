import Link from 'next/link'
import Container from '../components/container'

function Header() {
  return (
    <header className="py-6">
      <Container>
        <nav className="flex space-x-5">
          <Link href="/">
            <a className='hover:bg-gray-200 p-1'>Top</a>
          </Link>

            <a className='hover:bg-gray-200  p-1' href='//relife-campus.com'>技術ブログ</a>
          <a className='hover:bg-gray-200  p-1' href='//github.com/Low0409'>GitHub</a>
          <Link href="/Skill">
            <a className='hover:bg-gray-200  p-1'>触れたことがある技術</a>
          </Link>
        </nav>
      </Container>
    </header>
  )
}

export default Header