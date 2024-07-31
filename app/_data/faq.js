import Link from "next/link";

export const FAQ_CAT_DATA = [
  {
    id: "dev",
    name: "制作について",
  },
  {
    id: "service",
    name: "サービス内容について",
  },
  {
    id: "contract",
    name: "ご契約・解約について",
  },
];

export const FAQ_SUB_CAT_DATA = [
  // 制作について
  {
    parendId: "dev",
    id: "plan",
    name: "相談・企画段階",
  },
  {
    parendId: "dev",
    id: "design",
    name: "デザイン",
  },
  {
    parendId: "dev",
    id: "scope",
    name: "対応内容・範囲",
  },
  {
    parendId: "dev",
    id: "sns",
    name: "SNS",
  },
  {
    parendId: "dev",
    id: "domain",
    name: "ドメイン",
  },
  {
    parendId: "dev",
    id: "server",
    name: "サーバー",
  },
  // サービス内容について
  {
    parendId: "service",
    id: "option",
    name: "オプション",
  },
  {
    parendId: "service",
    id: "seo",
    name: "SEO対策",
  },
  // ご契約・解約について
  {
    parendId: "contract",
    id: "agreement",
    name: "ご契約",
  },
  {
    parendId: "contract",
    id: "cancellation",
    name: "解約",
  },
];

export const FAQ_DATA = [
  {
    categoryId: "dev",
    subCategoryId: "plan",
    question: "制作期間はどのくらいかかりますか？",
    answer: <>プランや追加オプションの内容にもよりますが、約2週間~1ヶ月を想定しています。</>,
    inTopPage: false,
  },
  {
    categoryId: "dev",
    subCategoryId: "plan",
    question: "ホームページを制作するにあたり、準備するものはありますか？",
    answer: (
      <>
        ホームページに掲載するコンテンツをご用意いただきます。商品説明や会社説明といったテキスト情報や、ロゴデータ、商品の画像などをご用意ください。パンフレットや営業資料などがあればご提示ください。
      </>
    ),
    inTopPage: false,
  },
  {
    categoryId: "dev",
    subCategoryId: "plan",
    question: "ホームページの内容は、自分で考えるのでしょうか？",
    answer: <>各ページコンテンツの枠組み・流れを作成するので、そこにはめ込むコンテンツをご用意いただきます。</>,
    inTopPage: false,
  },
  // // デザイン
  {
    categoryId: "dev",
    subCategoryId: "design",
    question: "デザインの要望はどのように伝えれば良いでしょうか？",
    answer: (
      <>
        初回面談・ヒアリング時にデザインのご要望を詳細にお伺いします。基本的にはロゴやお好みの色など参考にベースカラーを作成します。デザインを参考にしたいホームページがあれば何個かピックアップして面談時にご提示いただけるとスムーズです。
      </>
    ),
    inTopPage: false,
  },
  {
    categoryId: "dev",
    subCategoryId: "design",
    question: "ホームページのデザインは、何パターンか案を出してもらえますか？",
    answer: (
      <>
        申し訳ございませんが、基本的にはデザイン案は1案のみです。微調整は可能ですのでお申し付けください。デザイン(2案目)および大幅な修正は、別途追加料金がかかる場合がございます。
      </>
    ),
    inTopPage: false,
  },
  {
    categoryId: "dev",
    subCategoryId: "design",
    question: "初稿後のデザインの修正は何回まで対応していただけますか？",
    answer: (
      <>
        修正対応回数は2回です。それ以上の修正対応は別途追加料金をいただきます。大幅な修正は、別途追加料金がかかる場合がございます。
      </>
    ),
    inTopPage: false,
  },
  // // 対応内容・範囲
  {
    categoryId: "dev",
    subCategoryId: "scope",
    question: "1ページ内の制作量の制限はありますか？",
    answer: (
      <>
        TOPページなら6セクションまで、その他のページは3セクションまでという制限を設けています。セクションの追加は有料オプションにて対応可能です。
        <br />
        ※セクションとは、見出しとコンテンツから構成される1つのブロックのことです。
      </>
    ),
    inTopPage: false,
  },
  {
    categoryId: "dev",
    subCategoryId: "scope",
    question: "ホームページ公開後にオプションを追加することはできますか？",
    answer: (
      <>
        公開後のオプション追加も可能ですので、お気軽にご相談ください。オプションによっては、プラン変更が必要な場合がございます。詳しくは
        <Link href="/plan#option">料金プランの追加オプション</Link>をご確認ください。
      </>
    ),
    inTopPage: false,
  },
  {
    categoryId: "dev",
    subCategoryId: "scope",
    question: "お問い合わせフォーム設置は月額料金に含まれていますか？",
    answer: (
      <>
        はい、すべてのプランでお問い合わせフォームを無料で1つまで設置いたします。
        <br />
        フォームを1つ以上設置したい場合は、追加オプションにて対応可能です。
      </>
    ),
    inTopPage: false,
  },
  {
    categoryId: "dev",
    subCategoryId: "scope",
    question: "お知らせ（ブログ）機能を入れることはできますか？",
    answer: <>CMSプランをご契約いただくことで、ご利用可能です。</>,
    inTopPage: false,
  },
  {
    categoryId: "dev",
    subCategoryId: "scope",
    question: "ブログ記事の数はページ数に含まれますか？",
    answer: (
      <>
        ブログ記事はプラン毎のページ数制限には含まれません。お客様がブログ記事を新たに追加しても、追加料金を請求することはありませんのでご安心ください。
      </>
    ),
    inTopPage: false,
  },
  {
    categoryId: "dev",
    subCategoryId: "scope",
    question: "ロゴも作ってもらえますか？",
    answer: <>申し訳ございません。ロゴの制作は対応しかねます。ロゴはお客様にご用意をお願いしております。</>,
    inTopPage: false,
  },
  {
    categoryId: "dev",
    subCategoryId: "scope",
    question: "ホームページ公開後も修正してもらうことはできますか？",
    answer: (
      <>
        ホームページ公開後は、Minimalプランなら月1回まで、Basicプラン、CMSプランなら月3回までの修正対応が可能です。修正対応回数を超える場合は、別途追加料金をいただきます。
      </>
    ),
    inTopPage: false,
  },
  // // SNS
  {
    categoryId: "dev",
    subCategoryId: "sns",
    question: "SNSをやっていますが、ホームページにも表示できますか？",
    answer: (
      <>
        可能です。タイムラインの埋め込み等は無料で対応いたします。SNSとのAPI連携が必要な場合は、有料の追加オプションで対応いたします。
      </>
    ),
    inTopPage: false,
  },
  // // ドメイン
  {
    categoryId: "dev",
    subCategoryId: "domain",
    question: "ドメインは無料ですか？",
    answer: (
      <>
        はい、無料で独自ドメインをご利用いただけます。ただし、年間2,000円以上の独自ドメインを取得する場合は、ドメイン利用料をお客様にご負担いただきます。
      </>
    ),
    inTopPage: false,
  },
  {
    categoryId: "dev",
    subCategoryId: "domain",
    question: "ドメインを持っているのですが、ホームページ制作に使用してもらうことはできますか？",
    answer: <>はい、お客様がすでにお持ちのドメインをご利用いただけます。</>,
    inTopPage: false,
  },
  // // サーバー
  {
    categoryId: "dev",
    subCategoryId: "server",
    question: "自身で所有しているサーバーを使用することはできますか？",
    answer: (
      <>申し訳ございません。サーバーに関しましては、弊サービスの所有するサーバーにて管理・運用させていただきます。</>
    ),
    inTopPage: false,
  },
  // サービスについて
  {
    categoryId: "service",
    subCategoryId: "option",
    question: "オプションは月額ですか？",
    answer: <>いいえ。オプションは一度お支払いいただく事で、ご契約中はずっとご利用いただけます。</>,
    inTopPage: false,
  },
  {
    categoryId: "service",
    subCategoryId: "option",
    question: "追加オプション表にはない機能を追加することはできますか？",
    answer: (
      <>
        まずは詳細をお知らせいただければ、対応可能かどうかを検討いたします。工数によっては追加料金が発生する場合がございます。
      </>
    ),
    inTopPage: false,
  },
  // // SEO対策
  {
    categoryId: "service",
    subCategoryId: "seo",
    question: "SEO対策にはどんな内容が含まれていますか？",
    answer: (
      <>
        以下の内容が含まれます。
        <br />
        ・メタディスクリプション・OGP設定
        <br />
        ・最適なHTMLタグの使用
        <br />
        ・画像最適化
        <br />
        ・サイトの軽量化
        <br />
        ・レスポンシブデザイン
        <br />
        ・サーチコンソールの登録・インデックス申請
      </>
    ),
    inTopPage: false,
  },
  // ご契約・解約について
  {
    categoryId: "contract",
    subCategoryId: "agreement",
    question: "契約期間はどうなっていますか？",
    answer: <>1ヶ月契約、1年契約からお選びいただけます。</>,
    inTopPage: false,
  },
  {
    categoryId: "contract",
    subCategoryId: "agreement",
    question: "契約後に料金プランを変更することはできますか？",
    answer: <>はい、可能です。</>,
    inTopPage: false,
  },
  {
    categoryId: "contract",
    subCategoryId: "agreement",
    question: "期間限定のLPを制作したいのですが、契約可能ですか？",
    answer: (
      <>
        申し訳ございません。弊サービスは末長くお使いいただくことを前提としておりますので、あらかじめご利用期間が決まっている場合は、お断りさせていただいております。
      </>
    ),
    inTopPage: false,
  },
  {
    categoryId: "contract",
    subCategoryId: "cancellation",
    question: "サービス解約後も、ホームページを使うことができますか？",
    answer: (
      <>
        申し訳ございません。サービス解約後はホームページを停止させていただきます。ただし、お客様自身で追加されたページのデータや画像についてはお渡し可能です。
      </>
    ),
    inTopPage: false,
  },
  {
    categoryId: "contract",
    subCategoryId: "cancellation",
    question: "解約する場合に違約金は発生しますか？",
    answer: (
      <>
        いいえ、違約金は発生しませんので、いつでも解約可能です。ただし、月払いの場合は解約申込をした月の翌月分の費用が発生します。
        <br />
        また、年払いの場合に関しては、お支払い後の返金はできませんのでご了承ください。
      </>
    ),
    inTopPage: false,
  },
  {
    categoryId: "contract",
    subCategoryId: "cancellation",
    question: "解約した場合、独自ドメインを移管して利用できますか？",
    answer: <>はい、ご利用いただけます。ご連絡いただき次第、ドメイン移管の手続きを行います。</>,
    inTopPage: false,
  },
];
