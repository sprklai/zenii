/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Providers_Default_Model_DescriptionInputs */

const en_settings_providers_default_model_description = /** @type {(inputs: Settings_Providers_Default_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The model Zenii uses by default. You can override this per-conversation in the chat toolbar.`)
};

const zh_cn2_settings_providers_default_model_description = /** @type {(inputs: Settings_Providers_Default_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii 默认使用的模型。你可以在聊天工具栏中按对话覆盖此设置。`)
};

const es_settings_providers_default_model_description = /** @type {(inputs: Settings_Providers_Default_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El modelo que Zenii usa por defecto. Puedes cambiarlo por conversación en la barra de herramientas del chat.`)
};

const ja_settings_providers_default_model_description = /** @type {(inputs: Settings_Providers_Default_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii がデフォルトで使用するモデルです。チャットツールバーで会話ごとに変更できます。`)
};

const hi_settings_providers_default_model_description = /** @type {(inputs: Settings_Providers_Default_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii जिस मॉडल का डिफ़ॉल्ट रूप से उपयोग करता है। आप चैट टूलबार में प्रति-वार्तालाप इसे बदल सकते हैं।`)
};

const pt_br2_settings_providers_default_model_description = /** @type {(inputs: Settings_Providers_Default_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O modelo que o Zenii usa por padrão. Você pode alterar por conversa na barra de ferramentas do chat.`)
};

const ko_settings_providers_default_model_description = /** @type {(inputs: Settings_Providers_Default_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii가 기본으로 사용하는 모델입니다. 채팅 도구 모음에서 대화별로 변경할 수 있습니다.`)
};

const fr_settings_providers_default_model_description = /** @type {(inputs: Settings_Providers_Default_Model_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le modèle que Zenii utilise par défaut. Vous pouvez le changer par conversation dans la barre d'outils de discussion.`)
};

/**
* | output |
* | --- |
* | "The model Zenii uses by default. You can override this per-conversation in the chat toolbar." |
*
* @param {Settings_Providers_Default_Model_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_providers_default_model_description = /** @type {((inputs?: Settings_Providers_Default_Model_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Providers_Default_Model_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_providers_default_model_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_providers_default_model_description(inputs)
	if (locale === "es") return es_settings_providers_default_model_description(inputs)
	if (locale === "ja") return ja_settings_providers_default_model_description(inputs)
	if (locale === "hi") return hi_settings_providers_default_model_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_providers_default_model_description(inputs)
	if (locale === "ko") return ko_settings_providers_default_model_description(inputs)
	return fr_settings_providers_default_model_description(inputs)
});