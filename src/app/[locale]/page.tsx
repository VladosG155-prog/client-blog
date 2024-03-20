import styles from "./page.module.scss";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");

  return (
    <main className={styles.main}>
      <h1>{t("hello")}</h1>
    </main>
  );
}
