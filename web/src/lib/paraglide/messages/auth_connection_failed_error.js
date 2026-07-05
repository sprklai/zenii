/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Connection_Failed_ErrorInputs */

const en_auth_connection_failed_error = /** @type {(inputs: Auth_Connection_Failed_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not connect to daemon. Check the token and ensure the daemon is running.`)
};

const zh_cn2_auth_connection_failed_error = /** @type {(inputs: Auth_Connection_Failed_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法连接到守护进程。请检查令牌并确保守护进程正在运行。`)
};

const es_auth_connection_failed_error = /** @type {(inputs: Auth_Connection_Failed_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo conectar al daemon. Verifica el token y asegúrate de que el daemon esté en ejecución.`)
};

const ja_auth_connection_failed_error = /** @type {(inputs: Auth_Connection_Failed_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`デーモンに接続できませんでした。トークンを確認し、デーモンが実行中であることを確認してください。`)
};

const hi_auth_connection_failed_error = /** @type {(inputs: Auth_Connection_Failed_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daemon से कनेक्ट नहीं हो सका। टोकन जाँचें और सुनिश्चित करें कि daemon चल रहा है।`)
};

const pt_br2_auth_connection_failed_error = /** @type {(inputs: Auth_Connection_Failed_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível conectar ao daemon. Verifique o token e certifique-se de que o daemon está em execução.`)
};

const ko_auth_connection_failed_error = /** @type {(inputs: Auth_Connection_Failed_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daemon에 연결할 수 없습니다. 토큰을 확인하고 daemon이 실행 중인지 확인하세요.`)
};

const fr_auth_connection_failed_error = /** @type {(inputs: Auth_Connection_Failed_ErrorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de se connecter au daemon. Vérifiez le jeton et assurez-vous que le daemon est en cours d'exécution.`)
};

/**
* | output |
* | --- |
* | "Could not connect to daemon. Check the token and ensure the daemon is running." |
*
* @param {Auth_Connection_Failed_ErrorInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const auth_connection_failed_error = /** @type {((inputs?: Auth_Connection_Failed_ErrorInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Connection_Failed_ErrorInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_auth_connection_failed_error(inputs)
	if (locale === "zh-CN") return zh_cn2_auth_connection_failed_error(inputs)
	if (locale === "es") return es_auth_connection_failed_error(inputs)
	if (locale === "ja") return ja_auth_connection_failed_error(inputs)
	if (locale === "hi") return hi_auth_connection_failed_error(inputs)
	if (locale === "pt-BR") return pt_br2_auth_connection_failed_error(inputs)
	if (locale === "ko") return ko_auth_connection_failed_error(inputs)
	return fr_auth_connection_failed_error(inputs)
});