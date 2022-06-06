import { menu } from '../menu.js';
import { storage } from '../storage.js';

export const stageTwo = {
  exec({ from, message }) {
    const order =
      '\n-----------------------------------\n#️⃣ - ```Finalizar Pedido``` \n*️⃣ - ```Cancelar Pedido```';
    if (message === '*') {
      storage[from].stage = 0;
      storage[from].itens = [];

      return '🔴 Solicitação *CANCELADA* com sucesso.\n\n ```Volte sempre!```';
    } else if (message === '#') {
      storage[from].stage = 3;

      return (
        '🗺️ Agora digite o *ENDEREÇO*. \n ( ```Rua, Número, Bairro``` ) \n\n ' +
        '\n-----------------------------------\n*️⃣ - ```Cancelar pedido```'
      );
    } else {
      if (!menu[message]) {
        return `❌ *Código inválido, redigite!* \n\n ${order}`;
      }
    }

    storage[from].itens.push(menu[message]);

    return (
      `✅ *${menu[message].description}* Adicionado com sucesso! \n\n` +
      '```Digite outra opção```: \n\n' +
      order
    );
  },
};
