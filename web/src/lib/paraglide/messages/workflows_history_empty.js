/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_History_EmptyInputs */

const en_workflows_history_empty = /** @type {(inputs: Workflows_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No runs yet.`)
};

const zh_cn2_workflows_history_empty = /** @type {(inputs: Workflows_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无运行记录。`)
};

const es_workflows_history_empty = /** @type {(inputs: Workflows_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay ejecuciones.`)
};

const ja_workflows_history_empty = /** @type {(inputs: Workflows_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ実行履歴はありません。`)
};

const hi_workflows_history_empty = /** @type {(inputs: Workflows_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`अभी तक कोई रन नहीं।`)
};

const pt_br2_workflows_history_empty = /** @type {(inputs: Workflows_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma execução ainda.`)
};

const ko_workflows_history_empty = /** @type {(inputs: Workflows_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`아직 실행 이력이 없습니다.`)
};

const fr_workflows_history_empty = /** @type {(inputs: Workflows_History_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune exécution pour le moment.`)
};

/**
* | output |
* | --- |
* | "No runs yet." |
*
* @param {Workflows_History_EmptyInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_history_empty = /** @type {((inputs?: Workflows_History_EmptyInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_History_EmptyInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_history_empty(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_history_empty(inputs)
	if (locale === "es") return es_workflows_history_empty(inputs)
	if (locale === "ja") return ja_workflows_history_empty(inputs)
	if (locale === "hi") return hi_workflows_history_empty(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_history_empty(inputs)
	if (locale === "ko") return ko_workflows_history_empty(inputs)
	return fr_workflows_history_empty(inputs)
});