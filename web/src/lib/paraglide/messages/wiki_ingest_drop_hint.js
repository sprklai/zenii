/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Ingest_Drop_HintInputs */

const en_wiki_ingest_drop_hint = /** @type {(inputs: Wiki_Ingest_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Click or drag to add files`)
};

const zh_cn2_wiki_ingest_drop_hint = /** @type {(inputs: Wiki_Ingest_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`点击或拖拽以添加文件`)
};

const es_wiki_ingest_drop_hint = /** @type {(inputs: Wiki_Ingest_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haz clic o arrastra para añadir archivos`)
};

const ja_wiki_ingest_drop_hint = /** @type {(inputs: Wiki_Ingest_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリックまたはドラッグしてファイルを追加`)
};

const hi_wiki_ingest_drop_hint = /** @type {(inputs: Wiki_Ingest_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`फ़ाइलें जोड़ने के लिए क्लिक करें या खींचें`)
};

const pt_br2_wiki_ingest_drop_hint = /** @type {(inputs: Wiki_Ingest_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clique ou arraste para adicionar arquivos`)
};

const ko_wiki_ingest_drop_hint = /** @type {(inputs: Wiki_Ingest_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`클릭하거나 파일을 드래그하여 추가`)
};

const fr_wiki_ingest_drop_hint = /** @type {(inputs: Wiki_Ingest_Drop_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliquez ou faites glisser pour ajouter des fichiers`)
};

/**
* | output |
* | --- |
* | "Click or drag to add files" |
*
* @param {Wiki_Ingest_Drop_HintInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_ingest_drop_hint = /** @type {((inputs?: Wiki_Ingest_Drop_HintInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Ingest_Drop_HintInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_ingest_drop_hint(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_ingest_drop_hint(inputs)
	if (locale === "es") return es_wiki_ingest_drop_hint(inputs)
	if (locale === "ja") return ja_wiki_ingest_drop_hint(inputs)
	if (locale === "hi") return hi_wiki_ingest_drop_hint(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_ingest_drop_hint(inputs)
	if (locale === "ko") return ko_wiki_ingest_drop_hint(inputs)
	return fr_wiki_ingest_drop_hint(inputs)
});