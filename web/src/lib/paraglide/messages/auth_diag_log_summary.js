/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Auth_Diag_Log_SummaryInputs */

const en_auth_diag_log_summary = /** @type {(inputs: Auth_Diag_Log_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Diagnostic log (${i?.count} entries)`)
};

const zh_cn2_auth_diag_log_summary = /** @type {(inputs: Auth_Diag_Log_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`诊断日志（${i?.count} 条记录）`)
};

const es_auth_diag_log_summary = /** @type {(inputs: Auth_Diag_Log_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Registro de diagnóstico (${i?.count} entradas)`)
};

const ja_auth_diag_log_summary = /** @type {(inputs: Auth_Diag_Log_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`診断ログ（${i?.count} 件）`)
};

const hi_auth_diag_log_summary = /** @type {(inputs: Auth_Diag_Log_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`डायग्नोस्टिक लॉग (${i?.count} प्रविष्टियाँ)`)
};

const pt_br2_auth_diag_log_summary = /** @type {(inputs: Auth_Diag_Log_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Log de diagnóstico (${i?.count} entradas)`)
};

const ko_auth_diag_log_summary = /** @type {(inputs: Auth_Diag_Log_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`진단 로그 (${i?.count}개 항목)`)
};

const fr_auth_diag_log_summary = /** @type {(inputs: Auth_Diag_Log_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Journal de diagnostic (${i?.count} entrées)`)
};

/**
* | output |
* | --- |
* | "Diagnostic log ({count} entries)" |
*
* @param {Auth_Diag_Log_SummaryInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const auth_diag_log_summary = /** @type {((inputs: Auth_Diag_Log_SummaryInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Diag_Log_SummaryInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_diag_log_summary(inputs)
	if (locale === "zh-CN") return zh_cn2_auth_diag_log_summary(inputs)
	if (locale === "es") return es_auth_diag_log_summary(inputs)
	if (locale === "ja") return ja_auth_diag_log_summary(inputs)
	if (locale === "hi") return hi_auth_diag_log_summary(inputs)
	if (locale === "pt-BR") return pt_br2_auth_diag_log_summary(inputs)
	if (locale === "ko") return ko_auth_diag_log_summary(inputs)
	return fr_auth_diag_log_summary(inputs)
});