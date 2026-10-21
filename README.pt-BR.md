# Vulto Skeleton

Um placeholder simples para apps React Native: enquanto o conteúdo real carrega, blocos e linhas ocupam o espaço na tela.

Estou construindo o Vulto como um pacote open source pequeno, para resolver uma tarefa visual específica sem tomar para si a lógica do aplicativo. Ele não busca dados, não decide quando a tela está carregando e não exige um provider.

## Como está o projeto

O código está em desenvolvimento e ainda não foi publicado no npm. A API pode mudar antes da primeira versão estável.

## Experimente no Expo

O app em [`example/`](./example/README.md) mostra a primitive em uma tela de perfil e cartão. Há controles para alternar entre placeholders e conteúdo, além de ligar a pulsação.

```sh
cd example
npm install
npm start
```

Escaneie o QR code com o Expo Go 58. O telefone e o computador precisam estar na mesma rede Wi-Fi.

## Uso previsto

```tsx
import { View } from 'react-native';
import { Skeleton } from 'vulto-skeleton-native';

function PerfilCarregando() {
  return (
    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
      <Skeleton width={56} height={56} radius={28} />
      <View style={{ flex: 1, gap: 8 }}>
        <Skeleton width="72%" height={16} />
        <Skeleton width="48%" height={12} />
      </View>
    </View>
  );
}
```

Quando o pacote estiver publicado, a instalação será `npm install vulto-skeleton-native`.

## O que a primeira versão inclui

- Uma primitive configurável para blocos e linhas.
- Aparência estática como padrão e pulsação opcional.
- Respeito à preferência do sistema por movimento reduzido.
- Nenhuma dependência de runtime além de React e React Native, declaradas como peer dependencies.

O app que usa a biblioteca continua responsável por loading, dados, layouts e mensagens acessíveis. Templates de avatar, texto e cartão ficam para depois.

## Licença

MIT. Leia o arquivo [LICENSE](./LICENSE).

English: [README.md](./README.md).
