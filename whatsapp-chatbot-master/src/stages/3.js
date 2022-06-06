import { storage } from '../storage.js';

export const stageThree = {
  async exec({ from, message, client }) {
    storage[from].address = message;
    storage[from].stage = 4;

    if (message === '*') {
      storage[from].stage = 0;
      return 'Pedido *Cancelado* com sucesso. \n Volte Sempre!';
    }

    let desserts = '';
    const itens = storage[from].itens;
    itens.map((item, index) => {
      if (index == itens.length - 1) {
        desserts += item.description + '.';
      } else {
        desserts += item.description + ', ';
      }
    });
    const total = storage[from].itens.length;

    await client.sendText(
      message.from,
      `🗒️ *RESUMO DO PEDIDO*: \n\n🧁 Serviços: *${desserts}*\n📍 Endereço:*${message}* \n💰 Valor dos serviços: *${
        total
      },00 reais*.\n\n` +
        '🔊 ```Agora, informe a forma de pagamento, por gentileza.```'
    );

    return '✅ *Pronto, pedido realizado!*\n\nAgora, vou repassar para um atendente para que ele verifique com você a melhor data para ser realizado o serviço. \n\n⏳ *Espere um minuto*';
  },
};
