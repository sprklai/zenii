/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Updated_LabelInputs */

const en_wiki_updated_label = /** @type {(inputs: Wiki_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Updated`)
};

const zh_cn2_wiki_updated_label = /** @type {(inputs: Wiki_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已更新`)
};

const es_wiki_updated_label = /** @type {(inputs: Wiki_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizado`)
};

const ja_wiki_updated_label = /** @type {(inputs: Wiki_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更新日`)
};

const hi_wiki_updated_label = /** @type {(inputs: Wiki_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अपडेट किया गया`)
};

const pt_br2_wiki_updated_label = /** @type {(inputs: Wiki_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizado`)
};

const ko_wiki_updated_label = /** @type {(inputs: Wiki_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`업데이트됨`)
};

const fr_wiki_updated_label = /** @type {(inputs: Wiki_Updated_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mis à jour`)
};

/**
* | output |
* | --- |
* | "Updated" |
*
* @param {Wiki_Updated_LabelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_updated_label = /** @type {((inputs?: Wiki_Updated_LabelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Updated_LabelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_updated_label(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_updated_label(inputs)
	if (locale === "es") return es_wiki_updated_label(inputs)
	if (locale === "ja") return ja_wiki_updated_label(inputs)
	if (locale === "hi") return hi_wiki_updated_label(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_updated_label(inputs)
	if (locale === "ko") return ko_wiki_updated_label(inputs)
	return fr_wiki_updated_label(inputs)
});