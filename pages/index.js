import Container from '../components/container'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-8">
          <h1 className="text-3xl font-bold">
            My portfolio
          </h1>
          <p>
            This portfolio is built with Next.js and a library called next-mdx.
            It allows you to write Markdown and focus on the content of your
            portfolio.
          </p>

          <h1 className="text-3xl font-bold ">作成物一覧</h1>


          <h2 className="text-2xl font-bold">・Nimble(Webチャットアプリ)</h2>
          <div className="container max-w-4xl m-auto px-4 mt-20">
            <Image
              src="/Nible.PNG"
              alt="Nimble"
              width={1920 / 2}
              height={880 / 2}
            />
          </div>
          <p>多機能チャットアプリ。チャンネルが分かれており、自分でチャンネルを作成することもできます。</p>
          <p>またスタンプも送信出来たり,Twitterでいうところのファボ💓機能に加えて</p>
          <p>画像を送れたり,ファイルの共有もできます。(多くの拡張子に対応しています)</p>
          <p>---主な使用した技術:Express/Socket.io/FirebaseRealTimeDB・Storage/JQuery/bootstrap</p>

        <h2 className="text-2xl font-bold mt-8">・ビデオチャットWebアプリ</h2>
        <p>Sky Way apiを使用したビデオチャットアプリ。</p>
        <p>Nimbleの機能として付け加えた</p>
        <p>---主な使用した技術:SkyWayAPI</p>

        </div>

      </Container>

      {/* <div className="container max-w-4xl m-auto px-4 mt-20"> */}

    </>
  )
}

export default HomePage
