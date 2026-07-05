/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Add_Key_FirstInputs */

const en_onboarding_add_key_first = /** @type {(inputs: Onboarding_Add_Key_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add a key first`)
};

const zh_cn2_onboarding_add_key_first = /** @type {(inputs: Onboarding_Add_Key_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先添加密钥`)
};

const es_onboarding_add_key_first = /** @type {(inputs: Onboarding_Add_Key_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agrega una clave primero`)
};

const ja_onboarding_add_key_first = /** @type {(inputs: Onboarding_Add_Key_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まずキーを追加してください`)
};

const hi_onboarding_add_key_first = /** @type {(inputs: Onboarding_Add_Key_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`पहले एक कुंजी जोड़ें`)
};

const pt_br2_onboarding_add_key_first = /** @type {(inputs: Onboarding_Add_Key_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicione uma chave primeiro`)
};

const ko_onboarding_add_key_first = /** @type {(inputs: Onboarding_Add_Key_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`먼저 키를 추가하세요`)
};

const fr_onboarding_add_key_first = /** @type {(inputs: Onboarding_Add_Key_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajoutez d'abord une clé`)
};

/**
* | output |
* | --- |
* | "Add a key first" |
*
* @param {Onboarding_Add_Key_FirstInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_add_key_first = /** @type {((inputs?: Onboarding_Add_Key_FirstInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Add_Key_FirstInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_add_key_first(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_add_key_first(inputs)
	if (locale === "es") return es_onboarding_add_key_first(inputs)
	if (locale === "ja") return ja_onboarding_add_key_first(inputs)
	if (locale === "hi") return hi_onboarding_add_key_first(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_add_key_first(inputs)
	if (locale === "ko") return ko_onboarding_add_key_first(inputs)
	return fr_onboarding_add_key_first(inputs)
});