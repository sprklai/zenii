/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} App_TaglineInputs */

const en_app_tagline = /** @type {(inputs: App_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your private AI backend`)
};

const zh_cn2_app_tagline = /** @type {(inputs: App_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的私有 AI 后端`)
};

const es_app_tagline = /** @type {(inputs: App_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu backend privado de IA`)
};

const ja_app_tagline = /** @type {(inputs: App_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのプライベート AI バックエンド`)
};

const hi_app_tagline = /** @type {(inputs: App_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`आपका निजी AI बैकएंड`)
};

const pt_br2_app_tagline = /** @type {(inputs: App_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu backend de IA privado`)
};

const ko_app_tagline = /** @type {(inputs: App_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`나만의 프라이빗 AI 백엔드`)
};

const fr_app_tagline = /** @type {(inputs: App_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre backend IA privé`)
};

/**
* | output |
* | --- |
* | "Your private AI backend" |
*
* @param {App_TaglineInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const app_tagline = /** @type {((inputs?: App_TaglineInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<App_TaglineInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_app_tagline(inputs)
	if (locale === "zh-CN") return zh_cn2_app_tagline(inputs)
	if (locale === "es") return es_app_tagline(inputs)
	if (locale === "ja") return ja_app_tagline(inputs)
	if (locale === "hi") return hi_app_tagline(inputs)
	if (locale === "pt-BR") return pt_br2_app_tagline(inputs)
	if (locale === "ko") return ko_app_tagline(inputs)
	return fr_app_tagline(inputs)
});