/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Schedule_History_EmptyInputs */

const en_schedule_history_empty = /** @type {(inputs: Schedule_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No executions yet.`)
};

const zh_cn2_schedule_history_empty = /** @type {(inputs: Schedule_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无执行记录。`)
};

const es_schedule_history_empty = /** @type {(inputs: Schedule_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay ejecuciones.`)
};

const ja_schedule_history_empty = /** @type {(inputs: Schedule_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ実行履歴はありません。`)
};

const hi_schedule_history_empty = /** @type {(inputs: Schedule_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अभी तक कोई निष्पादन नहीं।`)
};

const pt_br2_schedule_history_empty = /** @type {(inputs: Schedule_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma execução ainda.`)
};

const ko_schedule_history_empty = /** @type {(inputs: Schedule_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`아직 실행 이력이 없습니다.`)
};

const fr_schedule_history_empty = /** @type {(inputs: Schedule_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune exécution pour le moment.`)
};

/**
* | output |
* | --- |
* | "No executions yet." |
*
* @param {Schedule_History_EmptyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const schedule_history_empty = /** @type {((inputs?: Schedule_History_EmptyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Schedule_History_EmptyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_schedule_history_empty(inputs)
	if (locale === "zh-CN") return zh_cn2_schedule_history_empty(inputs)
	if (locale === "es") return es_schedule_history_empty(inputs)
	if (locale === "ja") return ja_schedule_history_empty(inputs)
	if (locale === "hi") return hi_schedule_history_empty(inputs)
	if (locale === "pt-BR") return pt_br2_schedule_history_empty(inputs)
	if (locale === "ko") return ko_schedule_history_empty(inputs)
	return fr_schedule_history_empty(inputs)
});