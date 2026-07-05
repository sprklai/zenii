/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Provider_DescriptionInputs */

const en_onboarding_provider_description = /** @type {(inputs: Onboarding_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add an API key for at least one provider to enable chat. Expand a provider below, enter your key, and save it.`)
};

const zh_cn2_onboarding_provider_description = /** @type {(inputs: Onboarding_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为至少一个提供商添加 API 密钥以启用聊天。展开下方的提供商，输入密钥并保存。`)
};

const es_onboarding_provider_description = /** @type {(inputs: Onboarding_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añade una clave API para al menos un proveedor para habilitar el chat. Expande un proveedor abajo, ingresa tu clave y guárdala.`)
};

const ja_onboarding_provider_description = /** @type {(inputs: Onboarding_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`チャットを有効にするには、少なくとも 1 つのプロバイダーに API キーを追加してください。下のプロバイダーを展開し、キーを入力して保存します。`)
};

const hi_onboarding_provider_description = /** @type {(inputs: Onboarding_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`चैट सक्षम करने के लिए कम से कम एक प्रदाता के लिए API कुंजी जोड़ें। नीचे किसी प्रदाता को विस्तृत करें, अपनी कुंजी दर्ज करें, और सहेजें।`)
};

const pt_br2_onboarding_provider_description = /** @type {(inputs: Onboarding_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicione uma chave de API para pelo menos um provedor para habilitar o chat. Expanda um provedor abaixo, insira sua chave e salve.`)
};

const ko_onboarding_provider_description = /** @type {(inputs: Onboarding_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`채팅을 사용하려면 최소 하나의 공급자에 대한 API 키를 추가하세요. 아래에서 공급자를 확장하고 키를 입력한 후 저장하세요.`)
};

const fr_onboarding_provider_description = /** @type {(inputs: Onboarding_Provider_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajoutez une clé API pour au moins un fournisseur pour activer la discussion. Développez un fournisseur ci-dessous, entrez votre clé et enregistrez-la.`)
};

/**
* | output |
* | --- |
* | "Add an API key for at least one provider to enable chat. Expand a provider below, enter your key, and save it." |
*
* @param {Onboarding_Provider_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_provider_description = /** @type {((inputs?: Onboarding_Provider_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Provider_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_provider_description(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_provider_description(inputs)
	if (locale === "es") return es_onboarding_provider_description(inputs)
	if (locale === "ja") return ja_onboarding_provider_description(inputs)
	if (locale === "hi") return hi_onboarding_provider_description(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_provider_description(inputs)
	if (locale === "ko") return ko_onboarding_provider_description(inputs)
	return fr_onboarding_provider_description(inputs)
});