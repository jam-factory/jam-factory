import SubMv from "@/app/_components/common/sub-mv/sub-mv";
import styles from "./faq-page.module.scss";
import Container from "@/app/_components/common/container/container";
import AccordionList from "@/app/_components/common/accordion-list/accordion-list";
import { FAQ_METADATA } from "@/app/_data/metadata";
import { outputMetadata } from "@/app/_utils/outputMetadata";

const data = [
  {
    question: "テンプレートデザインとはどういうことですか？",
    answer: (
      <>
        <p>
          Webサイトによく使用されるセクションや機能などを部品化し、それを組み合わせてページを作成することです。シンプルプラン・ベーシックプランをご希望の場合は、この方法でWebサイトを制作させていただくことになります。全く同じデザインを流用するのではなく、サイトに合わせて色や形など微調整することは可能です。
        </p>
      </>
    ),
  },
  {
    question: "自身でデザインの変更をしたいのですが、可能ですか？",
    answer: (
      <>
        <p>仕様上お客様が操作できるのは投稿の編集・更新のみですので、デザインを変更することはできません。</p>
        <p>
          Webサイト公開後にデザインの修正をご希望の場合は、保守管理・運用のプランに入会いただくことを推奨しております。
        </p>
      </>
    ),
  },
  {
    question: "保守管理・運用のプランの契約期間はどのくらいですか？",
    answer: (
      <>
        <p>最低1年間の契約とさせていただいております。</p>
      </>
    ),
  },
  {
    question: "保守管理・運用は必要ないので、Webサイトの制作のみをお願いできますか？",
    answer: (
      <>
        <p>
          Webサイトの制作のみでも対応可能です。この場合、Webサイトの公開はお客様自身で行なっていただく必要があります。また、デザインの変更やページの追加等にはコーディングの知識が必要となりますので、ご了承ください。
        </p>
      </>
    ),
  },
  {
    question: "ランディングページの制作はしていただけますか？",
    answer: (
      <>
        <p>カスタムプランを選択いただいた場合は、オリジナルのデザインで制作いたします。</p>
      </>
    ),
  },
  {
    question: "デザインはこちらで用意するので、サイトの実装のみを対応していただけますか？",
    answer: (
      <>
        <p>はい、可能です。この場合はカスタムプランになりますので、費用の詳細はお問い合わせからご相談ください。</p>
      </>
    ),
  },
  {
    question: "基本料金、保守管理・運用費以外に費用はかかりますか？",
    answer: (
      <>
        <p>ドメイン代はお客様負担となります。</p>
      </>
    ),
  },
];

export const metadata = outputMetadata(FAQ_METADATA.title, FAQ_METADATA.description, FAQ_METADATA.slug);

export default function FaqPage() {
  return (
    <main className={styles.main}>
      <SubMv jpTitle="よくあるご質問" enTitle="Q&A" breadcrumbPaths={[{ name: "よくあるご質問" }]} />

      <div className={styles.body}>
        <Container>
          <div className={styles.bodyRow}>
            <div className={styles.navCol}>
              <ul>
                <li>
                  <a href="#plan">料金プランについて</a>
                </li>
                <li>
                  <a href="#contract">ご契約について</a>
                </li>
                <li>
                  <a href="#payment">お支払いについて</a>
                </li>
              </ul>
            </div>
            <div className={styles.blocks}>
              <div className={styles.block} id="plan">
                <h2 data-en="plans">料金プランについて</h2>
                <div className={styles.accordion}>
                  <AccordionList data={data} isFirstItemOpen />
                </div>
              </div>

              <div className={styles.block}>
                <h2 data-en="contract">ご契約について</h2>
                <div className={styles.accordion}>
                  <AccordionList data={data} isFirstItemOpen />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
