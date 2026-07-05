/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mcp_Clients_Quick_Add_TitleInputs */

const en_mcp_clients_quick_add_title = /** @type {(inputs: Mcp_Clients_Quick_Add_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quick Add`)
};

const zh_cn2_mcp_clients_quick_add_title = /** @type {(inputs: Mcp_Clients_Quick_Add_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`快速添加`)
};

const es_mcp_clients_quick_add_title = /** @type {(inputs: Mcp_Clients_Quick_Add_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir Rápido`)
};

const ja_mcp_clients_quick_add_title = /** @type {(inputs: Mcp_Clients_Quick_Add_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クイック追加`)
};

const hi_mcp_clients_quick_add_title = /** @type {(inputs: Mcp_Clients_Quick_Add_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`त्वरित जोड़ें`)
};

const pt_br2_mcp_clients_quick_add_title = /** @type {(inputs: Mcp_Clients_Quick_Add_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adição Rápida`)
};

const ko_mcp_clients_quick_add_title = /** @type {(inputs: Mcp_Clients_Quick_Add_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`빠른 추가`)
};

const fr_mcp_clients_quick_add_title = /** @type {(inputs: Mcp_Clients_Quick_Add_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajout Rapide`)
};

/**
* | output |
* | --- |
* | "Quick Add" |
*
* @param {Mcp_Clients_Quick_Add_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const mcp_clients_quick_add_title = /** @type {((inputs?: Mcp_Clients_Quick_Add_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mcp_Clients_Quick_Add_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_mcp_clients_quick_add_title(inputs)
	if (locale === "zh-CN") return zh_cn2_mcp_clients_quick_add_title(inputs)
	if (locale === "es") return es_mcp_clients_quick_add_title(inputs)
	if (locale === "ja") return ja_mcp_clients_quick_add_title(inputs)
	if (locale === "hi") return hi_mcp_clients_quick_add_title(inputs)
	if (locale === "pt-BR") return pt_br2_mcp_clients_quick_add_title(inputs)
	if (locale === "ko") return ko_mcp_clients_quick_add_title(inputs)
	return fr_mcp_clients_quick_add_title(inputs)
});