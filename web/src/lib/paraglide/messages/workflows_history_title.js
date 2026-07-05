/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_History_TitleInputs */

const en_workflows_history_title = /** @type {(inputs: Workflows_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Run History`)
};

const zh_cn2_workflows_history_title = /** @type {(inputs: Workflows_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`运行历史`)
};

const es_workflows_history_title = /** @type {(inputs: Workflows_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historial de ejecuciones`)
};

const ja_workflows_history_title = /** @type {(inputs: Workflows_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実行履歴`)
};

const hi_workflows_history_title = /** @type {(inputs: Workflows_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`रन इतिहास`)
};

const pt_br2_workflows_history_title = /** @type {(inputs: Workflows_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Histórico de Execuções`)
};

const ko_workflows_history_title = /** @type {(inputs: Workflows_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`실행 이력`)
};

const fr_workflows_history_title = /** @type {(inputs: Workflows_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historique des exécutions`)
};

/**
* | output |
* | --- |
* | "Run History" |
*
* @param {Workflows_History_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_history_title = /** @type {((inputs?: Workflows_History_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_History_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_history_title(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_history_title(inputs)
	if (locale === "es") return es_workflows_history_title(inputs)
	if (locale === "ja") return ja_workflows_history_title(inputs)
	if (locale === "hi") return hi_workflows_history_title(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_history_title(inputs)
	if (locale === "ko") return ko_workflows_history_title(inputs)
	return fr_workflows_history_title(inputs)
});