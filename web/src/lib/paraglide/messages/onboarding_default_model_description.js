/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Default_Model_DescriptionInputs */

const en_onboarding_default_model_description = /** @type {(inputs: Onboarding_Default_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select the AI model Zenii will use by default. You can always switch models later in the chat toolbar.`)
};

const zh_cn2_onboarding_default_model_description = /** @type {(inputs: Onboarding_Default_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择 Zenii 默认使用的 AI 模型。你可以随时在聊天工具栏中切换模型。`)
};

const es_onboarding_default_model_description = /** @type {(inputs: Onboarding_Default_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecciona el modelo de IA que Zenii usará por defecto. Siempre puedes cambiar de modelo en la barra de herramientas del chat.`)
};

const ja_onboarding_default_model_description = /** @type {(inputs: Onboarding_Default_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii がデフォルトで使用する AI モデルを選択してください。チャットツールバーでいつでもモデルを切り替えられます。`)
};

const hi_onboarding_default_model_description = /** @type {(inputs: Onboarding_Default_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वह AI मॉडल चुनें जिसे Zenii डिफ़ॉल्ट रूप से उपयोग करेगा। आप चैट टूलबार में बाद में मॉडल बदल सकते हैं।`)
};

const pt_br2_onboarding_default_model_description = /** @type {(inputs: Onboarding_Default_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecione o modelo de IA que o Zenii usará por padrão. Você pode trocar de modelo a qualquer momento na barra de ferramentas do chat.`)
};

const ko_onboarding_default_model_description = /** @type {(inputs: Onboarding_Default_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii가 기본으로 사용할 AI 모델을 선택하세요. 채팅 도구 모음에서 언제든 모델을 변경할 수 있습니다.`)
};

const fr_onboarding_default_model_description = /** @type {(inputs: Onboarding_Default_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sélectionnez le modèle d'IA que Zenii utilisera par défaut. Vous pourrez toujours changer de modèle dans la barre d'outils de discussion.`)
};

/**
* | output |
* | --- |
* | "Select the AI model Zenii will use by default. You can always switch models later in the chat toolbar." |
*
* @param {Onboarding_Default_Model_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_default_model_description = /** @type {((inputs?: Onboarding_Default_Model_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Default_Model_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_default_model_description(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_default_model_description(inputs)
	if (locale === "es") return es_onboarding_default_model_description(inputs)
	if (locale === "ja") return ja_onboarding_default_model_description(inputs)
	if (locale === "hi") return hi_onboarding_default_model_description(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_default_model_description(inputs)
	if (locale === "ko") return ko_onboarding_default_model_description(inputs)
	return fr_onboarding_default_model_description(inputs)
});