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
            This portfolio is built with Next.js.
          </p>

          <h1 className="text-3xl font-bold ">制作してきたもの</h1>

          <h2 className="text-2xl font-bold bg-gray-500 shadow-sm text-white p-3">・Nimble(Webチャットアプリ)</h2>
          <div className="container max-w-4xl m-auto px-4 mt-20">
            <Image
              src="/Nimble.jpg"
              alt="Nimble"
              width={1920 / 2}
              height={1000 / 2}
            />
          </div>
          <p>多機能チャットアプリ。ログイン機能、チャンネルが分かれており、自分でチャンネルを作成することもできます。</p>
          <p>またスタンプも送信出来たり,Twitterでいうところのファボ💓機能に加えて、画像を送れたり</p>
          <p>ファイルの共有ができます。(txt,pdfなど多くの拡張子に対応しています)</p>
          <p>【使用した主な技術】:Express/Socket.io/FirebaseRealTimeDB・Storage・Authentication/JQuery/bootstrap</p>

          <h2 className="text-2xl font-bold mt-8 bg-gray-500 shadow-sm text-white p-3">・ビデオチャットWebアプリ</h2>
          <Image
            src="/video.jpg"
            alt="NimbleVideo"
            width={1920 / 2}
            height={1000 / 2}
          />
          <p>SkyWayAPIを使用した1対1ビデオチャットアプリです。</p>
          <p>上のチャットアプリNimbleのビデオチャット機能として付け加えました。字幕起こしボタンを押すとリアルタイムにお互いしゃべった言葉が文字おこしされます。</p>
          <p>【使用した主な技術】:SkyWayAPI, Web Speech API,FirebaseRealTimeDB</p>


          <h2 className="text-2xl font-bold mt-8 bg-gray-500 shadow-sm text-white p-3">・グラデーションジェネレーター</h2>
          <a href="https://gradation-app.vercel.app/" class='text-blue-600 hover:text-blue-400'>デプロイしてます https://gradation-app.vercel.app/</a>
          <Image
            src="/gradation.jpg"
            alt="Nimble"
            width={1920 / 2}
            height={1200 / 2}
          />
          <p>よくあるグラデーションWebアプリは多機能だけど色を自分で決めて比率を自分で調整するなどが不便です。</p>
          <p>カラー変更ボタンを押す度ランダムに色が変わり、直感でいいなと思った色を見つけられます。</p>
          <p>気が向いたら3色モードに切り替えられるようにする予定です。</p>
          <p>【使用した主な技術】:Next.js</p>
          <h2 className="text-2xl font-bold mt-8 bg-gray-500 shadow-sm text-white p-3">システムツール・フロントデザイン</h2>
          <Image
            src="/sys.jpg"
            alt="system"
            width={1000}
            height={754}
          />
          <p>アルバイトでの業務にて自社のシステムツールを作成しました。</p>
          <p>バックエンドはSEの方がを構築中の段階で、同時進行で私はUI設計を任されました。</p>
          <p>できるだけ無駄な要素は加えず、シンプルさとユーザビリティ重視でUI設計しました。</p>
          <p>謎に空いているスペースは権限によって閲覧できるコンテンツが変わるためです。</p>

          <h2 className="text-2xl font-bold mt-8 bg-gray-500 shadow-sm text-white p-3">FC募集ページ</h2>
          <a href="https://www.alltimefitness.jp/franchise/index.html" class='text-blue-600 hover:text-blue-400'>https://www.alltimefitness.jp/franchise/index.html</a>
          <Image
            src="/FC.jpg"
            alt="FC"
            width={1200}
            height={600}
          />
          <p>アルバイトでの最初の業務にてフランチャイズ募集ページを作成しました。</p>
          <p>表示するコンテンツの選定→AdobeXDでサンプル作成→コーディングのステップを踏んで作成しました。</p>
          <p>9割がた画像のデザインも一人で作成したのですが、Adobe系ツールをガッツリ触れることができたので良かったです</p>

          <h2 className="text-2xl font-bold mt-8 bg-gray-500 shadow-sm text-white p-3">Instagram</h2>
          <Image
            src="/insta3.jpg"
            alt="FC"
            width={1200}
            height={600}
          />
          <p>アルバイトでの最初の業務にてInstagram Graph APIでの投稿表示を作成しました。</p>
          <p>今まではSnapWidgetという有料サービスで投稿を表示していましたが、</p>
          <p>各店舗ページを合わせると70以上あることもあり、コストがかかるということで、APIでの表示を実装しました。</p>
        </div>
      </Container>
    </>
  )
}

export default HomePage