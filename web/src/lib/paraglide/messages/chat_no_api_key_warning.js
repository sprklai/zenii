/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Chat_No_Api_Key_WarningInputs */

const en_chat_no_api_key_warning = /** @type {(inputs: Chat_No_Api_Key_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No API key found — your key may not have persisted across restarts.`)
};

const zh_cn2_chat_no_api_key_warning = /** @type {(inputs: Chat_No_Api_Key_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未找到 API 密钥 — 您的密钥可能在重启后未被保留。`)
};

const es_chat_no_api_key_warning = /** @type {(inputs: Chat_No_Api_Key_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se encontró clave API — tu clave puede no haberse conservado entre reinicios.`)
};

const ja_chat_no_api_key_warning = /** @type {(inputs: Chat_No_Api_Key_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API キーが見つかりません — 再起動後にキーが保持されなかった可能性があります。`)
};

const hi_chat_no_api_key_warning = /** @type {(inputs: Chat_No_Api_Key_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कोई API कुंजी नहीं मिली — हो सकता है कि आपकी कुंजी पुनः आरंभ के बाद सहेजी न गई हो।`)
};

const pt_br2_chat_no_api_key_warning = /** @type {(inputs: Chat_No_Api_Key_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma chave de API encontrada — sua chave pode não ter sido salva entre reinicializações.`)
};

const ko_chat_no_api_key_warning = /** @type {(inputs: Chat_No_Api_Key_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API 키를 찾을 수 없습니다 — 재시작 후 키가 유지되지 않았을 수 있습니다.`)
};

const fr_chat_no_api_key_warning = /** @type {(inputs: Chat_No_Api_Key_WarningInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune clé API trouvée — votre clé n'a peut-être pas été conservée entre les redémarrages.`)
};

/**
* | output |
* | --- |
* | "No API key found — your key may not have persisted across restarts." |
*
* @param {Chat_No_Api_Key_WarningInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const chat_no_api_key_warning = /** @type {((inputs?: Chat_No_Api_Key_WarningInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Chat_No_Api_Key_WarningInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_chat_no_api_key_warning(inputs)
	if (locale === "zh-CN") return zh_cn2_chat_no_api_key_warning(inputs)
	if (locale === "es") return es_chat_no_api_key_warning(inputs)
	if (locale === "ja") return ja_chat_no_api_key_warning(inputs)
	if (locale === "hi") return hi_chat_no_api_key_warning(inputs)
	if (locale === "pt-BR") return pt_br2_chat_no_api_key_warning(inputs)
	if (locale === "ko") return ko_chat_no_api_key_warning(inputs)
	return fr_chat_no_api_key_warning(inputs)
});