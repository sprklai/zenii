/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_CopiedInputs */

const en_mcp_copied = /** @type {(inputs: Mcp_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copied!`)
};

const zh_cn2_mcp_copied = /** @type {(inputs: Mcp_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已复制!`)
};

const es_mcp_copied = /** @type {(inputs: Mcp_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¡Copiado!`)
};

const ja_mcp_copied = /** @type {(inputs: Mcp_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コピー完了!`)
};

const hi_mcp_copied = /** @type {(inputs: Mcp_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कॉपी हो गया!`)
};

const pt_br2_mcp_copied = /** @type {(inputs: Mcp_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiado!`)
};

const ko_mcp_copied = /** @type {(inputs: Mcp_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`복사됨!`)
};

const fr_mcp_copied = /** @type {(inputs: Mcp_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copié !`)
};

/**
* | output |
* | --- |
* | "Copied!" |
*
* @param {Mcp_CopiedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_copied = /** @type {((inputs?: Mcp_CopiedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_CopiedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_copied(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_copied(inputs)
	if (locale === "es") return es_mcp_copied(inputs)
	if (locale === "ja") return ja_mcp_copied(inputs)
	if (locale === "hi") return hi_mcp_copied(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_copied(inputs)
	if (locale === "ko") return ko_mcp_copied(inputs)
	return fr_mcp_copied(inputs)
});