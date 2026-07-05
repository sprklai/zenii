/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_Cancel_No_Active_RunInputs */

const en_workflows_cancel_no_active_run = /** @type {(inputs: Workflows_Cancel_No_Active_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No active run to cancel`)
};

const zh_cn2_workflows_cancel_no_active_run = /** @type {(inputs: Workflows_Cancel_No_Active_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有活动的运行可取消`)
};

const es_workflows_cancel_no_active_run = /** @type {(inputs: Workflows_Cancel_No_Active_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay ejecución activa para cancelar`)
};

const ja_workflows_cancel_no_active_run = /** @type {(inputs: Workflows_Cancel_No_Active_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンセルするアクティブな実行がありません`)
};

const hi_workflows_cancel_no_active_run = /** @type {(inputs: Workflows_Cancel_No_Active_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`रद्द करने के लिए कोई सक्रिय रन नहीं`)
};

const pt_br2_workflows_cancel_no_active_run = /** @type {(inputs: Workflows_Cancel_No_Active_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma execução ativa para cancelar`)
};

const ko_workflows_cancel_no_active_run = /** @type {(inputs: Workflows_Cancel_No_Active_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`취소할 활성 실행이 없습니다`)
};

const fr_workflows_cancel_no_active_run = /** @type {(inputs: Workflows_Cancel_No_Active_RunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune exécution active à annuler`)
};

/**
* | output |
* | --- |
* | "No active run to cancel" |
*
* @param {Workflows_Cancel_No_Active_RunInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_cancel_no_active_run = /** @type {((inputs?: Workflows_Cancel_No_Active_RunInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Cancel_No_Active_RunInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_cancel_no_active_run(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_cancel_no_active_run(inputs)
	if (locale === "es") return es_workflows_cancel_no_active_run(inputs)
	if (locale === "ja") return ja_workflows_cancel_no_active_run(inputs)
	if (locale === "hi") return hi_workflows_cancel_no_active_run(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_cancel_no_active_run(inputs)
	if (locale === "ko") return ko_workflows_cancel_no_active_run(inputs)
	return fr_workflows_cancel_no_active_run(inputs)
});