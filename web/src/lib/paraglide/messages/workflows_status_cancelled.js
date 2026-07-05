/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_Status_CancelledInputs */

const en_workflows_status_cancelled = /** @type {(inputs: Workflows_Status_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelled`)
};

const zh_cn2_workflows_status_cancelled = /** @type {(inputs: Workflows_Status_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已取消`)
};

const es_workflows_status_cancelled = /** @type {(inputs: Workflows_Status_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelado`)
};

const ja_workflows_status_cancelled = /** @type {(inputs: Workflows_Status_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンセル済み`)
};

const hi_workflows_status_cancelled = /** @type {(inputs: Workflows_Status_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`रद्द`)
};

const pt_br2_workflows_status_cancelled = /** @type {(inputs: Workflows_Status_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelado`)
};

const ko_workflows_status_cancelled = /** @type {(inputs: Workflows_Status_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`취소됨`)
};

const fr_workflows_status_cancelled = /** @type {(inputs: Workflows_Status_CancelledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulé`)
};

/**
* | output |
* | --- |
* | "Cancelled" |
*
* @param {Workflows_Status_CancelledInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_status_cancelled = /** @type {((inputs?: Workflows_Status_CancelledInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Status_CancelledInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_status_cancelled(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_status_cancelled(inputs)
	if (locale === "es") return es_workflows_status_cancelled(inputs)
	if (locale === "ja") return ja_workflows_status_cancelled(inputs)
	if (locale === "hi") return hi_workflows_status_cancelled(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_status_cancelled(inputs)
	if (locale === "ko") return ko_workflows_status_cancelled(inputs)
	return fr_workflows_status_cancelled(inputs)
});