/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Onboarding_Disclaimer_TextInputs */

const en_onboarding_disclaimer_text = /** @type {(inputs: Onboarding_Disclaimer_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii uses large language models (LLMs) to generate responses and can execute system-level actions (shell commands, file operations) on your behalf. LLM outputs may be inaccurate, incomplete, or inappropriate. System actions run with your user permissions. Always review AI-suggested actions before confirming. Use at your own risk.`)
};

const zh_cn2_onboarding_disclaimer_text = /** @type {(inputs: Onboarding_Disclaimer_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii 使用大语言模型（LLM）生成回复，并可以代表你执行系统级操作（Shell 命令、文件操作）。LLM 的输出可能不准确、不完整或不恰当。系统操作以你的用户权限运行。请在确认前始终审查 AI 建议的操作。使用风险自负。`)
};

const es_onboarding_disclaimer_text = /** @type {(inputs: Onboarding_Disclaimer_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii utiliza modelos de lenguaje grandes (LLMs) para generar respuestas y puede ejecutar acciones a nivel del sistema (comandos de shell, operaciones de archivos) en tu nombre. Las salidas de los LLMs pueden ser inexactas, incompletas o inapropiadas. Las acciones del sistema se ejecutan con tus permisos de usuario. Siempre revisa las acciones sugeridas por la IA antes de confirmarlas. Úsalo bajo tu propio riesgo.`)
};

const ja_onboarding_disclaimer_text = /** @type {(inputs: Onboarding_Disclaimer_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii は大規模言語モデル（LLM）を使用して応答を生成し、あなたに代わってシステムレベルの操作（シェルコマンド、ファイル操作）を実行できます。LLM の出力は不正確、不完全、または不適切な場合があります。システム操作はあなたのユーザー権限で実行されます。AI が提案する操作は確認前に必ずレビューしてください。ご利用は自己責任でお願いします。`)
};

const hi_onboarding_disclaimer_text = /** @type {(inputs: Onboarding_Disclaimer_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii बड़े भाषा मॉडल (LLM) का उपयोग प्रतिक्रियाएँ उत्पन्न करने के लिए करता है और आपकी ओर से सिस्टम-स्तरीय क्रियाएँ (शेल कमांड, फ़ाइल संचालन) निष्पादित कर सकता है। LLM आउटपुट अशुद्ध, अपूर्ण, या अनुचित हो सकते हैं। सिस्टम क्रियाएँ आपकी उपयोगकर्ता अनुमतियों के साथ चलती हैं। AI-सुझाई गई क्रियाओं की पुष्टि करने से पहले हमेशा समीक्षा करें। अपने जोखिम पर उपयोग करें।`)
};

const pt_br2_onboarding_disclaimer_text = /** @type {(inputs: Onboarding_Disclaimer_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii utiliza modelos de linguagem de grande porte (LLMs) para gerar respostas e pode executar ações em nível de sistema (comandos shell, operações de arquivo) em seu nome. Os resultados do LLM podem ser imprecisos, incompletos ou inadequados. As ações do sistema são executadas com suas permissões de usuário. Sempre revise as ações sugeridas pela IA antes de confirmar. Use por sua conta e risco.`)
};

const ko_onboarding_disclaimer_text = /** @type {(inputs: Onboarding_Disclaimer_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii는 대규모 언어 모델(LLM)을 사용하여 응답을 생성하며 사용자를 대신하여 시스템 수준 작업(셸 명령, 파일 작업)을 실행할 수 있습니다. LLM 출력은 부정확하거나 불완전하거나 부적절할 수 있습니다. 시스템 작업은 사용자 권한으로 실행됩니다. AI가 제안한 작업은 항상 확인 전에 검토하세요. 사용에 따른 책임은 본인에게 있습니다.`)
};

const fr_onboarding_disclaimer_text = /** @type {(inputs: Onboarding_Disclaimer_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zenii utilise des grands modèles de langage (LLMs) pour générer des réponses et peut exécuter des actions au niveau du système (commandes shell, opérations sur les fichiers) en votre nom. Les sorties des LLMs peuvent être inexactes, incomplètes ou inappropriées. Les actions système s'exécutent avec vos permissions utilisateur. Vérifiez toujours les actions suggérées par l'IA avant de les confirmer. Utilisation à vos risques et périls.`)
};

/**
* | output |
* | --- |
* | "Zenii uses large language models (LLMs) to generate responses and can execute system-level actions (shell commands, file operations) on your behalf. LLM outp..." |
*
* @param {Onboarding_Disclaimer_TextInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const onboarding_disclaimer_text = /** @type {((inputs?: Onboarding_Disclaimer_TextInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Onboarding_Disclaimer_TextInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_onboarding_disclaimer_text(inputs)
	if (locale === "zh-CN") return zh_cn2_onboarding_disclaimer_text(inputs)
	if (locale === "es") return es_onboarding_disclaimer_text(inputs)
	if (locale === "ja") return ja_onboarding_disclaimer_text(inputs)
	if (locale === "hi") return hi_onboarding_disclaimer_text(inputs)
	if (locale === "pt-BR") return pt_br2_onboarding_disclaimer_text(inputs)
	if (locale === "ko") return ko_onboarding_disclaimer_text(inputs)
	return fr_onboarding_disclaimer_text(inputs)
});