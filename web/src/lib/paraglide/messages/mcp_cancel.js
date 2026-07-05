/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_CancelInputs */

const en_mcp_cancel = /** @type {(inputs: Mcp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
};

const zh_cn2_mcp_cancel = /** @type {(inputs: Mcp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消`)
};

const es_mcp_cancel = /** @type {(inputs: Mcp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const ja_mcp_cancel = /** @type {(inputs: Mcp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンセル`)
};

const hi_mcp_cancel = /** @type {(inputs: Mcp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`रद्द करें`)
};

const pt_br2_mcp_cancel = /** @type {(inputs: Mcp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const ko_mcp_cancel = /** @type {(inputs: Mcp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`취소`)
};

const fr_mcp_cancel = /** @type {(inputs: Mcp_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Mcp_CancelInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_cancel = /** @type {((inputs?: Mcp_CancelInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_CancelInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_cancel(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_cancel(inputs)
	if (locale === "es") return es_mcp_cancel(inputs)
	if (locale === "ja") return ja_mcp_cancel(inputs)
	if (locale === "hi") return hi_mcp_cancel(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_cancel(inputs)
	if (locale === "ko") return ko_mcp_cancel(inputs)
	return fr_mcp_cancel(inputs)
});