import Link from 'next/link'
import Container from '../components/container'

function Header() {
  return (
    <header className="py-6">
      <Container>
        <nav className="flex space-x-4">
          <Link href="/">
            <a>Top</a>
          </Link>

            <a href='//relife-campus.com'>WordPress</a>
          <a href='//github.com/Low0409'>GitHub</a>
        </nav>
      </Container>
    </header>
  )
}

export default Header
