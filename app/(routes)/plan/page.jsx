import styles from "./plan-page.module.scss";
import Container from "@/app/_components/common/container/container";
import SubMv from "@/app/_components/common/sub-mv/sub-mv";
import PlanOverview from "@/app/_components/plan/plan-overview/plan-overview";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import logoGa from "/public/images/common/logo-ga.svg";
import logoSc from "/public/images/common/logo-sc.svg";
import logoGm from "/public/images/common/logo-gm.svg";
import logoGc from "/public/images/common/logo-gc.svg";
import logoSnsTimeline from "/public/images/common/logo-sns-timeline.svg";
import logoFavicon from "/public/images/common/logo-favi.svg";
import logoRevision from "/public/images/common/logo-revision.svg";
import logoAddPage from "/public/images/common/logo-add-page.svg";
import logoAddSection from "/public/images/common/logo-add-section.svg";
import logoCms from "/public/images/common/logo-cms.svg";
import logoCf from "/public/images/common/logo-cf.svg";
import logoAddForm from "/public/images/common/logo-add-form.svg";
import logoSnsApi from "/public/images/common/logo-sns-api.svg";
import logoBtnAnimFree from "/public/images/common/logo-btn-anim-free.svg";
import logoLoading from "/public/images/common/logo-loading.svg";
import logoSimpleSlider from "/public/images/common/logo-simple-slider.svg";
import logoHamburgerMenu from "/public/images/common/logo-hamburger-menu.svg";
import logoAccordion from "/public/images/common/logo-accordion.svg";
import logoFadein from "/public/images/common/logo-fadein.svg";
import logoSliderAdvanced from "/public/images/common/logo-slider-advanced.svg";
import logoBtnAnimAdvanced from "/public/images/common/logo-btn-anim-advanced.svg";
import logoCustomAnimation from "/public/images/common/logo-custom-animation.svg";
import Simulator from "@/app/_components/common/simulator/simulator";
import { PLAN_METADATA } from "@/app/_data/metadata";
import { outputMetadata } from "@/app/_utils/outputMetadata";

export const metadata = outputMetadata(PLAN_METADATA.title, PLAN_METADATA.description, PLAN_METADATA.slug);

export default function PlanPage() {
  return (
    <main className={styles.main}>
      <SubMv jpTitle="料金プラン" enTitle="PLANS" breadcrumbPaths={[{ name: "料金プラン" }]} hasBorder />

      <div className={styles.body}>
        <Container>
          <section className={styles.overview}>
            <h2 className={styles.secTitle} data-en="PLAN OVERVIEW">
              料金プラン概要
            </h2>
            <p className={styles.overviewText}>
              ホームページの機能や規模に合わせて、3つのプランからお選びいただけます。
            </p>
            <PlanOverview />
          </section>

          <section className={styles.detail}>
            <h2 className={styles.secTitle} data-en="DETAILS">
              料金プラン詳細
            </h2>

            {/* <p className={styles.detailText}>全プラン共通で、料金に含まれている</p> */}

            <div className={styles.detailList}>
              <div className={styles.detailItem}>
                <h3>制作ページ数</h3>

                <p>
                  プランごとに制作可能なページ数を設定しています。ページ数の追加は有料オプションにて対応可能です。ページ内のコンテンツは、TOPページは6セクションまで、その他のページは3セクションまで制作します。
                  <small>
                    ※ページの追加はBasicプラン、CMSプランのみご利用いただけます。
                    <br />
                    ※セクションとは、見出しとコンテンツから構成される1つのブロックのことです。セクション追加は有料オプションにて全プランで対応可能です。
                  </small>
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>画像・テキスト修正</h3>

                <p>
                  プランごとに月に何回までの画像・テキスト修正が可能かを設定しています。修正の依頼は公式LINE、もしくは当サイトのお問い合わせフォームからご連絡ください。1回につき約30分程度の作業工数を想定しています。修正回数の上限を超える場合は有料オプションにて対応可能です。
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>オリジナルデザイン</h3>
                <p>
                  当サービス独自のデザインシステムで、オリジナルデザインを制作します。デザインの王道パターンを取り入れた100種類以上ものパーツを組み合わせて制作しますので、高いユーザービリティを保ったままデザイン性に優れたホームページを制作します。
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>レスポンシブ対応</h3>
                <p>
                  PCだけでなく、スマートフォンやタブレット端末にも対応したレスポンシブデザインを制作します。どのデバイスからでも快適に閲覧できるため、ユーザーエクスペリエンスが向上し、SEO対策としても有効です。
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>ドメイン無料</h3>
                <p>
                  ホームページのドメインを無料で取得します。取得後の管理も弊社で行いますので、お客様はドメインの更新や管理について気にする必要がありません。
                  <br />
                  <small>
                    ※.comや.jpなどの、ドメインの年間費用が2,000円以下のものに限ります。それ以上の費用がかかる場合は、差額をお支払いいただきます。
                  </small>
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>SEO対策</h3>
                <p>
                  ホームページを検索エンジンの上位に表示させるための対策を行います。メタタグやOGPの設定、サイトマップの作成など、基本的なSEO対策を行います。また、適切なHTML構造、タグの使用を徹底し、検索エンジンに最適化されたホームページを制作します。
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>お問い合わせフォーム</h3>
                <p>
                  製品やサービスなどに関する質問など、ホームページを訪れたお客様からのお問い合わせを受け付けるフォームを設置します。お問い合わせ以外にも、アンケートや資料請求など幅広い用途に利用可能で、ホームページには欠かせない機能です。
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>高速サーバー / セキュリティ対策</h3>
                <p>
                  当サービスでは、高いセキュリティ性と高速表示が特徴的な、Jamstackという技術構成を採用しています。サーバーの負荷を軽減し、高速表示を実現するとともに、SSL証明書の設定やセキュリティ対策を徹底して行います。
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>公開後サポート</h3>
                <p>
                  ホームページ公開後も、お客様のご要望に応じて修正や更新を行います。また、ホームページに関するご質問や、CMSの使用方法のサポート等もチャットにて対応しておりますので、お気軽にご連絡ください。
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>お知らせ / ブログ等の更新機能</h3>
                <p>
                  お知らせやブログなど、お客様自身で更新可能な機能を実装します。これら以外にも「実績紹介」や「製品情報」など、お客様のご要望に合わせた更新機能を作成可能です。
                  <small>※CMSプランでのみご利用いただけます。</small>
                </p>
              </div>
            </div>
          </section>

          <section className={styles.option} id="option">
            <h2 className={styles.secTitle} data-en="OPTIONS">
              追加オプション
            </h2>

            <div className={styles.optionText}>
              <p>
                プランごとに利用できるオプション一覧です。
                <br />
                オプションの追加はホームページ公開後でも可能ですので、お気軽にご相談ください。
              </p>
            </div>

            <div className={styles.tableWrap}>
              <div className={styles.table}>
                <div className={styles.headRow}>
                  <div className={styles.headCell}></div>
                  <div className={styles.headCell}>Minimal</div>
                  <div className={styles.headCell}>Basic</div>
                  <div className={styles.headCell}>CMS</div>
                </div>

                <div className={styles.catRow}>
                  <span>無料オプション</span>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoGa} alt="Google Analytics" />
                      </div>
                      <span className={styles.optionTitle}>Google Analytics導入代行</span>
                    </div>
                    <p className={styles.optionExp}>ホームページへのアクセス数や流入元などを解析するツールです。</p>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoSc} alt="Google Search Console" />
                      </div>
                      <span className={styles.optionTitle}>Google Search Console導入代行</span>
                    </div>
                    <p className={styles.optionExp}>
                      ホームページの検索順位やクリック数などを分析するためのツールです。
                    </p>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoFavicon} alt="ファビコン作成・設置" />
                      </div>
                      <span className={styles.optionTitle}>ファビコン作成・設置</span>
                    </div>
                    <p className={styles.optionExp}>ホームページのシンボルとなるアイコンを作成・設置します。</p>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoGm} alt="Google Maps" />
                      </div>
                      <span className={styles.optionTitle}>Google Map埋め込み</span>
                    </div>
                    <p className={styles.optionExp}>店舗や会社の所在地を表示するマップをホームページ内に設置します。</p>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoGc} alt="Google Calendar" />
                      </div>
                      <span className={styles.optionTitle}>Google Calendar埋め込み</span>
                    </div>
                    <p className={styles.optionExp}>
                      予定やイベントのスケジュールを表示するカレンダーをホームページ内に設置します。
                    </p>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoSnsTimeline} alt="SNS読み込み" />
                      </div>
                      <span className={styles.optionTitle}>SNS埋め込み</span>
                    </div>
                    <p className={styles.optionExp}>
                      Instagram・X(Twitter)・Facebookなどのタイムラインをホームページ内に設置します。
                    </p>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={`${styles.catRow} ${styles.hasMt}`}>
                  <span>有料オプション</span>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoRevision} alt="画像・テキスト修正の追加" />
                      </div>
                      <span className={styles.optionTitle}>画像・テキスト修正の追加</span>
                    </div>

                    <span className={styles.optionPrice}>
                      <span>3,000</span>円<small>(税込)</small> / 1回
                    </span>
                    <p className={styles.optionExp}>
                      各プランの画像・テキスト修正回数の上限以上に修正が必要な場合は、1回分ずつ追加可能です。
                    </p>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoAddPage} alt="ページ追加" />
                      </div>
                      <span className={styles.optionTitle}>ページ追加</span>
                    </div>
                    <span className={styles.optionPrice}>
                      <span>15,000</span>円<small>(税込)</small> / 1P
                    </span>
                    <p className={styles.optionExp}>
                      各プランのページ数上限以上のページが必要な場合は、ページを追加可能です。
                    </p>
                  </div>
                  <div className={styles.cell}>
                    <span className={styles.bar}></span>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoAddSection} alt="セクション追加" />
                      </div>
                      <span className={styles.optionTitle}>セクション追加</span>
                    </div>
                    <span className={styles.optionPrice}>
                      <span>3,000</span>円<small>(税込)</small> / 1つ
                    </span>
                    <p className={styles.optionExp}>
                      ページ内にコンテンツを追加したい場合は、セクションを追加可能です。
                      <br />
                      ※TOPページ：6セクションまで無料
                      <br />
                      ※下層ページ：3セクションまで無料
                    </p>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoCms} alt="お客様更新機能（投稿タイプ）の追加" />
                      </div>
                      <span className={styles.optionTitle}>お客様更新機能（投稿タイプ）の追加</span>
                    </div>
                    <span className={styles.optionPrice}>
                      <span>30,000</span>円<small>(税込)</small> / 1つ
                    </span>
                    <p className={styles.optionExp}>
                      お知らせやブログの他に、「商品情報」や「物件情報」など、お客様が希望する更新可能なシステムを追加します。
                    </p>
                  </div>
                  <div className={styles.cell}>
                    <span className={styles.bar}></span>
                  </div>
                  <div className={styles.cell}>
                    <span className={styles.bar}></span>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoCf} alt="お客様更新機能（カスタムフィールド）の追加" />
                      </div>
                      <span className={styles.optionTitle}>お客様更新機能（カスタムフィールド）の追加</span>
                    </div>

                    <span className={styles.optionPrice}>
                      <span>2,000</span>円<small>(税込)</small> / 1つ
                    </span>
                    <p className={styles.optionExp}>
                      ホームページ内の画像やテキストをお客様自身で更新可能にするカスタムフィールドを追加します。
                    </p>
                  </div>
                  <div className={styles.cell}>
                    <span className={styles.bar}></span>
                  </div>
                  <div className={styles.cell}>
                    <span className={styles.bar}></span>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoAddForm} alt="フォーム追加" />
                      </div>
                      <span className={styles.optionTitle}>フォーム追加</span>
                    </div>
                    <span className={styles.optionPrice}>
                      <span>30,000</span>円<small>(税込)</small> / 1つ
                    </span>
                    <p className={styles.optionExp}>
                      お問い合わせフォーム以外に、資料請求やエントリーフォームなど、お客様が希望するフォームを追加します。
                      <br />
                      ※フォームは全プランで1つまで無料です。
                    </p>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoSnsApi} alt="SNS連携（API）" />
                      </div>
                      <span className={styles.optionTitle}>SNS連携（API）</span>
                    </div>
                    <span className={styles.optionPrice}>
                      <span>30,000</span>円<small>(税込)</small> / 1つ
                    </span>
                    <p className={styles.optionExp}>
                      ホームページ内にSNSの投稿を表示する機能を追加します。iframe埋め込みよりも自由度の高いデザインが可能です。
                    </p>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={`${styles.catRow} ${styles.hasMt}`}>
                  <span>無料アニメーション</span>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoHamburgerMenu} alt="ハンバーガーメニュー" />
                      </div>
                      <span className={styles.optionTitle}>ハンバーガーメニュー</span>
                    </div>
                    <p className={styles.optionExp}>
                      クリックすると、ナビゲーションメニューが表示される機能です。スクロール追従も無料で実装可能です。
                    </p>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoBtnAnimFree} alt="シンプルなボタンアニメーション" />
                      </div>
                      <span className={styles.optionTitle}>シンプルなボタンアニメーション</span>
                    </div>
                    <p className={styles.optionExp}>
                      ボタンにマウスカーソルを当てた時のアニメーションを実装します。色の反転や透明度を下げるなど、シンプルな動きに限ります。
                    </p>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoSimpleSlider} alt="シンプルな画像スライダー" />
                      </div>
                      <span className={styles.optionTitle}>シンプルな画像スライダー</span>
                    </div>
                    <p className={styles.optionExp}>複数の画像やコンテンツをスライドショー形式で表示する機能です。</p>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoAccordion} alt="アコーディオン" />
                      </div>
                      <span className={styles.optionTitle}>アコーディオン</span>
                    </div>
                    <p className={styles.optionExp}>
                      クリックすると中身の要素が展開される機能です。Q&Aや説明文など、コンテンツを省スペースで表示するのに便利です。
                    </p>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={`${styles.catRow} ${styles.hasMt}`}>
                  <span>有料アニメーション</span>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoLoading} alt="ローディングアニメーション" />
                      </div>
                      <span className={styles.optionTitle}>ローディングアニメーション</span>
                    </div>
                    <span className={styles.optionPrice}>
                      <span>5,000</span>円<small>(税込)</small> / 1つ
                    </span>
                    <p className={styles.optionExp}>ページの読み込み中に表示するアニメーションです。</p>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoFadein} alt="フェードインアニメーション" />
                      </div>
                      <span className={styles.optionTitle}>フェードインアニメーション</span>
                    </div>
                    <span className={styles.optionPrice}>
                      <span>3,000</span>円<small>(税込)</small> / 1種
                    </span>
                    <p className={styles.optionExp}>
                      スクロールで要素が画面内に入ると、対象に動きを付けて表示するアニメーションです。
                    </p>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoBtnAnimAdvanced} alt="高度なボタンアニメーション" />
                      </div>
                      <span className={styles.optionTitle}>高度なボタンアニメーション</span>
                    </div>
                    <span className={styles.optionPrice}>
                      <span>3,000</span>円<small>(税込)</small> / 1種
                    </span>
                    <p className={styles.optionExp}>
                      マウスカーソルを当てるとテキストが変化したり、アイコンが動いたりなど、高度なボタンアニメーションを実装します。
                    </p>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoSliderAdvanced} alt="高度な画像スライダー" />
                      </div>
                      <span className={styles.optionTitle}>高度な画像スライダー</span>
                    </div>
                    <span className={styles.optionPrice}>
                      <span>5,000</span>円<small>(税込)</small> / 1種
                    </span>
                    <p className={styles.optionExp}>
                      サムネイル付き画像スライダーや、モーダル連動スライダーなど、高度なスライダーを実装します。
                    </p>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.infoCell}>
                    <div className={styles.infoHead}>
                      <div className={styles.optionIcon}>
                        <Image src={logoCustomAnimation} alt="その他カスタムアニメーション" />
                      </div>
                      <span className={styles.optionTitle}>その他カスタムアニメーション</span>
                    </div>
                    <span className={styles.optionPrice}>
                      <span>要相談</span>
                    </span>
                    <p className={styles.optionExp}>
                      ご要望に合わせて、カスタムアニメーションを実装します。上記以外のアニメーションをご希望でしたら、お気軽にご相談ください。
                    </p>
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                  <div className={styles.cell}>
                    <FaCheck />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.simulator} id="simulator">
            <h2 className={styles.secTitle} data-en="PRICE SIMULATOR">
              料金シミュレーター
            </h2>

            <Simulator />
          </section>
        </Container>
      </div>
    </main>
  );
}
