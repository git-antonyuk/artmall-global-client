import { SSRConfig } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const LIST = ["common", "navigation", "search"];
const getCommonTranslations = async (locale: string): Promise<SSRConfig> =>
  await serverSideTranslations(locale, LIST);

export default getCommonTranslations;
