/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_EditInputs */

const en_common_edit = /** @type {(inputs: Common_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit`)
};

const zh_cn2_common_edit = /** @type {(inputs: Common_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑`)
};

const es_common_edit = /** @type {(inputs: Common_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const ja_common_edit = /** @type {(inputs: Common_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`編集`)
};

const hi_common_edit = /** @type {(inputs: Common_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`संपादित करें`)
};

const pt_br2_common_edit = /** @type {(inputs: Common_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const ko_common_edit = /** @type {(inputs: Common_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`편집`)
};

const fr_common_edit = /** @type {(inputs: Common_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier`)
};

/**
* | output |
* | --- |
* | "Edit" |
*
* @param {Common_EditInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const common_edit = /** @type {((inputs?: Common_EditInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_EditInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_edit(inputs)
	if (locale === "zh-CN") return zh_cn2_common_edit(inputs)
	if (locale === "es") return es_common_edit(inputs)
	if (locale === "ja") return ja_common_edit(inputs)
	if (locale === "hi") return hi_common_edit(inputs)
	if (locale === "pt-BR") return pt_br2_common_edit(inputs)
	if (locale === "ko") return ko_common_edit(inputs)
	return fr_common_edit(inputs)
});