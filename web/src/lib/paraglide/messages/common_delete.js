/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_DeleteInputs */

const en_common_delete = /** @type {(inputs: Common_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete`)
};

const zh_cn2_common_delete = /** @type {(inputs: Common_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除`)
};

const es_common_delete = /** @type {(inputs: Common_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminar`)
};

const ja_common_delete = /** @type {(inputs: Common_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

const hi_common_delete = /** @type {(inputs: Common_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`हटाएँ`)
};

const pt_br2_common_delete = /** @type {(inputs: Common_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir`)
};

const ko_common_delete = /** @type {(inputs: Common_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`삭제`)
};

const fr_common_delete = /** @type {(inputs: Common_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer`)
};

/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Common_DeleteInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const common_delete = /** @type {((inputs?: Common_DeleteInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_DeleteInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_common_delete(inputs)
	if (locale === "zh-CN") return zh_cn2_common_delete(inputs)
	if (locale === "es") return es_common_delete(inputs)
	if (locale === "ja") return ja_common_delete(inputs)
	if (locale === "hi") return hi_common_delete(inputs)
	if (locale === "pt-BR") return pt_br2_common_delete(inputs)
	if (locale === "ko") return ko_common_delete(inputs)
	return fr_common_delete(inputs)
});