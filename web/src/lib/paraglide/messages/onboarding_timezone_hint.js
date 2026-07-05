/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Timezone_HintInputs */

const en_onboarding_timezone_hint = /** @type {(inputs: Onboarding_Timezone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auto-detected from your system. Edit if incorrect.`)
};

const zh_cn2_onboarding_timezone_hint = /** @type {(inputs: Onboarding_Timezone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已从系统自动检测。如有误请手动修改。`)
};

const es_onboarding_timezone_hint = /** @type {(inputs: Onboarding_Timezone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detectado automáticamente de tu sistema. Edita si es incorrecto.`)
};

const ja_onboarding_timezone_hint = /** @type {(inputs: Onboarding_Timezone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`システムから自動検出されました。正しくない場合は編集してください。`)
};

const hi_onboarding_timezone_hint = /** @type {(inputs: Onboarding_Timezone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`आपके सिस्टम से स्वतः पता लगाया गया। गलत होने पर संपादित करें।`)
};

const pt_br2_onboarding_timezone_hint = /** @type {(inputs: Onboarding_Timezone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detectado automaticamente do seu sistema. Edite se estiver incorreto.`)
};

const ko_onboarding_timezone_hint = /** @type {(inputs: Onboarding_Timezone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`시스템에서 자동 감지되었습니다. 잘못된 경우 수정하세요.`)
};

const fr_onboarding_timezone_hint = /** @type {(inputs: Onboarding_Timezone_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Détecté automatiquement depuis votre système. Modifiez si incorrect.`)
};

/**
* | output |
* | --- |
* | "Auto-detected from your system. Edit if incorrect." |
*
* @param {Onboarding_Timezone_HintInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_timezone_hint = /** @type {((inputs?: Onboarding_Timezone_HintInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Timezone_HintInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_timezone_hint(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_timezone_hint(inputs)
	if (locale === "es") return es_onboarding_timezone_hint(inputs)
	if (locale === "ja") return ja_onboarding_timezone_hint(inputs)
	if (locale === "hi") return hi_onboarding_timezone_hint(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_timezone_hint(inputs)
	if (locale === "ko") return ko_onboarding_timezone_hint(inputs)
	return fr_onboarding_timezone_hint(inputs)
});