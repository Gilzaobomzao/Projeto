import { storage } from '../storage.js';

export const initialStage = {
  exec({ from }) {
    storage[from].stage = 1;

    return '👋 Olá, como vai? \n\nEu sou Julho, o *Asistente Virtual* da UniTec. \n* Como posso te ajudar?* 🙋‍♂️ \n-----------------------------------\n1️⃣ - ```SOLICITAR SERVIÇO``` \n2️⃣ - ```CONHECER A EMPRESA```\n0️⃣ - ```FALAR COM ATENDENTE```';
  },
};
