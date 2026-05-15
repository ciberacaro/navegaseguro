// Atualiza este ficheiro e faz push para mudar o alerta na homepage.
export const alerta = {
	titulo: 'Falsos SMS da EDP em circulação',
	descricao: 'Estão a circular SMS com o nome da EDP a pedir atualização de dados de faturação. A EDP não solicita dados de pagamento por SMS.',
	data: 'Maio 2026',
	nivel: 'alto', // 'alto' | 'medio' | 'baixo'
	tags: ['SMS', 'Phishing', 'Energia'],
	como_reconhecer: [
		'SMS de número desconhecido mas com nome "EDP" no campo remetente',
		'Link que não termina em ".edp.pt"',
		'Urgência: "atualize em 24h ou o serviço será suspenso"'
	],
	o_que_fazer: 'Apague a mensagem. Se tiver dúvidas sobre a sua conta, aceda diretamente a edp.pt escrevendo no browser — nunca pelo link do SMS.'
};
