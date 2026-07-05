/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Prompt_Modal_DescInputs */

const en_wiki_prompt_modal_desc = /** @type {(inputs: Wiki_Prompt_Modal_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This prompt guides the AI when ingesting new sources. Changes apply to future ingests only — re-ingest or Regenerate to rebuild existing pages.`)
};

const zh_cn2_wiki_prompt_modal_desc = /** @type {(inputs: Wiki_Prompt_Modal_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此提示词在摄取新来源时指导 AI。更改仅应用于未来的摄取 — 重新摄取或重新生成以重建现有页面。`)
};

const es_wiki_prompt_modal_desc = /** @type {(inputs: Wiki_Prompt_Modal_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este prompt guía a la IA al ingerir nuevas fuentes. Los cambios se aplican solo a futuras ingestas — reingestar o Regenerar para reconstruir páginas existentes.`)
};

const ja_wiki_prompt_modal_desc = /** @type {(inputs: Wiki_Prompt_Modal_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このプロンプトは、新しいソースを取り込む際に AI をガイドします。変更は今後の取り込みにのみ適用されます — 既存のページを再構築するには再取り込みまたは再生成してください。`)
};

const hi_wiki_prompt_modal_desc = /** @type {(inputs: Wiki_Prompt_Modal_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`यह प्रॉम्प्ट नए स्रोतों को अंतर्ग्रहण करते समय AI का मार्गदर्शन करता है। परिवर्तन केवल भविष्य के अंतर्ग्रहण पर लागू होते हैं — मौजूदा पृष्ठों को पुनर्निर्मित करने के लिए पुनः अंतर्ग्रहण या पुनर्जनन करें।`)
};

const pt_br2_wiki_prompt_modal_desc = /** @type {(inputs: Wiki_Prompt_Modal_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este prompt orienta a IA ao ingerir novas fontes. As alterações se aplicam apenas a futuras ingestões — reingerir ou Regenerar para reconstruir páginas existentes.`)
};

const ko_wiki_prompt_modal_desc = /** @type {(inputs: Wiki_Prompt_Modal_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`이 프롬프트는 새 소스를 수집할 때 AI를 안내합니다. 변경 사항은 향후 수집에만 적용됩니다 — 기존 페이지를 재구성하려면 재수집 또는 재생성하세요.`)
};

const fr_wiki_prompt_modal_desc = /** @type {(inputs: Wiki_Prompt_Modal_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette invite guide l'IA lors de l'ingestion de nouvelles sources. Les modifications s'appliquent uniquement aux futures ingestions — réingérer ou Régénérer pour reconstruire les pages existantes.`)
};

/**
* | output |
* | --- |
* | "This prompt guides the AI when ingesting new sources. Changes apply to future ingests only — re-ingest or Regenerate to rebuild existing pages." |
*
* @param {Wiki_Prompt_Modal_DescInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_prompt_modal_desc = /** @type {((inputs?: Wiki_Prompt_Modal_DescInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Prompt_Modal_DescInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_prompt_modal_desc(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_prompt_modal_desc(inputs)
	if (locale === "es") return es_wiki_prompt_modal_desc(inputs)
	if (locale === "ja") return ja_wiki_prompt_modal_desc(inputs)
	if (locale === "hi") return hi_wiki_prompt_modal_desc(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_prompt_modal_desc(inputs)
	if (locale === "ko") return ko_wiki_prompt_modal_desc(inputs)
	return fr_wiki_prompt_modal_desc(inputs)
});