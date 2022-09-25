import Container from '../components/container'
import 'tailwindcss/tailwind.css'
import Product from '../components/Product'
import Image from "next/dist/client/image";

function HomePage() {
  return (
    <>
      <Container>
        <div className="space-y-7">
          <h1 className="text-3xl font-bold mb-12">開発・制作してきたもの</h1>
          <Product name="Nimble(Webチャットアプリ)" img="/Nimble.jpg" width="960" height="500" about="多機能チャットアプリ" time="3ヶ月" people="3" role="開発・UI設計" text="ログイン機能、チャンネルが分かれており、自分でチャンネルを作成することもできます。またスタンプも送信出来たり,Twitterでいうところのファボ💓機能に加えて、画像を送れたりファイルの共有ができます。(txt,pdfなど多くの拡張子に対応しています)" tech="Express/Socket.io/FirebaseRealTimeDB・Storage・Authentication/JQuery/bootstrap" />
          <Product name="ビデオチャットWebアプリ" img="/video.jpg" width="960" height="500" about="SkyWayAPIを使用した1対1ビデオチャットアプリ" time="1週間" people="1" role="開発・UI設計" text="上のチャットアプリNimbleのビデオチャット機能として付け加えました。字幕起こしボタンを押すとリアルタイムにお互いしゃべった言葉が文字おこしされます。" tech="SkyWayAPI, Web Speech API,FirebaseRealTimeDB" />
          <Product name="HF24 ジムスタッフ業務ツールUI設計" img="/sys.jpg" width="1000" height="754" about="業務システムの設計" time="2週間" people="2" role="UI設計・開発" text="ジムのスタッフの倦怠管理、取引先法人情報、ジムの会員情報の確認などができるWEB業務システムのUI構築をしました。社内のエンジニアの方がバックエンドが構築途中の段階で、並行してUI構築を任されました。最初はCSHTMLの存在自体知りませんでしたが、ユーザーの権限ごとに表示するコンテンツを切り替えるなどの処理も行いました。" tech="CSHTML/bootstrap/CSS/JS/" />
          <Product name="FC募集ページ" img="/FC.jpg" width="1200" height="600" about="HYPERFIT24フランチャイズ募集ページの作成" time="3週間" people="1" role="デザイン・コーディング" text="アルバイトでの最初の業務にてフランチャイズ募集ページを作成しました。表示するコンテンツの選定→AdobeXDでサンプル作成→コーディングのステップを踏んで作成しました。9割がた画像のデザインも一人で作成したのですが、Adobe系ツールをガッツリ触れることができいい経験になりました。" tech="PhotoShop/Illustrator/XD/html/css/js" />
          <Product name="HYPERFIT24 LP" img="/LP.jpg" width="1200" height="1200" about="HYPERFIT24ランディングページの作成" time="2週間" people="1" role="ペルソナ設定・デザイン・コーディング" text="HYPERFIT24事業のLPを作成しました。ペルソナを設定し、アピールポイントの選定、コーディングを行いました。これはLPですが、どのサービスにおいてもペルソナを意識してサービスを作っていくので、実務でペルソナを自分で設定し、0→1を行えたのは非常にいい経験になりました。" tech="PhotoShop/Illustrator/XD/html/css/js" />
          <Product name="Instagram投稿の埋め込み" img="/ins.JPG" width="1200" height="600" about="Instagramの投稿表示" time="1週間" people="1" role="投稿埋め込み実装" text="バイトにて自社サイトはSnapwidgetという有料サービスを使ってにInstaの投稿を表示させていたので、Instagram Graph APIでの実装を行いました。作成よりも、InstaAPIの無期限トークン取得までが大変でした。" tech="HTML/CSS/JS/Instagram Graph API" />
          <Product name="ネットカフェ新サイトの作成" img="/attime.jpg" width="1200" height="600" about="ネットカフェ(@time)サイトの改修" time="2か月半" people="1" role="サイトのデザインからコーディングまですべて" text="SUNMUSICでのアルバイトにて古くなったサイトを新しく作り直すことを任せられました。競合のネットカフェサイトを研究し、サイトマップの見直しからXDでデザインを行いました。食事メニュー一覧や入荷した漫画タイトル一覧、オンラインゲームタイトル一覧などは、更新頻度が高いのでVue.jsを使って無駄のないコード+保守しやすいように設計を心掛けました。幼いころから同級生と利用したこともあり自分が携わることができ、いい経験になりました。" tech="HTML/TailwindCSS/Vue.JS/Slick" />
          <div className="bg-white rounded-lg shadow-2xl pb-8 border-2 border-gray-600">
            <h2 className="text-2xl font-bold text-center bg-black text-white py-2 mt-4">hanayume事業</h2>
            <div className="container max-w-4xl m-auto px-4 mt-10">
              <Image
                src="/hanayume.jpg"
                alt="/hanayume"
                width="1200"
                height="600"
              />
            </div>
            <div className="p-8">
              <p>【期間】2022/08/15～2023/1/31(予定)</p>
              <p>【行った業務】</p>
              <ul>
                <li>・playwrightを使ったE2Eテストの実装</li>
                <li>・WindiからTailWindCSSへの移行</li>
                <li>・結婚指輪のソート機能の実装</li>
                <li>・Svelteでのweb-componentsの実装</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default HomePage