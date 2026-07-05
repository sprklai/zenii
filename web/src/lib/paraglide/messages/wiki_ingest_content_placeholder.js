/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Ingest_Content_PlaceholderInputs */

const en_wiki_ingest_content_placeholder = /** @type {(inputs: Wiki_Ingest_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paste document content here...`)
};

const zh_cn2_wiki_ingest_content_placeholder = /** @type {(inputs: Wiki_Ingest_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在此粘贴文档内容...`)
};

const es_wiki_ingest_content_placeholder = /** @type {(inputs: Wiki_Ingest_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pega el contenido del documento aquí...`)
};

const ja_wiki_ingest_content_placeholder = /** @type {(inputs: Wiki_Ingest_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ドキュメントの内容をここに貼り付けてください...`)
};

const hi_wiki_ingest_content_placeholder = /** @type {(inputs: Wiki_Ingest_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`यहाँ दस्तावेज़ सामग्री पेस्ट करें...`)
};

const pt_br2_wiki_ingest_content_placeholder = /** @type {(inputs: Wiki_Ingest_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cole o conteúdo do documento aqui...`)
};

const ko_wiki_ingest_content_placeholder = /** @type {(inputs: Wiki_Ingest_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`여기에 문서 내용을 붙여넣기하세요...`)
};

const fr_wiki_ingest_content_placeholder = /** @type {(inputs: Wiki_Ingest_Content_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collez le contenu du document ici...`)
};

/**
* | output |
* | --- |
* | "Paste document content here..." |
*
* @param {Wiki_Ingest_Content_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_ingest_content_placeholder = /** @type {((inputs?: Wiki_Ingest_Content_PlaceholderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Ingest_Content_PlaceholderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_ingest_content_placeholder(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_ingest_content_placeholder(inputs)
	if (locale === "es") return es_wiki_ingest_content_placeholder(inputs)
	if (locale === "ja") return ja_wiki_ingest_content_placeholder(inputs)
	if (locale === "hi") return hi_wiki_ingest_content_placeholder(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_ingest_content_placeholder(inputs)
	if (locale === "ko") return ko_wiki_ingest_content_placeholder(inputs)
	return fr_wiki_ingest_content_placeholder(inputs)
});