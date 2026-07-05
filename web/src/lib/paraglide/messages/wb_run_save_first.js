/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Run_Save_FirstInputs */

const en_wb_run_save_first = /** @type {(inputs: Wb_Run_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save workflow before running`)
};

const zh_cn2_wb_run_save_first = /** @type {(inputs: Wb_Run_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`运行前请先保存工作流`)
};

const es_wb_run_save_first = /** @type {(inputs: Wb_Run_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guarda el flujo antes de ejecutar`)
};

const ja_wb_run_save_first = /** @type {(inputs: Wb_Run_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実行前にワークフローを保存してください`)
};

const hi_wb_run_save_first = /** @type {(inputs: Wb_Run_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चलाने से पहले वर्कफ़्लो सहेजें`)
};

const pt_br2_wb_run_save_first = /** @type {(inputs: Wb_Run_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salve o fluxo antes de executar`)
};

const ko_wb_run_save_first = /** @type {(inputs: Wb_Run_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`실행 전에 워크플로를 저장하세요`)
};

const fr_wb_run_save_first = /** @type {(inputs: Wb_Run_Save_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrez le workflow avant d'exécuter`)
};

/**
* | output |
* | --- |
* | "Save workflow before running" |
*
* @param {Wb_Run_Save_FirstInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_run_save_first = /** @type {((inputs?: Wb_Run_Save_FirstInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Run_Save_FirstInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_run_save_first(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_run_save_first(inputs)
	if (locale === "es") return es_wb_run_save_first(inputs)
	if (locale === "ja") return ja_wb_run_save_first(inputs)
	if (locale === "hi") return hi_wb_run_save_first(inputs)
	if (locale === "pt-BR") return pt_br2_wb_run_save_first(inputs)
	if (locale === "ko") return ko_wb_run_save_first(inputs)
	return fr_wb_run_save_first(inputs)
});