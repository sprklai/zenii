/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Provider_Add_HintInputs */

const en_onboarding_provider_add_hint = /** @type {(inputs: Onboarding_Provider_Add_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Need a different provider? Any OpenAI API-compatible service can be added via the + Add Provider button above the list.`)
};

const zh_cn2_onboarding_provider_add_hint = /** @type {(inputs: Onboarding_Provider_Add_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`需要其他提供商？任何兼容 OpenAI API 的服务都可以通过列表上方的 + 添加提供商按钮添加。`)
};

const es_onboarding_provider_add_hint = /** @type {(inputs: Onboarding_Provider_Add_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Necesitas un proveedor diferente? Cualquier servicio compatible con la API de OpenAI se puede añadir con el botón + Añadir proveedor sobre la lista.`)
};

const ja_onboarding_provider_add_hint = /** @type {(inputs: Onboarding_Provider_Add_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`別のプロバイダーが必要ですか？OpenAI API 互換のサービスであれば、リスト上部の + プロバイダーを追加ボタンから追加できます。`)
};

const hi_onboarding_provider_add_hint = /** @type {(inputs: Onboarding_Provider_Add_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कोई अन्य प्रदाता चाहिए? कोई भी OpenAI API-संगत सेवा सूची के ऊपर + प्रदाता जोड़ें बटन से जोड़ी जा सकती है।`)
};

const pt_br2_onboarding_provider_add_hint = /** @type {(inputs: Onboarding_Provider_Add_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Precisa de outro provedor? Qualquer serviço compatível com a API OpenAI pode ser adicionado pelo botão + Adicionar Provedor acima da lista.`)
};

const ko_onboarding_provider_add_hint = /** @type {(inputs: Onboarding_Provider_Add_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`다른 공급자가 필요한가요? OpenAI API 호환 서비스라면 목록 위의 + 공급자 추가 버튼으로 추가할 수 있습니다.`)
};

const fr_onboarding_provider_add_hint = /** @type {(inputs: Onboarding_Provider_Add_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besoin d'un autre fournisseur ? Tout service compatible avec l'API OpenAI peut être ajouté via le bouton + Ajouter un fournisseur au-dessus de la liste.`)
};

/**
* | output |
* | --- |
* | "Need a different provider? Any OpenAI API-compatible service can be added via the + Add Provider button above the list." |
*
* @param {Onboarding_Provider_Add_HintInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_provider_add_hint = /** @type {((inputs?: Onboarding_Provider_Add_HintInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Provider_Add_HintInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_provider_add_hint(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_provider_add_hint(inputs)
	if (locale === "es") return es_onboarding_provider_add_hint(inputs)
	if (locale === "ja") return ja_onboarding_provider_add_hint(inputs)
	if (locale === "hi") return hi_onboarding_provider_add_hint(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_provider_add_hint(inputs)
	if (locale === "ko") return ko_onboarding_provider_add_hint(inputs)
	return fr_onboarding_provider_add_hint(inputs)
});