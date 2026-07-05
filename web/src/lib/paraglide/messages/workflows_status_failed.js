/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Workflows_Status_FailedInputs */

const en_workflows_status_failed = /** @type {(inputs: Workflows_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed`)
};

const zh_cn2_workflows_status_failed = /** @type {(inputs: Workflows_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失败`)
};

const es_workflows_status_failed = /** @type {(inputs: Workflows_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fallido`)
};

const ja_workflows_status_failed = /** @type {(inputs: Workflows_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失敗`)
};

const hi_workflows_status_failed = /** @type {(inputs: Workflows_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`विफल`)
};

const pt_br2_workflows_status_failed = /** @type {(inputs: Workflows_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falhou`)
};

const ko_workflows_status_failed = /** @type {(inputs: Workflows_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`실패`)
};

const fr_workflows_status_failed = /** @type {(inputs: Workflows_Status_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Échoué`)
};

/**
* | output |
* | --- |
* | "Failed" |
*
* @param {Workflows_Status_FailedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const workflows_status_failed = /** @type {((inputs?: Workflows_Status_FailedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Workflows_Status_FailedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_workflows_status_failed(inputs)
	if (locale === "zh-CN") return zh_cn2_workflows_status_failed(inputs)
	if (locale === "es") return es_workflows_status_failed(inputs)
	if (locale === "ja") return ja_workflows_status_failed(inputs)
	if (locale === "hi") return hi_workflows_status_failed(inputs)
	if (locale === "pt-BR") return pt_br2_workflows_status_failed(inputs)
	if (locale === "ko") return ko_workflows_status_failed(inputs)
	return fr_workflows_status_failed(inputs)
});