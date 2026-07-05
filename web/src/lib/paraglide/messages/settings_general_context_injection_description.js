/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_General_Context_Injection_DescriptionInputs */

const en_settings_general_context_injection_description = /** @type {(inputs: Settings_General_Context_Injection_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepends identity files, soul, persona, environment details, and user profile into every agent prompt. Provides richer, more personalized responses at the cost of additional input tokens per message.`)
};

const zh_cn2_settings_general_context_injection_description = /** @type {(inputs: Settings_General_Context_Injection_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在每次代理提示中注入身份文件、灵魂、人格、环境详情和用户资料。以每条消息额外消耗输入令牌为代价，提供更丰富、更个性化的回复。`)
};

const es_settings_general_context_injection_description = /** @type {(inputs: Settings_General_Context_Injection_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antepone archivos de identidad, alma, persona, detalles del entorno y perfil de usuario en cada prompt del agente. Proporciona respuestas más ricas y personalizadas a costa de tokens de entrada adicionales por mensaje.`)
};

const ja_settings_general_context_injection_description = /** @type {(inputs: Settings_General_Context_Injection_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのエージェントプロンプトにアイデンティティファイル、ソウル、ペルソナ、環境情報、ユーザープロファイルを付加します。メッセージごとに追加のトークンを消費しますが、より豊かでパーソナライズされた応答を提供します。`)
};

const hi_settings_general_context_injection_description = /** @type {(inputs: Settings_General_Context_Injection_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`हर एजेंट प्रॉम्प्ट में आइडेंटिटी फ़ाइलें, सोल, पर्सोना, पर्यावरण विवरण, और उपयोगकर्ता प्रोफ़ाइल जोड़ता है। प्रति संदेश अतिरिक्त इनपुट टोकन की कीमत पर अधिक समृद्ध, व्यक्तिगत प्रतिक्रियाएँ प्रदान करता है।`)
};

const pt_br2_settings_general_context_injection_description = /** @type {(inputs: Settings_General_Context_Injection_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adiciona arquivos de identidade, alma, persona, detalhes do ambiente e perfil do usuário em cada prompt do agente. Fornece respostas mais ricas e personalizadas ao custo de tokens de entrada adicionais por mensagem.`)
};

const ko_settings_general_context_injection_description = /** @type {(inputs: Settings_General_Context_Injection_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`모든 에이전트 프롬프트에 아이덴티티 파일, 소울, 페르소나, 환경 세부 정보 및 사용자 프로필을 추가합니다. 메시지당 추가 입력 토큰 비용으로 더 풍부하고 개인화된 응답을 제공합니다.`)
};

const fr_settings_general_context_injection_description = /** @type {(inputs: Settings_General_Context_Injection_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajoute les fichiers d'identité, l'âme, la persona, les détails de l'environnement et le profil utilisateur à chaque prompt de l'agent. Fournit des réponses plus riches et personnalisées au prix de jetons d'entrée supplémentaires par message.`)
};

/**
* | output |
* | --- |
* | "Prepends identity files, soul, persona, environment details, and user profile into every agent prompt. Provides richer, more personalized responses at the co..." |
*
* @param {Settings_General_Context_Injection_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const settings_general_context_injection_description = /** @type {((inputs?: Settings_General_Context_Injection_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_General_Context_Injection_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_settings_general_context_injection_description(inputs)
	if (locale === "zh-CN") return zh_cn2_settings_general_context_injection_description(inputs)
	if (locale === "es") return es_settings_general_context_injection_description(inputs)
	if (locale === "ja") return ja_settings_general_context_injection_description(inputs)
	if (locale === "hi") return hi_settings_general_context_injection_description(inputs)
	if (locale === "pt-BR") return pt_br2_settings_general_context_injection_description(inputs)
	if (locale === "ko") return ko_settings_general_context_injection_description(inputs)
	return fr_settings_general_context_injection_description(inputs)
});