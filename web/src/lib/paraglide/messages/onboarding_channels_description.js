/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Channels_DescriptionInputs */

const en_onboarding_channels_description = /** @type {(inputs: Onboarding_Channels_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Optionally connect messaging channels like Telegram, Slack, or Discord so Zenii can reach you there. You can skip this and set them up later in Settings.`)
};

const zh_cn2_onboarding_channels_description = /** @type {(inputs: Onboarding_Channels_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可选择连接 Telegram、Slack 或 Discord 等消息频道，让 Zenii 能通过这些渠道与你联系。你可以跳过此步骤，稍后在设置中配置。`)
};

const es_onboarding_channels_description = /** @type {(inputs: Onboarding_Channels_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opcionalmente conecta canales de mensajería como Telegram, Slack o Discord para que Zenii pueda contactarte por ahí. Puedes omitir esto y configurarlos después en Ajustes.`)
};

const ja_onboarding_channels_description = /** @type {(inputs: Onboarding_Channels_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Telegram、Slack、Discord などのメッセージチャンネルを接続して、Zenii がそこからあなたに連絡できるようにします（任意）。スキップして後から設定で構成することもできます。`)
};

const hi_onboarding_channels_description = /** @type {(inputs: Onboarding_Channels_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`वैकल्पिक रूप से Telegram, Slack, या Discord जैसे मैसेजिंग चैनल कनेक्ट करें ताकि Zenii आपसे वहाँ संपर्क कर सके। आप इसे छोड़कर बाद में सेटिंग्स में सेट कर सकते हैं।`)
};

const pt_br2_onboarding_channels_description = /** @type {(inputs: Onboarding_Channels_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opcionalmente conecte canais de mensagens como Telegram, Slack ou Discord para que o Zenii possa entrar em contato por lá. Você pode pular e configurar depois em Configurações.`)
};

const ko_onboarding_channels_description = /** @type {(inputs: Onboarding_Channels_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`선택적으로 Telegram, Slack 또는 Discord와 같은 메시징 채널을 연결하여 Zenii가 거기서도 연락할 수 있게 하세요. 건너뛰고 나중에 설정에서 설정할 수 있습니다.`)
};

const fr_onboarding_channels_description = /** @type {(inputs: Onboarding_Channels_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Connectez optionnellement des canaux de messagerie comme Telegram, Slack ou Discord pour que Zenii puisse vous joindre. Vous pouvez passer cette étape et les configurer plus tard dans Paramètres.`)
};

/**
* | output |
* | --- |
* | "Optionally connect messaging channels like Telegram, Slack, or Discord so Zenii can reach you there. You can skip this and set them up later in Settings." |
*
* @param {Onboarding_Channels_DescriptionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_channels_description = /** @type {((inputs?: Onboarding_Channels_DescriptionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Channels_DescriptionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_channels_description(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_channels_description(inputs)
	if (locale === "es") return es_onboarding_channels_description(inputs)
	if (locale === "ja") return ja_onboarding_channels_description(inputs)
	if (locale === "hi") return hi_onboarding_channels_description(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_channels_description(inputs)
	if (locale === "ko") return ko_onboarding_channels_description(inputs)
	return fr_onboarding_channels_description(inputs)
});