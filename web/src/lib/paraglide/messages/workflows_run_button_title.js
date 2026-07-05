/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_Run_Button_TitleInputs */

const en_workflows_run_button_title = /** @type {(inputs: Workflows_Run_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Run`)
};

const zh_cn2_workflows_run_button_title = /** @type {(inputs: Workflows_Run_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`运行`)
};

const es_workflows_run_button_title = /** @type {(inputs: Workflows_Run_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ejecutar`)
};

const ja_workflows_run_button_title = /** @type {(inputs: Workflows_Run_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実行`)
};

const hi_workflows_run_button_title = /** @type {(inputs: Workflows_Run_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चलाएँ`)
};

const pt_br2_workflows_run_button_title = /** @type {(inputs: Workflows_Run_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Executar`)
};

const ko_workflows_run_button_title = /** @type {(inputs: Workflows_Run_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`실행`)
};

const fr_workflows_run_button_title = /** @type {(inputs: Workflows_Run_Button_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Exécuter`)
};

/**
* | output |
* | --- |
* | "Run" |
*
* @param {Workflows_Run_Button_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_run_button_title = /** @type {((inputs?: Workflows_Run_Button_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Run_Button_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_run_button_title(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_run_button_title(inputs)
	if (locale === "es") return es_workflows_run_button_title(inputs)
	if (locale === "ja") return ja_workflows_run_button_title(inputs)
	if (locale === "hi") return hi_workflows_run_button_title(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_run_button_title(inputs)
	if (locale === "ko") return ko_workflows_run_button_title(inputs)
	return fr_workflows_run_button_title(inputs)
});