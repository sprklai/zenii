/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Process_KillInputs */

const en_wb_option_process_kill = /** @type {(inputs: Wb_Option_Process_KillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kill`)
};

const zh_cn2_wb_option_process_kill = /** @type {(inputs: Wb_Option_Process_KillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`终止`)
};

const es_wb_option_process_kill = /** @type {(inputs: Wb_Option_Process_KillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminar`)
};

const ja_wb_option_process_kill = /** @type {(inputs: Wb_Option_Process_KillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`終了`)
};

const hi_wb_option_process_kill = /** @type {(inputs: Wb_Option_Process_KillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`बंद करें`)
};

const pt_br2_wb_option_process_kill = /** @type {(inputs: Wb_Option_Process_KillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Encerrar`)
};

const ko_wb_option_process_kill = /** @type {(inputs: Wb_Option_Process_KillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`종료`)
};

const fr_wb_option_process_kill = /** @type {(inputs: Wb_Option_Process_KillInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminer`)
};

/**
* | output |
* | --- |
* | "Kill" |
*
* @param {Wb_Option_Process_KillInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_process_kill = /** @type {((inputs?: Wb_Option_Process_KillInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Process_KillInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_process_kill(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_process_kill(inputs)
	if (locale === "es") return es_wb_option_process_kill(inputs)
	if (locale === "ja") return ja_wb_option_process_kill(inputs)
	if (locale === "hi") return hi_wb_option_process_kill(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_process_kill(inputs)
	if (locale === "ko") return ko_wb_option_process_kill(inputs)
	return fr_wb_option_process_kill(inputs)
});