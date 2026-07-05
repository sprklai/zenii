/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Permissions_FooterInputs */

const en_settings_permissions_footer = /** @type {(inputs: Settings_Permissions_FooterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Local surfaces (Desktop, CLI, TUI) have all tools enabled by default. Remote channels deny high-risk tools by default.`)
};

const zh_cn2_settings_permissions_footer = /** @type {(inputs: Settings_Permissions_FooterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本地界面（桌面、CLI、TUI）默认启用所有工具。远程频道默认拒绝高风险工具。`)
};

const es_settings_permissions_footer = /** @type {(inputs: Settings_Permissions_FooterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Las superficies locales (Escritorio, CLI, TUI) tienen todas las herramientas habilitadas por defecto. Los canales remotos deniegan las herramientas de alto riesgo por defecto.`)
};

const ja_settings_permissions_footer = /** @type {(inputs: Settings_Permissions_FooterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ローカル環境（デスクトップ、CLI、TUI）ではすべてのツールがデフォルトで有効です。リモートチャンネルでは高リスクツールがデフォルトで拒否されます。`)
};

const hi_settings_permissions_footer = /** @type {(inputs: Settings_Permissions_FooterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`लोकल सरफ़ेस (डेस्कटॉप, CLI, TUI) में सभी टूल डिफ़ॉल्ट रूप से सक्षम हैं। रिमोट चैनल उच्च-जोखिम टूल को डिफ़ॉल्ट रूप से अस्वीकार करते हैं।`)
};

const pt_br2_settings_permissions_footer = /** @type {(inputs: Settings_Permissions_FooterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Superfícies locais (Desktop, CLI, TUI) têm todas as ferramentas habilitadas por padrão. Canais remotos negam ferramentas de alto risco por padrão.`)
};

const ko_settings_permissions_footer = /** @type {(inputs: Settings_Permissions_FooterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`로컬 환경(데스크톱, CLI, TUI)에서는 모든 도구가 기본적으로 활성화됩니다. 원격 채널에서는 고위험 도구가 기본적으로 거부됩니다.`)
};

const fr_settings_permissions_footer = /** @type {(inputs: Settings_Permissions_FooterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les surfaces locales (Bureau, CLI, TUI) ont tous les outils activés par défaut. Les canaux distants refusent les outils à haut risque par défaut.`)
};

/**
* | output |
* | --- |
* | "Local surfaces (Desktop, CLI, TUI) have all tools enabled by default. Remote channels deny high-risk tools by default." |
*
* @param {Settings_Permissions_FooterInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_permissions_footer = /** @type {((inputs?: Settings_Permissions_FooterInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Permissions_FooterInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_permissions_footer(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_permissions_footer(inputs)
	if (locale === "es") return es_settings_permissions_footer(inputs)
	if (locale === "ja") return ja_settings_permissions_footer(inputs)
	if (locale === "hi") return hi_settings_permissions_footer(inputs)
	if (locale === "pt-BR") return pt_br2_settings_permissions_footer(inputs)
	if (locale === "ko") return ko_settings_permissions_footer(inputs)
	return fr_settings_permissions_footer(inputs)
});