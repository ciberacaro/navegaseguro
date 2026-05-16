// Atualiza este ficheiro e faz push para mudar o alerta na homepage.
export const alerta = {
	titulo: 'QR codes falsos em parquímetros e carregadores de VE',
	descricao: 'Estão a ser detetados em Portugal autocolantes com QR codes falsos sobrepostos sobre os originais em parquímetros, cafés e postos de carregamento de veículos elétricos. Levam a páginas de pagamento falsas que roubam dados do cartão.',
	data: 'Maio 2026',
	nivel: 'alto',
	tags: ['Quishing', 'QR Code', 'Pagamento'],
	como_reconhecer: [
		'QR code que parece um autocolante colado por cima do original',
		'A página de pagamento não tem o nome da empresa esperada (EDP, Galp, câmara municipal)',
		'URL começa por http:// (sem "s") ou tem domínio não oficial',
		'Pede dados do cartão em vez de redirecionar para a app oficial'
	],
	o_que_fazer: 'Não pague por QR code que lhe pareça suspeito. Verifique fisicamente se o código está colado por cima de outro. Use sempre as apps oficiais ou escreva o endereço no browser. Denuncie autocolantes suspeitos à câmara municipal ou ao estabelecimento.'
};
