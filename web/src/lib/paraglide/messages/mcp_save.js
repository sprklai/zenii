/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_SaveInputs */

const en_mcp_save = /** @type {(inputs: Mcp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save`)
};

const zh_cn2_mcp_save = /** @type {(inputs: Mcp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存`)
};

const es_mcp_save = /** @type {(inputs: Mcp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar`)
};

const ja_mcp_save = /** @type {(inputs: Mcp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存`)
};

const hi_mcp_save = /** @type {(inputs: Mcp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सहेजें`)
};

const pt_br2_mcp_save = /** @type {(inputs: Mcp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar`)
};

const ko_mcp_save = /** @type {(inputs: Mcp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`저장`)
};

const fr_mcp_save = /** @type {(inputs: Mcp_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer`)
};

/**
* | output |
* | --- |
* | "Save" |
*
* @param {Mcp_SaveInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_save = /** @type {((inputs?: Mcp_SaveInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_SaveInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_save(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_save(inputs)
	if (locale === "es") return es_mcp_save(inputs)
	if (locale === "ja") return ja_mcp_save(inputs)
	if (locale === "hi") return hi_mcp_save(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_save(inputs)
	if (locale === "ko") return ko_mcp_save(inputs)
	return fr_mcp_save(inputs)
});