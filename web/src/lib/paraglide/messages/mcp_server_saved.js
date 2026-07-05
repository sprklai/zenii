/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Server_SavedInputs */

const en_mcp_server_saved = /** @type {(inputs: Mcp_Server_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Settings saved.`)
};

const zh_cn2_mcp_server_saved = /** @type {(inputs: Mcp_Server_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`设置已保存。`)
};

const es_mcp_server_saved = /** @type {(inputs: Mcp_Server_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configuración guardada.`)
};

const ja_mcp_server_saved = /** @type {(inputs: Mcp_Server_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定を保存しました。`)
};

const hi_mcp_server_saved = /** @type {(inputs: Mcp_Server_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`सेटिंग सहेजी गई।`)
};

const pt_br2_mcp_server_saved = /** @type {(inputs: Mcp_Server_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Configurações salvas.`)
};

const ko_mcp_server_saved = /** @type {(inputs: Mcp_Server_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`설정이 저장되었습니다.`)
};

const fr_mcp_server_saved = /** @type {(inputs: Mcp_Server_SavedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paramètres enregistrés.`)
};

/**
* | output |
* | --- |
* | "Settings saved." |
*
* @param {Mcp_Server_SavedInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_server_saved = /** @type {((inputs?: Mcp_Server_SavedInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Server_SavedInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_server_saved(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_server_saved(inputs)
	if (locale === "es") return es_mcp_server_saved(inputs)
	if (locale === "ja") return ja_mcp_server_saved(inputs)
	if (locale === "hi") return hi_mcp_server_saved(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_server_saved(inputs)
	if (locale === "ko") return ko_mcp_server_saved(inputs)
	return fr_mcp_server_saved(inputs)
});