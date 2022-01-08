import Container from '../components/container'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-7">
          <h1 className="text-3xl font-bold bg-gray-500 shadow-sm text-white p-3">
            My portfolio
          </h1>
          <p>
            This portfolio is built with Next.js and a library called next-mdx.
            It allows you to write Markdown and focus on the content of your
            portfolio.
          </p>

          <h1 className="text-3xl font-bold ">制作してきたもの</h1>


          <h2 className="text-2xl font-bold bg-gray-500 shadow-sm text-white p-3">・Nimble(Webチャットアプリ)</h2>
          <div className="container max-w-4xl m-auto px-4 mt-20">
            <Image
              src="/Nible.PNG"
              alt="Nimble"
              width={1920 / 2}
              height={1000 / 2}
            />
          </div>
          <p>多機能チャットアプリ。ログイン機能、チャンネルが分かれており、自分でチャンネルを作成することもできます。</p>
          <p>またスタンプも送信出来たり,Twitterでいうところのファボ💓機能に加えて、画像を送れたり</p>
          <p>ファイルの共有ができます。(txt,pdfなど多くの拡張子に対応しています)</p>
          <p>【使用した主な技術】:Express/Socket.io/FirebaseRealTimeDB・Storage/JQuery/bootstrap</p>

        <h2 className="text-2xl font-bold mt-8 bg-gray-500 shadow-sm text-white p-3">・ビデオチャットWebアプリ</h2>
        <p>SkyWayAPIを使用したビデオチャットアプリです。</p>
        <p>上のチャットアプリNimbleのビデオチャット機能として付け加えました。</p>
        <p>【使用した主な技術】:SkyWayAPI</p>


        <h2 className="text-2xl font-bold mt-8 bg-gray-500 shadow-sm text-white p-3">・グラデーションジェネレーター</h2>
        <a href="https://gradation-app.vercel.app/">デプロイしてます https://gradation-app.vercel.app/</a>
        <Image
              src="/gradation.PNG"
              alt="Nimble"
              width={1920 / 2}
              height={1200 / 2}
            />
            <p>よくあるグラデーションWebアプリは多機能だけど色を自分で決めて比率を自分で調整するなどが不便です。</p>
            <p>カラー変更ボタンを押す度ランダムに色が変わり、直感でいいなと思った色を見つけられます。</p>
            <p>気が向いたら3色に切り替えられるようにしたいと思います。</p>
            <p>【使用した主な技術】:Next.js</p>


        </div>

      </Container>

      {/* <div className="container max-w-4xl m-auto px-4 mt-20"> */}

    </>
  )
}

export default HomePage