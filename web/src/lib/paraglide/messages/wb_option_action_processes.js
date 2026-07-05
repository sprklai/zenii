/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Option_Action_ProcessesInputs */

const en_wb_option_action_processes = /** @type {(inputs: Wb_Option_Action_ProcessesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Processes`)
};

const zh_cn2_wb_option_action_processes = /** @type {(inputs: Wb_Option_Action_ProcessesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`进程`)
};

const es_wb_option_action_processes = /** @type {(inputs: Wb_Option_Action_ProcessesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Procesos`)
};

const ja_wb_option_action_processes = /** @type {(inputs: Wb_Option_Action_ProcessesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プロセス`)
};

const hi_wb_option_action_processes = /** @type {(inputs: Wb_Option_Action_ProcessesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`प्रक्रियाएँ`)
};

const pt_br2_wb_option_action_processes = /** @type {(inputs: Wb_Option_Action_ProcessesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Processos`)
};

const ko_wb_option_action_processes = /** @type {(inputs: Wb_Option_Action_ProcessesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`프로세스`)
};

const fr_wb_option_action_processes = /** @type {(inputs: Wb_Option_Action_ProcessesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Processus`)
};

/**
* | output |
* | --- |
* | "Processes" |
*
* @param {Wb_Option_Action_ProcessesInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_option_action_processes = /** @type {((inputs?: Wb_Option_Action_ProcessesInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Option_Action_ProcessesInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_option_action_processes(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_option_action_processes(inputs)
	if (locale === "es") return es_wb_option_action_processes(inputs)
	if (locale === "ja") return ja_wb_option_action_processes(inputs)
	if (locale === "hi") return hi_wb_option_action_processes(inputs)
	if (locale === "pt-BR") return pt_br2_wb_option_action_processes(inputs)
	if (locale === "ko") return ko_wb_option_action_processes(inputs)
	return fr_wb_option_action_processes(inputs)
});