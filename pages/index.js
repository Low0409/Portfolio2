import Container from '../components/container'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-7">


          <h1 className="text-3xl font-bold ">開発・制作してきたもの</h1>

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

{/* 
          <h2 className="text-2xl font-bold mt-8 bg-gray-500 shadow-sm text-white p-3">・グラデーションジェネレーター</h2>
          <Image
            src="/gradation.jpg"
            alt="Nimble"
            width={1920 / 2}
            height={1200 / 2}
          />
          <p>よくあるグラデーションWebアプリは多機能だけど色を自分で決めて比率を自分で調整するなどが不便です。</p>
          <p>カラー変更ボタンを押す度ランダムに色が変わり、直感でいいなと思った色を見つけられます。</p>
          <p>気が向いたら3色モードに切り替えられるようにする予定です。</p>
          <p>【使用した主な技術】:Next.js</p> */}
          <h2 className="text-2xl font-bold mt-8 bg-gray-500 shadow-sm text-white p-3">システムツール・フロントデザイン</h2>
          <Image
            src="/sys.jpg"
            alt="system"
            width={1000}
            height={754}
          />
          <p>
            【概要】:業務システムの設計<br />
            【開発期間】:1か月～<br />
            【開発人数】:2人<br />
            【開発言語】/フレームワーク:CSHTML/bootstrap/CSS/JS/<br />
            【役割】:UIの設計<br />
            【詳細】:ジムのスタッフの倦怠管理、取引先法人情報、ジムの会員情報の確認などができるWEB業務システムのUI構築をしました。社内のエンジニアの方がバックエンドが構築途中の段階で、並行してUI構築を任されました。最初はCSHTMLの存在自体知りませんでしたが、ユーザーの権限ごとに表示するコンテンツを切り替えるなどの処理も行いました。
          </p>


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

          <h2 className="text-2xl font-bold mt-8 bg-gray-500 shadow-sm text-white p-3">Instagram Graph API</h2>
          <Image
            src="/ins.JPG"
            alt="Instagram"
            width={1200}
            height={600}
          />
          <p>【概要】:Instagramの投稿表示<br />
            【開発期間】1週間<br />
            【開発人数】:1人<br />
            【開発言語】/フレームワーク:HTML/CSS/JS/<br />
            【役割】:投稿埋め込み実装<br />
            【詳細】:バイトにて自社サイトはSnapwidgetという有料サービスを使ってにInstaの投稿を表示させていたので、Instagram Graph APIでの実装を行いました<br />
            【開発秘話】:作成よりも、InstaAPIの無期限トークン取得までが大変でした。</p>
          <h2 className="text-2xl font-bold mt-8 bg-gray-500 shadow-sm text-white p-3">古くなった自社サイトの作り直し(現在作成中)</h2>

          <Image
            src="/attime.jpg"
            alt="time"
            width={1200}
            height={600}
            class="mb-2"
          />

          <p>【概要】:ネットカフェ(@time)サイトの改修<br />
            【開発期間】(予定):2か月<br />
            【開発人数】:1人<br />
            【開発言語】/フレームワーク:HTML/TailwindCSS/Vue.JS<br />
            【役割】:サイトのデザインからコーディングまですべて<br />
            【詳細】:バイトにて古くなったサイトを新しく作り直すことを任せられました。競合のネカフェサイトを研究し、サイトマップの見直しからXDでデザイン(現在コーディング中)。食事メニュー一覧や入荷した漫画タイトル一覧、オンラインゲームタイトル一覧などは、更新頻度が高いのでVue.jsを使って無駄のないコード+保守しやすいように設計を心掛けています。<br/>
            【開発秘話】:テーブルレイアウトで作られているぐらい古いサイトです。Next.jsで作成したかったのですが、後の保守人材の確保が難しいのと旧サイトを塗り替える必要があるのでデプロイうまくできるか懸念が残るため断念しました。</p>
        </div>
      </Container>
    </>
  )
}

export default HomePage