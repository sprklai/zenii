/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ url: NonNullable<unknown> }} Auth_Connection_FailedInputs */

const en_auth_connection_failed = /** @type {(inputs: Auth_Connection_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cannot reach Zenii at ${i?.url}. Check that the daemon is running.`)
};

const zh_cn2_auth_connection_failed = /** @type {(inputs: Auth_Connection_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`无法访问 ${i?.url} 上的 Zenii。请检查守护进程是否正在运行。`)
};

const es_auth_connection_failed = /** @type {(inputs: Auth_Connection_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No se puede alcanzar Zenii en ${i?.url}. Verifica que el daemon esté en ejecución.`)
};

const ja_auth_connection_failed = /** @type {(inputs: Auth_Connection_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.url} の Zenii に接続できません。デーモンが実行中か確認してください。`)
};

const hi_auth_connection_failed = /** @type {(inputs: Auth_Connection_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.url} पर Zenii तक पहुँचा नहीं जा सका। जाँचें कि daemon चल रहा है।`)
};

const pt_br2_auth_connection_failed = /** @type {(inputs: Auth_Connection_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Não foi possível acessar o Zenii em ${i?.url}. Verifique se o daemon está em execução.`)
};

const ko_auth_connection_failed = /** @type {(inputs: Auth_Connection_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.url}에서 Zenii에 접근할 수 없습니다. Daemon이 실행 중인지 확인하세요.`)
};

const fr_auth_connection_failed = /** @type {(inputs: Auth_Connection_FailedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Impossible d'atteindre Zenii à ${i?.url}. Vérifiez que le daemon est en cours d'exécution.`)
};

/**
* | output |
* | --- |
* | "Cannot reach Zenii at {url}. Check that the daemon is running." |
*
* @param {Auth_Connection_FailedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const auth_connection_failed = /** @type {((inputs: Auth_Connection_FailedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Connection_FailedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_connection_failed(inputs)
	if (locale === "zh-CN") return zh_cn2_auth_connection_failed(inputs)
	if (locale === "es") return es_auth_connection_failed(inputs)
	if (locale === "ja") return ja_auth_connection_failed(inputs)
	if (locale === "hi") return hi_auth_connection_failed(inputs)
	if (locale === "pt-BR") return pt_br2_auth_connection_failed(inputs)
	if (locale === "ko") return ko_auth_connection_failed(inputs)
	return fr_auth_connection_failed(inputs)
});