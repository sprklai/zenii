/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_History_TitleInputs */

const en_schedule_history_title = /** @type {(inputs: Schedule_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Execution History`)
};

const zh_cn2_schedule_history_title = /** @type {(inputs: Schedule_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`执行历史`)
};

const es_schedule_history_title = /** @type {(inputs: Schedule_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historial de ejecución`)
};

const ja_schedule_history_title = /** @type {(inputs: Schedule_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`実行履歴`)
};

const hi_schedule_history_title = /** @type {(inputs: Schedule_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`निष्पादन इतिहास`)
};

const pt_br2_schedule_history_title = /** @type {(inputs: Schedule_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Histórico de Execuções`)
};

const ko_schedule_history_title = /** @type {(inputs: Schedule_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`실행 이력`)
};

const fr_schedule_history_title = /** @type {(inputs: Schedule_History_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Historique d'exécution`)
};

/**
* | output |
* | --- |
* | "Execution History" |
*
* @param {Schedule_History_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_history_title = /** @type {((inputs?: Schedule_History_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_History_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_history_title(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_history_title(inputs)
	if (locale === "es") return es_schedule_history_title(inputs)
	if (locale === "ja") return ja_schedule_history_title(inputs)
	if (locale === "hi") return hi_schedule_history_title(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_history_title(inputs)
	if (locale === "ko") return ko_schedule_history_title(inputs)
	return fr_schedule_history_title(inputs)
});