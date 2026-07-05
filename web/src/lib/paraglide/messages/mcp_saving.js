/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_SavingInputs */

const en_mcp_saving = /** @type {(inputs: Mcp_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saving…`)
};

const zh_cn2_mcp_saving = /** @type {(inputs: Mcp_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存中…`)
};

const es_mcp_saving = /** @type {(inputs: Mcp_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardando…`)
};

const ja_mcp_saving = /** @type {(inputs: Mcp_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存中…`)
};

const hi_mcp_saving = /** @type {(inputs: Mcp_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सहेजा जा रहा है…`)
};

const pt_br2_mcp_saving = /** @type {(inputs: Mcp_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvando…`)
};

const ko_mcp_saving = /** @type {(inputs: Mcp_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`저장 중…`)
};

const fr_mcp_saving = /** @type {(inputs: Mcp_SavingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrement…`)
};

/**
* | output |
* | --- |
* | "Saving…" |
*
* @param {Mcp_SavingInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_saving = /** @type {((inputs?: Mcp_SavingInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_SavingInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_saving(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_saving(inputs)
	if (locale === "es") return es_mcp_saving(inputs)
	if (locale === "ja") return ja_mcp_saving(inputs)
	if (locale === "hi") return hi_mcp_saving(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_saving(inputs)
	if (locale === "ko") return ko_mcp_saving(inputs)
	return fr_mcp_saving(inputs)
});