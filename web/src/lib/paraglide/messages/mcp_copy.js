/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_CopyInputs */

const en_mcp_copy = /** @type {(inputs: Mcp_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy`)
};

const zh_cn2_mcp_copy = /** @type {(inputs: Mcp_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制`)
};

const es_mcp_copy = /** @type {(inputs: Mcp_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar`)
};

const ja_mcp_copy = /** @type {(inputs: Mcp_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コピー`)
};

const hi_mcp_copy = /** @type {(inputs: Mcp_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कॉपी करें`)
};

const pt_br2_mcp_copy = /** @type {(inputs: Mcp_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar`)
};

const ko_mcp_copy = /** @type {(inputs: Mcp_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`복사`)
};

const fr_mcp_copy = /** @type {(inputs: Mcp_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copier`)
};

/**
* | output |
* | --- |
* | "Copy" |
*
* @param {Mcp_CopyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_copy = /** @type {((inputs?: Mcp_CopyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_CopyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_copy(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_copy(inputs)
	if (locale === "es") return es_mcp_copy(inputs)
	if (locale === "ja") return ja_mcp_copy(inputs)
	if (locale === "hi") return hi_mcp_copy(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_copy(inputs)
	if (locale === "ko") return ko_mcp_copy(inputs)
	return fr_mcp_copy(inputs)
});