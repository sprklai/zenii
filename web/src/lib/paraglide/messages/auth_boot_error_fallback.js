/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Boot_Error_FallbackInputs */

const en_auth_boot_error_fallback = /** @type {(inputs: Auth_Boot_Error_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii failed to start. Check the logs for errors.`)
};

const zh_cn2_auth_boot_error_fallback = /** @type {(inputs: Auth_Boot_Error_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii 启动失败。请检查日志以了解错误详情。`)
};

const es_auth_boot_error_fallback = /** @type {(inputs: Auth_Boot_Error_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii no pudo iniciarse. Revisa los registros en busca de errores.`)
};

const ja_auth_boot_error_fallback = /** @type {(inputs: Auth_Boot_Error_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii の起動に失敗しました。ログでエラーを確認してください。`)
};

const hi_auth_boot_error_fallback = /** @type {(inputs: Auth_Boot_Error_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii शुरू नहीं हो सका। कृपया लॉग में त्रुटियाँ जाँचें।`)
};

const pt_br2_auth_boot_error_fallback = /** @type {(inputs: Auth_Boot_Error_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii não conseguiu iniciar. Verifique os logs para erros.`)
};

const ko_auth_boot_error_fallback = /** @type {(inputs: Auth_Boot_Error_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii 시작에 실패했습니다. 로그에서 오류를 확인하세요.`)
};

const fr_auth_boot_error_fallback = /** @type {(inputs: Auth_Boot_Error_FallbackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii n'a pas pu démarrer. Consultez les journaux pour les erreurs.`)
};

/**
* | output |
* | --- |
* | "Zenii failed to start. Check the logs for errors." |
*
* @param {Auth_Boot_Error_FallbackInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const auth_boot_error_fallback = /** @type {((inputs?: Auth_Boot_Error_FallbackInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Boot_Error_FallbackInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_boot_error_fallback(inputs)
	if (locale === "zh-CN") return zh_cn2_auth_boot_error_fallback(inputs)
	if (locale === "es") return es_auth_boot_error_fallback(inputs)
	if (locale === "ja") return ja_auth_boot_error_fallback(inputs)
	if (locale === "hi") return hi_auth_boot_error_fallback(inputs)
	if (locale === "pt-BR") return pt_br2_auth_boot_error_fallback(inputs)
	if (locale === "ko") return ko_auth_boot_error_fallback(inputs)
	return fr_auth_boot_error_fallback(inputs)
});